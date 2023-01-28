import './App.css';
// import Form from './Components/Meme Generator/Form';
// import Navbar from './Components/Journal Travel/Navbar'
// import Main from './Components/Journal Travel/Main';
// import TravelData from './Components/Journal Travel/TravelData';
// import State from './Components/State/State';
// import Navbar from './Components/Meme Generator/Navbar';
// import Ternary from './Components/Meme Generator/Ternary';
// import Add from './Components/Add Item/Add';
// import Profile from './Components/Profile/Profile';
// import Header from './Components/PassingData/Header';
// import Body from './Components/PassingData/Body';
import { useState } from 'react';
// import Joke from './Components/Conditional Rendering/Joke';
// import Box from './Components/Boxes/Box';
// import Parent from './Components/Parent Child/Parent';
// import Child from './Components/Parent Child/Child';
// import jokesData from './Components/Conditional Rendering/jokesData';
// import Conditional from './Components/Conditional Rendering/Conditional';
// import Form from './Components/Form/Form';
// import Signup from './Components/LoginForm/Signup';
import Navbar from './Components/Meme Generator/Navbar';
import Form from './Components/Meme Generator/Form';
import API from './Components/API Call and useEffect/API';
function App() {
  // const travel = TravelData.map(item => { 
  //   return <Main
  //     key = {item.id}
  //     {...item}
  //   /> 
  // })
  // let isGoingOut = true;

  // const [user, setuser] = useState("Joe"); // For Passing Data

  // const [squares, setSquares] = useState(boxes); // Parent Component 
  

  // const squareElement = squares.map(square => (
  //   <Box  key={square.id} boxOn = {square.on}/>
  // ))


  // Jokes
  // const [data, setData] = useState(jokesData)

  // const dataElement = data.map(prevData => (
  //   <Joke key={prevData.id} setup={prevData.setup} punchline={prevData.punchline}/>
  // ))
  


  return (
    <div className="App">

      {/* <Navbar />
      {travel} */}
      <div className='memeGenerator'>
        <Navbar />
        <Form/>
      </div>
      {/* <State /> */}
      {/* <Ternary/> */}
      {/* <Add/> */}

      {/* <Profile /> */}
      {/* <Header user={user}/>
      <Body user={user}/> */}
      {/* <main>
        {squareElement}
      </main> */}
      {/* <Parent>
        <Child/>
      </Parent> */}
      
      {/* {dataElement}
      <Conditional/> */}
      {/* <Form/> */}
      {/* <Signup/> */}
      
      {/* <API/> */}
    </div>
  );
} 

export default App;
