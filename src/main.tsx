import 'devextreme/dist/css/dx.light.css';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter basename='/cronograma-ps/'>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>,
)
