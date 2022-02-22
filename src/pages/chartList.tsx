import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Stc as Chart } from '../state/types';
import { useActions } from '../hooks/use-actions';

const ChartList: React.FC = () => {
  const charts = useTypedSelector(({ charts }) => charts.charts);
  const { removeChart } = useActions();

  console.log(charts);
  return (
    <>
      <ul className="mr-3">
        {charts.map((chart: Chart) => (
          <li key={chart.id} className="is-flex is-align-items-center">
            <span className="icon is-small mr-2 ">
              <i className="fas fa-angle-right"></i>
            </span>
            <div style={{ width: '200px' }}>
              <Link to={`/c/${chart.id}`}>{chart.name}</Link>
            </div>
            <button
              className="delete is-small ml-2"
              onClick={() => removeChart(chart.id)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ChartList;
