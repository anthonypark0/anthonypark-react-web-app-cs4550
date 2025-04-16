import { ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import * as assignmentsClient from "../client";
import { setAssignments, addAssignment, deleteAssignment } from "./reducer";
import * as secondClient from "./client";
export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDescription] = useState("");
  const [assignmentPoints] = useState(0);
  const [assignmentDueDate] = useState("");
  const [assignmentAvailable] = useState("");
  const addAssignmentHandler = async() => {
    const newAssignment = await assignmentsClient.createAssignmentForCourse(cid!, {
        _id: Math.random().toString(36).substr(2, 9),  // Generates a random id for the new assignment
        title: assignmentName,
        description: assignmentDescription,
        points: assignmentPoints,
        due: assignmentDueDate,
        available: assignmentAvailable,
      });
    dispatch(addAssignment(newAssignment));
    setAssignmentName("");
  }

  const deleteAssignmentHandler = async (assignmentId : string) => {
    await secondClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  
  const fetchAssignmentsForCourse = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid!);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignmentsForCourse();
  }, [cid]);
  
  const assignments = useSelector((state: any) => state.assignmentReducer?.assignments || []);

  return (
    <div className="p-3">
      <h3 className="d-flex align-items-center justify-content-between border-bottom pb-2">
        <span>ASSIGNMENTS <small className="text-muted">40% of Total</small></span>
      </h3>
      <Button variant="success" size="sm" onClick={addAssignmentHandler}>
          + New Assignment
        </Button>
      <ListGroup variant="flush">
        {assignments.length > 0 ? (
          assignments.map((assignment: any) => (
            <ListGroup.Item key={assignment._id} className="border-start border-success ps-3 mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-4" />
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="fw-bold text-dark text-decoration-none"
                  >
                    {assignment.title}
                  </a>
                  <div className="text-muted small mt-1">
                    <b>Due:</b> {assignment.due || "TBD"} &nbsp;|&nbsp;
                    <b>Points:</b> {assignment.points ?? 0}
                  </div>
                </div>
                <FaTrash
                  className="text-danger me-2 mb-1"
                  role="button"
                  onClick={() => deleteAssignmentHandler(assignment._id)}
                  title="Delete Assignment"
                />
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <p className="text-muted text-center mt-3">No assignments available for this course.</p>
        )}
      </ListGroup>
    </div>
  );
}
