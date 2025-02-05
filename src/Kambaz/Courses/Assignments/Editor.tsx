import { Button, Form, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <h3>Edit Assignment</h3>

      <Form.Group as={Row} controlId="wd-name">
        <Form.Label column sm={2}>Assignment Name</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-description">
        <Form.Label column sm={2}>Description</Form.Label>
        <Col sm={10}>
          <Form.Control as="textarea" rows={3}>
            The assignment is available online Submit a link to the landing page of
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-points">
        <Form.Label column sm={2}>Points</Form.Label>
        <Col sm={10}>
          <Form.Control type="number" defaultValue={100} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-select-assignment-group">
        <Form.Label column sm={2}>Assignment Group</Form.Label>
        <Col sm={10}>
          <Form.Control as="select" defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-select-display-grade">
        <Form.Label column sm={2}>Display Grade as</Form.Label>
        <Col sm={10}>
          <Form.Control as="select" defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-select-submission-type">
        <Form.Label column sm={2}>Submission Type</Form.Label>
        <Col sm={10}>
          <Form.Control as="select" defaultValue="Online">
            <option value="Online">Online</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-entry-options">
        <Form.Label column sm={2}>Online Entry Options</Form.Label>
        <Col sm={10}>
          <Form.Check type="checkbox" label="Text Entry" />
          <Form.Check type="checkbox" label="Website URL" />
          <Form.Check type="checkbox" label="Media Recordings" />
          <Form.Check type="checkbox" label="Student Annotation" />
          <Form.Check type="checkbox" label="File Uploads" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="wd-assign">
        <Form.Label column sm={2}>Assign to</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" defaultValue="Everyone" />
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

      <Form.Group as={Row} controlId="wd-until">
        <Form.Label column sm={2}>Until</Form.Label>
        <Col sm={10}>
          <Form.Control type="date" defaultValue="2024-05-20" />
        </Col>
      </Form.Group>

      <div className="d-flex justify-content-end gap-3 mt-4">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
}
