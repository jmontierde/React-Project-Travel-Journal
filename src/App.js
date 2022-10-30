import './App.css';
import Form from './Components/Meme Generator/Form';
// import Navbar from './Components/Journal Travel/Navbar'
// import Main from './Components/Journal Travel/Main';
// import TravelData from './Components/Journal Travel/TravelData';

import Navbar from './Components/Meme Generator/Navbar';
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
      <div className='memeGenerator'>
        <Navbar />
        <Form/>
      </div>
    </div>
  );
}

export default App;
