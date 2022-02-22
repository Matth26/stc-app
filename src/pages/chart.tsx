import { Link, useParams } from 'react-router-dom';
import Stc from '../components/stc';

const Chart = () => {
  const { chartId } = useParams<{ chartId: string }>();
  return (
    <>
      <h2>Chart ID: {chartId}</h2>

      {chartId && <Stc id={chartId}></Stc>}

      <Link to="/charts">Back to Charts</Link>
    </>
  );
};

export default Chart;
