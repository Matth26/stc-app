import { Step } from '../state/step';
import dayjs from 'dayjs';
import { useActions } from '../hooks/use-actions';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styles from '../styles/Stc.module.css';

interface StepListItemProps {
  step: Step;
}

const StepListItem: React.FC<StepListItemProps> = ({ step }) => {
  const { updateStep, removeStep } = useActions();

  return (
    <div className="is-flex is-flex-direction-row is-align-items-center mb-2">
      <span className="icon is-small mr-2">
        <i className="fas fa-angle-right"></i>
      </span>
      <div className="my-auto mr-2">
        <div className={styles.picker}>
          <DayPickerInput
            value={step.date}
            onDayChange={(day) => updateStep(step.id, day, step.text)}
          />
        </div>
      </div>
      <input
        className="input is-small mr-2"
        type="text"
        value={step.text}
        placeholder="Step"
        onChange={(e) => updateStep(step.id, step.date, e.target.value)}
      ></input>
      <span
        className="icon is-small has-text-danger mr-1"
        onClick={() => removeStep(step.id)}
      >
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};

export default StepListItem;
