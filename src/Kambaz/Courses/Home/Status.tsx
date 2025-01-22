export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ textAlign: "center" }}>
            <h2>Course Status</h2>
            <div>
                <button style={{ margin: "10px" }}>Unpublish</button>
                <button style={{ margin: "10px" }}>Publish</button>
            </div>
            <div>
                <button >Import Exisiting Content</button>
                <button style={{ display: "block", margin: "0px auto" }}>Import from Commons</button>
                <button style={{ display: "block", margin: "0px auto" }}>Choose Home Page</button>
                <button style={{ display: "block", margin: "0px auto" }}>View Course Stream</button>
                <button style={{ display: "block", margin: "0px auto" }}>New Announcement</button>
                <button style={{ display: "block", margin: "0px auto" }}>New Analytics</button>
                <button style={{ display: "block", margin: "0px auto" }}>View Course Notifications</button>
            </div>
        </div> );}