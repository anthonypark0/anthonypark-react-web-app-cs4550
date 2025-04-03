import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [module, setModule] = useState({ name: '', description: '', score: 0, completed: false });
  const [newName, setNewName] = useState('');
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  const fetchModule = async () => {
    const response = await fetch('/lab5/module');
    const data = await response.json();
    setModule(data);
  };

  const fetchModuleName = async () => {
    const response = await fetch('/lab5/module/name');
    const name = await response.text();
    setModule((prev) => ({ ...prev, name }));
  };

  const updateName = async () => {
    await fetch('/lab5/module/name', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName })
    });
    fetchModule();
  };

  return (
    <div className="p-4">
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>Update Title</a>
      <FormControl className="w-75" id="wd-assignment-title" defaultValue={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment`}>Get Assignment</a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/title`}>Get Title</a>
      <hr />
      <button onClick={fetchModule} className="m-2 p-2 bg-blue-500 text-white">Get Module</button>
      <button onClick={fetchModuleName} className="m-2 p-2 bg-green-500 text-white">Get Module Name</button>
      <div className="m-2">
        <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="New Name" className="p-1 border" />
        <button onClick={updateName} className="ml-2 p-1 bg-yellow-500 text-white">Update Name</button>
      </div>
      <pre>{JSON.stringify(module, null, 2)}</pre>
    </div>
  );
}