
import { useState } from "react";
import "./App.css";

function App() {
  const [count,setcount] = useState(0);

  function Increment(){
    setcount(count + 1);
  }

  function Decrement(){
    setcount(count - 1);
  }

  function reset(){
    setcount(0);
  }
  return (
    
    <div className="bg-[#344151] h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-8">
      <div className="text-[#0398d4] text-[20px] capitalize font-medium ">Increment & Decrement</div>
      <div className="flex bg-white p-3 px-5 rounded-sm gap-12 text-[30px] font-medium">
        <button onClick={Decrement} className="border-r-2 border-[#bfbfbf] pr-5">
          -
        </button>
        <div>
          {count}
        </div>
        <button onClick={Increment} className="border-l-2 border-[#bfbfbf] pl-5">
          +
        </button>
      </div>

      <button onClick={reset} className="bg-[#0398d4] px-2 p-1 rounded-sm font-medium">
        Reset
      </button>
    </div>
  );
}

export default App;


 //<main class="flex justify-center gap-4 flex-col min-h-screen">
    //  <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
     // <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
     // <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
  //</main> 