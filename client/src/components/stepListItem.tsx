import { Step } from '../state/types';
import { useActions } from '../hooks/use-actions';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styles from '../styles/Stc.module.css';

interface StepListItemProps {
  step: Step;
  mode: 'read' | 'edit';
}

const StepListItem: React.FC<StepListItemProps> = ({ mode, step }) => {
  const { updateStep, removeStep } = useActions();

  return (
    <div className="is-flex is-flex-direction-row is-align-items-center mb-2">
      <span className="icon is-small mr-2">
        <i className="fas fa-angle-right"></i>
      </span>

      {mode === 'edit' ? (
        <div className="my-auto mr-2">
          <div className={styles.picker}>
            <DayPickerInput
              value={step.date}
              onDayChange={(day) => updateStep(step.id, day, step.text)}
            />
          </div>
        </div>
      ) : (
        <div className="mr-2">{step.date.toISOString().slice(0, 10)}</div>
      )}

      {mode === 'edit' ? (
        <input
          className="input is-small mr-2"
          type="text"
          value={step.text}
          placeholder="Step"
          onChange={(e) => updateStep(step.id, step.date, e.target.value)}
        ></input>
      ) : (
        <div>{step.text}</div>
      )}

      {mode === 'edit' && (
        <button className="delete" onClick={() => removeStep(step.id)}></button>
      )}
    </div>
  );
};

export default StepListItem;
