import { Form, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database"; 

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const assignment = assignments.find((a) => a._id === aid);
  if (!assignment) {
    return <p className="text-danger text-center mt-3">Assignment not found.</p>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h3>Edit Assignment</h3>

      <Form.Group as={Row} controlId="wd-name">
        <Form.Label column sm={2}>Assignment Name</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-description">
        <Form.Label column sm={2}>Description</Form.Label>
        <Col sm={10}>
          <Form.Control as="textarea" rows={3} defaultValue={`Description for ${assignment.title}`} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-points">
        <Form.Label column sm={2}>Points</Form.Label>
        <Col sm={10}>
          <Form.Control type="number" defaultValue={100} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-due">
        <Form.Label column sm={2}>Due</Form.Label>
        <Col sm={10}>
          <Form.Control type="date" defaultValue="2024-05-13" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-available">
        <Form.Label column sm={2}>Available from</Form.Label>
        <Col sm={10}>
          <Form.Control type="date" defaultValue="2024-05-06" />
        </Col>
      </Form.Group>

      <div className="d-flex justify-content-end gap-3 mt-4">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-primary">Save</Link>
      </div>
    </div>
  );
}
