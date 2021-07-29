export type PriorityType = '1' | '2' | '3';

export interface Task {
  task: string;
  priority: PriorityType;
};
