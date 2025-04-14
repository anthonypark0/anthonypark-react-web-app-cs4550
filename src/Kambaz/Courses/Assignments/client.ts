import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const findAssignmentsByCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.get(`/api/assignments/course/${courseId}`);
    return data;
  };
  
  export const createAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.post("/api/assignments", assignment);
    return data;
  };
  
  export const deleteAssignment = async (assignmentId: string) => {
    const { status } = await axiosWithCredentials.delete(`/api/assignments/${assignmentId}`);
    return status === 200;
  };
  