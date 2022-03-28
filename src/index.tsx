import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { MoralisProvider } from "react-moralis";
import {Suspense} from 'react';

ReactDOM.render(
  <Provider store={store} >
    <MoralisProvider
      serverUrl="https://kmafws0klpxe.usemoralis.com:2053/server" 
      appId="epC3tBRnytGYtC27AIlAajFM7RH61loyb5c70ww7"
    >
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </MoralisProvider>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
