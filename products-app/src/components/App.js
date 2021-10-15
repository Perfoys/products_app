import '../styles/App.css';
import Page from './Page';

import { Provider } from 'react-redux';
import store from '../store';


const App = () => {
  return (
    <Provider store={store} id="root">
      <Page></Page>
    </Provider>
  );
}

export default App;
