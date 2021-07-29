import * as React from 'react';

interface Props {
  taskName: string;
};

const TaskItem: React.FC<Props> = 
  ({ taskName }): React.ReactElement<HTMLSpanElement> => (
    <span className="task-name">
      {taskName}
    </span>
  );

export default TaskItem;
