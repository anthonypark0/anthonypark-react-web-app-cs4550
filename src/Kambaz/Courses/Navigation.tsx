import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    return `list-group-item border border-0 ${
      location.pathname.includes(path) ? "active" : "text-danger"
    }`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link" className={getLinkClasses("Home")}>
        Home
      </Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link" className={getLinkClasses("Modules")}>
        Modules
      </Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link" className={getLinkClasses("Piazza")}>
        Piazza
      </Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link" className={getLinkClasses("Zoom")}>
        Zoom
      </Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-assignments-link" className={getLinkClasses("Assignments")}>
        Assignments
      </Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-quizzes-link" className={getLinkClasses("Quizzes")}>
        Quizzes
      </Link>
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link" className={getLinkClasses("People")}>
        People
      </Link>
    </div>
  );
}
