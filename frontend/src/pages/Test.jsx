import '../App.css';
import Popup from '../components/Popup';
import { useState } from 'react';

function Test() {
  const [ButtonPop,setButtonPop] = useState(false);
  return (
    <div className="App">
        <main>
          <h1>Login</h1>
          <br />
          <button onClick={()=> setButtonPop(true)}>Open Popup</button>
          <Popup trigger={ButtonPop} setButtonPop={setButtonPop}/>
        </main>
    </div>
  );
}

export default Test;

