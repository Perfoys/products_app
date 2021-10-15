import '../styles/App.css';
import { useEffect } from 'react';

import { Provider } from 'react-redux';
import store from '../store';

import axios from 'axios';

if(localStorage.session) {
  delete axios.defaults.headers.common["session"];
  axios.defaults.headers.common["session"] = localStorage.session;
} else {
  delete axios.defaults.headers.common["session"];
}


const App = () => {
  useEffect(() => {
    if (!localStorage.session) {
      store.dispatch(/* createSession */)
    }
  })
  return (
    <Provider store={store}>

    </Provider>
  );
}

export default App;
