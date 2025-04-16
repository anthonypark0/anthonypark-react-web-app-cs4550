import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
//import { useEffect, useState } from "react";
//import * as enrollmentClient from "./client"; // Import the client for enrollments
//import { useSelector } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment
}: {
updateEnrollment: (courseId: string, enrolled: boolean) => void;
enrolling: boolean;
setEnrolling: (enrolling: boolean) => void;
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
 // const { currentUser } = useSelector((state: any) => state.accountReducer); // Get the current user from Redux
  /*
  const [userEnrollments, setUserEnrollments] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the current user's enrollments
    const fetchEnrollments = async () => {
      const enrollments = await enrollmentClient.findUserEnrollments(currentUser._id);
      setUserEnrollments(enrollments);
    };

    fetchEnrollments();
  }, [currentUser]); // Re-fetch when the currentUser changes

  // Function to unenroll from a course
  const handleUnenroll = async (courseId: string) => {
    try {
      await enrollmentClient.unenroll(currentUser._id, courseId);
      alert("Unenrolled from course");
      setUserEnrollments(userEnrollments.filter(e => e.course !== courseId)); // Update the state to reflect the change
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };
  */

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      
      </h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {enrolling && (
              <button 
              onClick={(event) => {
                event.preventDefault();
                updateEnrollment(course._id, !course.enrolled);
              }}
              className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                {course.enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>

                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>

                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>

               
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
