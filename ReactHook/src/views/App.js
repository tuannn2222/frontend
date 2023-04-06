import './App.css';
import MyComponent from './Example/Components/MyComponent';
import Count from './Example/TestUseState/TestCount';
import Test from './Example/TestUseState/Test';
import Github from './Example/TestUseState/Github';
import Radio from './Example/TestUseState/Radio';
import Checkbox from './Example/TestUseState/Checkbox';
import Effect from './Example/TestUseState/Effect';
import { useState } from 'react';

function App() {

  const [show,setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tuan dzai</h1>
        <MyComponent />
        <p>------------------------------------------------------</p>
        <Test />
        <p>------------------------------------------------------</p>
        <Count />
        <p>------------------------------------------------------</p>
        <Github />
        <p>------------------------------------------------------</p>
        <Radio />
        <p>------------------------------------------------------</p>
        <Checkbox />
        
        <div>
          <button onClick={() => setShow(!show)}>CHECK</button>
          {show&& <Effect />}
        </div>
      </header>
    </div>
  );
}

export default App;
