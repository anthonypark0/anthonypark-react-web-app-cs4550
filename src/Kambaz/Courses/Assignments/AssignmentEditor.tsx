import { Modal, FormControl, Button } from "react-bootstrap";

export default function AssignmentEditor({
  show,
  handleClose,
  dialogTitle,
  assignmentName,
  setAssignmentName,
  assignmentDescription,
  setAssignmentDescription,
  assignmentPoints,
  setAssignmentPoints,
  assignmentDueDate,
  setAssignmentDueDate,
  assignmentAvailable,
  setAssignmentAvailable,
  addAssignment
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  assignmentDescription: string;
  setAssignmentDescription: (description: string) => void;
  assignmentPoints: number;
  setAssignmentPoints: (points: number) => void;
  assignmentDueDate: string;
  setAssignmentDueDate: (dueDate: string) => void;
  assignmentAvailable: string;
  setAssignmentAvailable: (available: string) => void;
  addAssignment: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          placeholder="Assignment Name"
          value={assignmentName}
          onChange={(e) => { setAssignmentName(e.target.value); }}
        />
        <FormControl
          placeholder="Assignment Description"
          value={assignmentDescription}
          onChange={(e) => { setAssignmentDescription(e.target.value); }}
        />
        <FormControl
          type="number"
          placeholder="Points"
          value={assignmentPoints}
          onChange={(e) => { setAssignmentPoints(Number(e.target.value)); }}
        />
        <FormControl
          type="datetime-local"
          placeholder="Due Date"
          value={assignmentDueDate}
          onChange={(e) => { setAssignmentDueDate(e.target.value); }}
        />
        <FormControl
          type="datetime-local"
          placeholder="Available Date"
          value={assignmentAvailable}
          onChange={(e) => { setAssignmentAvailable(e.target.value); }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            addAssignment();
            handleClose();
          }}
        >
          Add Assignment
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
