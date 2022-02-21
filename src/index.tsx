import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';

import Stc from './components/stc';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Stc />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
