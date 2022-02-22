import { useTypedSelector } from '../hooks/use-typed-selector';
import { Step } from '../state/step';
import StepListItem from './stepListItem';

const StepList: React.FC = () => {
  const steps = useTypedSelector(({ stc: { steps } }) => steps);
  return (
    <div>
      {steps.map((s: Step) => {
        return <StepListItem key={s.id} step={s} />;
      })}
    </div>
  );
};

export default StepList;
