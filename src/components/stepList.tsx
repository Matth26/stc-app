import { Step } from '../state/types';
import StepListItem from './stepListItem';

interface StepListProps {
  mode: 'read' | 'edit';
  steps: Step[];
}

const StepList: React.FC<StepListProps> = ({ mode, steps }) => {
  return (
    <div className="ml-4">
      {steps.map((s: Step) => {
        return <StepListItem key={s.id} step={s} mode={mode} />;
      })}
    </div>
  );
};

export default StepList;
