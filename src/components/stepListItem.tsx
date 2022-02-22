import { Step } from '../state/step';

interface StepListItemProps {
  step: Step;
}

const StepListItem: React.FC<StepListItemProps> = ({ step }) => {
  return <div>{step.id}</div>;
};

export default StepListItem;
