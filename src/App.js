import { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState('');
  const [message, setMessages] = useState(['Engineer Mansha','Hamza','UAF',]);
  console.log(input)
  console.log(message)
  const sendmsg = (event) => {
    //all the logic send msg go to 
    setMessages([ ...message,input])
    setinput('');
  }
  

  return (
    <div className="App">
      <h1>Fb Clone</h1>
      <input value={input} onChange={event=>setinput(event.target.value)} />
      <button onClick={sendmsg}>Send Message</button>
    
      {
        message.map(message => (
          <p>{ message}</p>
        ))
        
        
      }
    </div>
  );
}

export default App;
