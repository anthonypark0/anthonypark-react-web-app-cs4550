import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation();
  const { cid } = useParams();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  const getLinkClasses = (path: string) => {
    return `list-group-item border border-0 ${
      location.pathname.includes(path) ? "active" : "text-danger"
    }`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kambaz/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={getLinkClasses(link)}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}