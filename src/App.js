
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Browse from './components/Browse';



function App() {
  
  return (
    <Provider store={appStore}>
    
      <Body/>
      
      </Provider>
   
  );
}

export default App;
