import * as React from 'react';
import { PriorityType } from '../../../interface';
import './SelectPriority.css';

interface Props {
  setPriority: React.Dispatch<React.SetStateAction<PriorityType | ''>>
};

interface PriorityOption {
  value: string;
  name: string;
};

const options: PriorityOption[] = [
  {
    value: '',
    name: 'Select Priority'
  },
  {
    value: '1',
    name: '1'
  },
  {
    value: '2',
    name: '2'
  },
  {
    value: '3',
    name: '3'
  },
];

const SelectPriority: React.FC<Props> = 
  ({ setPriority }): React.ReactElement<HTMLSelectElement> => (
    <select
      className="select-priority"
      id="select-priority"
      onChange={e => setPriority(e.target.value as PriorityType)}
    >
      {options.map((option: PriorityOption, i: number) => 
        <option
          key={i}
          className="priority-option"
          value={option.value}
        >
          {option.name}
        </option>
      )}
    </select>
  );

export default SelectPriority;
