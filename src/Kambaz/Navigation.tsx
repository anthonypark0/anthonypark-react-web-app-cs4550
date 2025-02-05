import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const location = useLocation();

  const getLinkClasses = (path: string) =>
    location.pathname === path
      ? "list-group-item text-center border-0 bg-white text-danger"
      : "list-group-item text-center border-0 bg-black text-white";

  return (
    <div
      id="wd-kambaz-navigation"
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 text-center"
      style={{ width: 110 }}
    >
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
      </a>
      <br />
      <Link to="/Kambaz/Account" id="wd-account-link" className={getLinkClasses("/Kambaz/Account")}>
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </Link>
      <br />
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link" className={getLinkClasses("/Kambaz/Dashboard")}>
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <br />
      <Link to="/Kambaz/Courses" id="wd-course-link" className={getLinkClasses("/Kambaz/Courses")}>
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <br />
      <Link to="/Kambaz/Calendar" id="wd-calendar-link" className={getLinkClasses("/Kambaz/Calendar")}>
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <br />
      <Link to="/Kambaz/Inbox" id="wd-inbox-link" className={getLinkClasses("/Kambaz/Inbox")}>
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <br />
      <Link to="/Labs" id="wd-labs-link" className={getLinkClasses("/Labs")}>
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
      <br />
    </div>
  );
}
