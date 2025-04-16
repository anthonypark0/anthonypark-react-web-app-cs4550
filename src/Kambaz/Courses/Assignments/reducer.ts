import { createSlice } from "@reduxjs/toolkit";
//import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload: assignments }) => {
        state.assignments = assignments;
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        name: assignment.name,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
     // state.assignments.push(newAssignment);  // Directly modify the array
    },
    /*
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      );
    },
    */
  },
});

export const {  addAssignment, setAssignments } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
