import './App.css';
import {Buttons} from './components/Buttons';
import React, { useState } from 'react';



function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={styles.container}>
      <Buttons count={count} setCount={setCount} onclick={onclick}/>
    </div>
  );
}

export default App;


const styles = {
  container: {
              width: "100%",
              height: "100vh",
              backgroundColor: "rgb(125, 40, 35)",
              display: "flex", 
              justifyContent: "center",
              paddingTop: "100px"
              }
}
