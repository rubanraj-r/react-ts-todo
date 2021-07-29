import * as React from "react";
import { AddButton, AddTaskInput, SelectPriority } from "../../components";
import { PriorityType, Task } from "../../../interface";
import './AddNewTask.css';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const AddNewTask: React.FC<Props> = ({ tasks, setTasks }) => {
  const [task, setTask] = React.useState<string>('');
  const [priority, setPriority] = React.useState<PriorityType | ''>('');
  
  return (
    <div className="add-task">
      <AddTaskInput task={task} setTask={setTask} />
      <SelectPriority setPriority={setPriority} />
      <AddButton onClick={() => {
        if (priority !== '') {
          setTasks([...tasks, {task, priority: priority as PriorityType}]);
          setTask('');
          setPriority('');
          (document.getElementById('select-priority') as HTMLSelectElement).selectedIndex = 0;
        }
       }}
      />
    </div>
  );
};

export default AddNewTask;