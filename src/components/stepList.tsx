import { useTypedSelector } from '../hooks/use-typed-selector';
import { Step } from '../state/step';
import StepListItem from './stepListItem';

interface StepListProps {
  steps: Step[];
}

const StepList: React.FC<StepListProps> = ({ steps }) => {
  return (
    <div>
      {steps.map((s: Step) => {
        return <StepListItem key={s.id} step={s} />;
      })}
    </div>
  );
};

export default StepList;
