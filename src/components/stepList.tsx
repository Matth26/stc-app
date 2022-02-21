import { useTypedSelector } from '../hooks/use-typed-selector';
import { Step } from '../state/step';

const StepList: React.FC = () => {
  const steps = useTypedSelector(({ stc: { steps } }) => steps);
  console.log(steps);
  return (
    <div>
      {steps.map((s: Step) => {
        return <div key={s.id}>{s.id}</div>;
      })}
    </div>
  );
};

export default StepList;
