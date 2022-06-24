import { useState } from 'react';
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Messages from './Components/Messages';


function App() {
  const [input, setinput] = useState('');
  const [message, setMessages] = useState(['Engineer Mansha','Hamza','UAF',]);
  console.log(input)
  console.log(message)
  const sendmsg = (event) => {
    event.preventDefault();
    //all the logic send msg go to 
    setMessages([ ...message,input])
    setinput('');
  }
  

  return (
    <div className="App">
      <h1>Fb Clone</h1>
      <form>
        <FormControl>
          <InputLabel> Enter the message...</InputLabel>
          <Input value={input} onChange={event => setinput(event.target.value)} />
          <br></br>
        <Button  variant="contained" color="primary" type='submit' onClick={sendmsg}>Send Message</Button>
        </FormControl>
     
      </form>
     
    
      {
        message.map(message => (
          <Messages text={message} />
         
        ))
        
        
      }
    </div>
  );
}

export default App;
