import { useState } from "react";
import "./styles.css";

export default function App() {
  const [pending, SetPending] = useState(["Task1", "Task2", "Task3", "Task4"]);

  const [compeleted, SetCompelete] = useState([]);

  const showList = (task, index) => {
    return (
      <div>
        {task}
        <button
          onClick={() => {
            taskComplete(index);
          }}
        >
          X
        </button>
      </div>
    );
  };

  const completeTask = (task, index) => {
    return <div>{task}</div>;
  };

  const taskComplete = (index) => {
    var p = [...pending];
    var c = [...compeleted];

    c.push(pending[index]);
    p.splice(index, 1);

    SetPending(p);
    SetCompelete(c);
  };

  return (
    <div>
      <div className="task-list">
        <h1>My Tasks</h1>
        {pending.map(showList)}
      </div>

      <div className="task-list">
        <h1>Compeleted Tasks</h1>
        {compeleted.map(completeTask)}
      </div>
    </div>
  );
}
