import react from 'react';
import reactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { StateContextProvider } from './context';

const root = reactDom.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={ChainId.Mumbai}> 
    
      <Router>
      <StateContextProvider>
      <App/>
      </StateContextProvider>
     
      </Router>
    </ThirdwebProvider> 
  )
