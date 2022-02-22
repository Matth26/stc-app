import { Step } from '../state/step';
import StepListItem from './stepListItem';

interface StepListProps {
  mode: 'read' | 'edit';
  steps: Step[];
}

const StepList: React.FC<StepListProps> = ({ mode, steps }) => {
  return (
    <div>
      {steps.map((s: Step) => {
        return <StepListItem key={s.id} step={s} mode={mode} />;
      })}
    </div>
  );
};

export default StepList;
