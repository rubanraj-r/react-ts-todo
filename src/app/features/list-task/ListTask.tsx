import * as React from 'react';
import { DeleteButton, TaskItem } from '../../components';
import { PriorityType, Task } from '../../interface';
import './ListTask.css';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const ListTask: React.FC<Props> = ({ tasks, setTasks }) => {
  const sortedTask: Task[] = tasks.sort((a, b) => 
    parseInt(a.priority as string) - parseInt(b.priority as string));

  function determineFontColor(priority: PriorityType): string {
    if (priority === '1') return 'red';
    if (priority === '2') return 'blue';
    if (priority === '3') return 'pink';
    return 'black';
  }

  const deleteTask = (i: number) => {
    tasks.splice(i, 1);
    setTasks([...tasks]);
  };

  return (
    <ul className="task-list">
      {tasks.length > 0 ?
      sortedTask.map((task: Task, i: number) => {
        return (
          <div key={i}>
            <li
              className="task-list-item"
              style={{color: determineFontColor(task.priority)}}
            >
              <TaskItem taskName={task.task} />
              <DeleteButton onClick={() => deleteTask(i)} />
            </li>
            <hr className="hr" />
          </div>
        );
      }) : <span className="empty-list"> Nothing ToDo! </span>}
    </ul>
  );
}

export default ListTask;
