import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';
function App() {
  return (
    <Provider store={appstore}>
      <Body></Body>
    </Provider>
    
  );
}

export default App;
