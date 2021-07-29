import * as React from 'react';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
};

const AddTaskInput: React.FC<Props> = 
  ({ task, setTask}): React.ReactElement<HTMLInputElement> => (
    <input
      className="task-input"
      type="text"
      placeholder="Add a task ... "
      value={task}
      onChange={
        (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)
      }
    />
  );

export default AddTaskInput;