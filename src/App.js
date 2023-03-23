import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Header from './component/Header';
import Textbox from './component/Textbox';

function App() {
  const [alert, setAlert] = useState(null)

  const alertMsg = (message, type) => { 
    setAlert({
       massage: message,
       type: type
   } ) 
   setTimeout(() => { setAlert('')}, 2000); 
  }

  return (
    <div className="App">
      <Header button='Toggle'/>
      <Alert alert={alert}/>
      <Textbox alertMsg={alertMsg} title='Enter the text to analyze below'/>
    </div>
  );
}

export default App;
