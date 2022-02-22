import 'bulma/css/bulma.min.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import useScript from './hooks/use-script';

import Stc from './components/stc';

const App = () => {
  useScript('https://use.fontawesome.com/releases/v5.3.1/js/all.js');
  return (
    <Provider store={store}>
      <div className="container">
        <Stc id="bbb" />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
