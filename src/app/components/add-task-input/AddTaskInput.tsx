import * as React from 'react';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
};

const AddTaskInput: React.FC<Props> = ({ task, setTask}) => (
  <input
    className="task-input"
    type="text"
    placeholder="Add a task ... "
    value={task}
    onChange={e => setTask(e.target.value)}
  />
);

export default AddTaskInput;