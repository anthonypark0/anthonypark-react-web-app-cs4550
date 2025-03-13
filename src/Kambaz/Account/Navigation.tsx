import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    return `list-group-item border border-0 ${
      location.pathname.includes(path) ? "active" : "text-danger"
    }`;
  };

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Account/Signin" id="wd-course-signin-link" className={getLinkClasses("Signin")}>
        Signin
      </Link>
      <Link to="/Kambaz/Account/Signup" id="wd-course-signup-link" className={getLinkClasses("Signup")}>
        Signup
      </Link>
      <Link to="/Kambaz/Account/Profile" id="wd-course-profile-link" className={getLinkClasses("Profile")}>
        Profile
      </Link>
    </div>
  );
}
