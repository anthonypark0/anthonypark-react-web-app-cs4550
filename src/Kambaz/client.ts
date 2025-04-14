import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enroll = async (userId: string, courseId: string) =>
  (await axios.post(ENROLLMENTS_API, { userId, courseId })).data;

export const unenroll = async (userId: string, courseId: string) =>
  (await axios.delete(ENROLLMENTS_API, { data: { userId, courseId } })).status === 200;

export const findUserEnrollments = async (userId: string) =>
  (await axios.get(`${REMOTE_SERVER}/api/users/${userId}/enrollments`)).data;
