import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widgets from './Components/Widgets/Widgets';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';
function App() {
  const[{user},dispatch]=useStateValue();

  return (
    
    <div className="App">
      {!user ? (<Login />) :(
        <>
        <Header />
      <div className='app__body'>
       <Sidebar />
       <Feed />
       <Widgets />
        
        </div>
        </>
      )

      }
      
      </div>
    
  );
}

export default App;


//https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png