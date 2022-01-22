import logo from './logo.svg';
import React, {lazy, Suspense} from 'react';
import './App.css';
//import Mycomp from './Components/myComp';
const Mycomp = lazy(()=>import("./Components/myComp"))
const Mycompsec = lazy(()=>new Promise((resolve, reject)=>
      setTimeout(()=>resolve(import("./Components/mycompsec")),1000)
))
function App() {
  return (
   
      <div className="App">
        <div>Hello there 2</div>
        <Suspense fallback = {<div>...loading</div>}>
          <Mycomp/>
        </Suspense>
        <Suspense fallback = {<div>...wait</div>}>
          <Mycompsec/>
        </Suspense>
      </div>
   
    
  );
}

export default App;
