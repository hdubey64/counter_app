import "./App.css";
import { useState } from "./react";

function App() {
   const [counter, setCounter] = useState(0);

   const increment = () => {
      setCounter(counter + 1);
   };

   return (
      <div className="App">
         <header className="App-header">
            <p>Counter App</p>
         </header>
         <h1>{counter}</h1>
         <button onClick={increment}>Increment</button>
      </div>
   );
}

export default App;
