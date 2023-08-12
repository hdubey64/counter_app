import "./App.css";
import { useState } from "react";

function App() {
   const [counter, setCounter] = useState(0);

   const increment = () => {
      setCounter(counter + 1);
   };
   const decrement = () => {
      setCounter(counter - 1);
      if (counter == 0) {
         alert("It Can not be nagative");
         setCounter(0);
      }
   };

   return (
      <div>
         <header className="App-header">
            <p>Counter App</p>
         </header>
         <section>
            <main>
               <h1>{counter}</h1>
               <div>
                  <button onClick={decrement}>Decrement</button>
                  <button onClick={increment}>Increment</button>
               </div>
            </main>
         </section>
      </div>
   );
}

export default App;
