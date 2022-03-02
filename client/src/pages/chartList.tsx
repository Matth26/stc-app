import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Chart } from '../state/types';
import { useActions } from '../hooks/use-actions';
import { useState } from 'react';

const ChartList: React.FC = () => {
  const charts: Chart[] = useTypedSelector(({ charts }) => charts);

  const { submitChart, deleteChart, fetchCharts } = useActions();
  useEffect(() => {
    fetchCharts();
  }, [fetchCharts]);

  const [chartName, setChartName] = useState('');

  return (
    <>
      <ul className="mr-3">
        {Object.values(charts).map((chart: Chart) => {
          return (
            <li
              key={String(chart._id)}
              className="is-flex is-align-items-center"
            >
              <span className="icon is-small mr-2 ">
                <i className="fas fa-angle-right"></i>
              </span>
              <div style={{ width: '200px' }}>
                <Link to={`/c/${String(chart._id)}`}>{chart.name}</Link>
              </div>
              <button
                className="delete is-small ml-2"
                onClick={() => deleteChart(chart._id)}
              ></button>
            </li>
          );
        })}
      </ul>
      <div>
        <h3 className="title is-6 mb-1 mt-4">Create new chart</h3>
        <div className="columns mx-auto">
          <input
            className="column is-4 my-auto input is-small"
            type="text"
            value={chartName}
            placeholder="Chart name"
            onChange={(e) => setChartName(e.target.value)}
          ></input>
          <div className="column is-1">
            <button
              className="button is-primary is-small m-0"
              onClick={() => {
                //addChart(chartName);
                submitChart(chartName, '', '', []);
                setChartName('');
              }}
            >
              Add chart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartList;
