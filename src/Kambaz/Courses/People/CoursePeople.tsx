import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as courseClient from "../client";
import PeopleTable from "./Table";

export default function CoursePeople() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async () => {
    if (!cid) return;
    const data = await courseClient.findUsersForCourse(cid);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsersForCourse();
  }, [cid]);

  return (
    <div className="p-3">
      <PeopleTable users={users} />
    </div>
  );
}
