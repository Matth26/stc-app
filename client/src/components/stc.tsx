import { useState } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import StepList from './stepList';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { StcState, Stc as StcType } from '../state/types';

import styles from '../styles/Stc.module.css';

interface StcProps {
  id: string;
}

const Stc: React.FC<StcProps> = ({ id }) => {
  const stc: StcState = useTypedSelector(({ stc }) => stc);
  const chart: StcType = stc.charts[id];

  const { updateCurrent, updateGoal, addStep, toggleEditMode, selectChart } =
    useActions();
  selectChart(id);
  const [date, setDate] = useState<Date>(new Date());
  const [step, setStep] = useState('');

  return (
    <>
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        {stc.mode === 'edit' ? (
          <div className="is-flex">
            <h1 className="title mt-4">Structural Tension Chart - </h1>
            <input className="my-4 ml-2" type="text" value={chart.name} />
          </div>
        ) : (
          <h1 className="title mt-4">
            Structural Tension Chart - {chart.name}
          </h1>
        )}
        <div className="is-flex is-justify-content-flex-end">
          <button
            className="button is-info m-0"
            onClick={() => {
              toggleEditMode();
            }}
          >
            {stc.mode === 'edit' ? 'Read Mode' : 'Edit Mode'}
          </button>
        </div>
      </div>

      <div className="mb-4 mt-2">
        <h2 className="title is-4 mb-3">Goal</h2>
        {stc.mode === 'edit' ? (
          <textarea
            className="textarea"
            placeholder="Goal"
            value={chart.goal}
            onChange={(e) => updateGoal(e.target.value)}
          />
        ) : (
          <div className="content">
            {chart.goal.split('\n').map((p: string, index: number) => (
              <p key={index} className="m-0">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4 mt-2">
        <h2 className="title is-4 mb-3">Steps</h2>
        <StepList mode={stc.mode} steps={chart.steps} />

        {stc.mode === 'edit' && (
          <>
            <h3 className="title is-6 mb-1 mt-4">Create new step</h3>
            <div className="columns mx-auto">
              <div className="my-auto mr-2">
                <div className={styles.picker}>
                  <DayPickerInput
                    value={date}
                    onDayChange={(day) => setDate(day)}
                  />
                </div>
              </div>
              <input
                className="column my-auto input is-small"
                type="text"
                value={step}
                placeholder="Step"
                onChange={(e) => setStep(e.target.value)}
              ></input>
              <div className="column is-1">
                <button
                  className="button is-primary is-small m-0"
                  onClick={() => {
                    addStep(date, step);
                    setDate(new Date());
                    setStep('');
                  }}
                >
                  Add step
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2 className="title is-4 mb-3">Current Reality</h2>

        {stc.mode === 'edit' ? (
          <textarea
            className="textarea"
            placeholder="Current"
            value={chart.current}
            onChange={(e) => updateCurrent(e.target.value)}
          />
        ) : (
          <div className="content">
            {chart.current.split('\n').map((p: string, index: number) => (
              <p key={index} className="m-0">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Stc;
