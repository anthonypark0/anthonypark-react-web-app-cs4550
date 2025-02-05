import { Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import { AiOutlineFolderAdd, AiOutlineFileAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-light"><FaSearch /></InputGroup.Text>
        <FormControl placeholder="Search for Assignments" className="bg-light" />
      </InputGroup>

      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="secondary" className="d-flex align-items-center">
          <AiOutlineFolderAdd className="me-1" /> Group
        </Button>
        <Button variant="success" className="d-flex align-items-center">
          <AiOutlineFileAdd className="me-1" /> Assignment
        </Button>
      </div>

      <h3 className="d-flex align-items-center justify-content-between border-bottom pb-2">
        <span>ASSIGNMENTS <small className="text-muted">40% of Total</small></span>
        <Button variant="outline-secondary" size="sm">+</Button>
      </h3>

      <ListGroup variant="flush">
        <ListGroup.Item className="border-start border-success ps-3 mb-2">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-dark d-block">
            A1 - ENV + HTML
          </a>
          <div className="text-muted small">
            <span>Multiple Modules | </span>
            <b>Not available until</b> <span>May 6 at 12:00 am |</span>
            <div><b>Due </b><span>May 13 at 11:59pm | 100 pts</span></div>
          </div>

        </ListGroup.Item>

        <ListGroup.Item className="border-start border-success ps-3 mb-2">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-dark d-block">
            A2 - CSS + BOOTSTRAP
          </a>
          <div className="text-muted small">
            <span>Multiple Modules | </span>
            <b>Not available until</b> <span>May 13 at 12:00 am |</span>
            <div><b>Due </b><span>May 20 at 11:59pm | 100 pts</span></div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="border-start border-success ps-3 mb-2">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-dark d-block">
            A3 - JAVASCRIPT + REACT
          </a>
          <div className="text-muted small">
            <span>Multiple Modules | </span>
            <b>Not available until</b> <span>May 20 at 12:00 am |</span>
            <div><b>Due </b><span>May 27 at 11:59pm | 100 pts</span></div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
