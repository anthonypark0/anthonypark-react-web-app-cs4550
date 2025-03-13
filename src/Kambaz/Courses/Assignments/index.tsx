import { Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import { AiOutlineFolderAdd, AiOutlineFileAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { useState } from "react";
import AssignmentEditor from "./AssignmentEditor";
import { addAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa"
export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const [courseAssignments, setCourseAssignments] = useState<any[]>(db.assignments);
  const [show, setShow] = useState(false);

  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [assignmentPoints, setAssignmentPoints] = useState(0);
  const [assignmentDueDate, setAssignmentDueDate] = useState("");
  const [assignmentAvailable, setAssignmentAvailable] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddAssignment = () => {
    const newAssignment = {
      _id: Math.random().toString(36).substr(2, 9),  // Generates a random id for the new assignment
      title: assignmentName,
      description: assignmentDescription,
      points: assignmentPoints,
      due: assignmentDueDate,
      available: assignmentAvailable,
    };

    // Dispatch the addAssignment action
    dispatch(addAssignment(newAssignment));

    // Update the local state with the new assignment
    setCourseAssignments([...courseAssignments, newAssignment]);

    // Clear the input fields after adding the assignment
    setAssignmentName("");
    setAssignmentDescription("");
    setAssignmentPoints(0);
    setAssignmentDueDate("");
    setAssignmentAvailable("");
    handleClose();  // Close the modal
  };
  const deleteAssignment = (assignmentId: string) => {
    setCourseAssignments(courseAssignments.filter((m) => m._id !== assignmentId));
  };
  return (
    <div id="wd-assignments" className="p-3">
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-light">
          <FaSearch />
        </InputGroup.Text>
        <FormControl placeholder="Search for Assignments" className="bg-light" />
      </InputGroup>

      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="secondary" className="d-flex align-items-center">
          <AiOutlineFolderAdd className="me-1" /> Group
        </Button>
        <Button variant="success" onClick={handleShow} className="d-flex align-items-center">
          <AiOutlineFileAdd className="me-1" /> Assignment
        </Button>
      </div>

      <h3 className="d-flex align-items-center justify-content-between border-bottom pb-2">
        <span>ASSIGNMENTS <small className="text-muted">40% of Total</small></span>
        <Button variant="outline-secondary" size="sm">+</Button>
      </h3>

      <ListGroup variant="flush">
        {courseAssignments.length > 0 ? (
          courseAssignments.map((assignment) => (
            <ListGroup.Item key={assignment._id} className="border-start border-success ps-3 mb-2">
              <a
                href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                className="fw-bold text-dark d-block"
              >
                {assignment.title}
              </a>
              <div className="text-muted small">
                <span>Multiple Modules | </span>
                <b>Not available until</b> <span>May 6 at 12:00 am |</span>
                <div><b>Due </b><span>May 13 at 11:59pm | 100 pts</span></div>
              </div>
              <FaTrash className="text-danger me-2 mb-1" onClick= {() => deleteAssignment(assignment._id)}/>
            </ListGroup.Item>
          ))
        ) : (
          <p className="text-muted text-center mt-3">No assignments available for this course.</p>
        )}
      </ListGroup>
      <AssignmentEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Assignment"
        assignmentName={assignmentName}
        setAssignmentName={setAssignmentName}
        assignmentDescription={assignmentDescription}
        setAssignmentDescription={setAssignmentDescription}
        assignmentPoints={assignmentPoints}
        setAssignmentPoints={setAssignmentPoints}
        assignmentDueDate={assignmentDueDate}
        setAssignmentDueDate={setAssignmentDueDate}
        assignmentAvailable={assignmentAvailable}
        setAssignmentAvailable={setAssignmentAvailable}
        addAssignment={handleAddAssignment}
      />
    </div>
  );
}
