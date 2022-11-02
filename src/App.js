import './App.css';
import Form from './Components/Meme Generator/Form';
// import Navbar from './Components/Journal Travel/Navbar'
// import Main from './Components/Journal Travel/Main';
// import TravelData from './Components/Journal Travel/TravelData';
import State from './Components/State/State';
import Navbar from './Components/Meme Generator/Navbar';
import Ternary from './Components/Meme Generator/Ternary';
import Add from './Components/Add Item/Add';
import Profile from './Components/Profile/Profile';
function App() {
  // const travel = TravelData.map(item => { 
  //   return <Main
  //     key = {item.id}
  //     {...item}
  //   /> 
  // })
  return (
    <div className="App">
      {/* <Navbar />
      {travel} */}
      {/* <div className='memeGenerator'>
        <Navbar />
        <Form/>
      </div> */}
      {/* <State />
      <Ternary/> */}
      {/* <Add/> */}
      <Profile />
    </div>
  );
}

export default App;
