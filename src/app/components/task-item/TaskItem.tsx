import * as React from 'react';

interface Props {
  taskName: string;
};

const TaskItem: React.FC<Props> = ({ taskName }) => (
  <span className="task-name">
    {taskName}
  </span>
);

export default TaskItem;
