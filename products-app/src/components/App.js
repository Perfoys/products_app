import '../styles/App.css';
import Page from './Page';

import { Provider } from 'react-redux';
import { store, persistor} from '../store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {

  return (
    <Provider store={store} id="root">
      <PersistGate loading={null} persistor={persistor}>
        <Page></Page>
      </PersistGate>
    </Provider>
  );
}

export default App;
