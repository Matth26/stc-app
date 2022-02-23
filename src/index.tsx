import 'bulma/css/bulma.min.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useScript from './hooks/use-script';

import Layout from './components/layout';

import Home from './pages/home';
import NoMatch from './pages/no-match';
import Chart from './pages/chart';
import ChartList from './pages/chartList';

const App = () => {
  useScript('https://use.fontawesome.com/releases/v5.3.1/js/all.js');

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="charts" element={<ChartList />} />
            <Route path="c">
              <Route index element={<ChartList />} />
              <Route path=":chartId" element={<Chart />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
