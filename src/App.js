import { useState,useEffect } from 'react';
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Messages from './Components/Messages';


function App() {
  const [input, setinput] = useState('');
  const [message, setMessages] = useState([{ username: 'Mansha', text: 'Hello' }, { username: 'Hamza', text: 'Hi Hamza' },]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    setUsername(prompt('Please Enter Your name'));
  }, [])
  
  const sendmsg = (event) => {
    event.preventDefault();
    //all the logic send msg go to 
    setMessages([ ...message,{username:username, text:input}])
    setinput('');
  }
  console.log(message);

  return (
    <div className="App">
      <h2>Facebook Messenger Clone</h2>
      <h2>Welcome { username}</h2>
      <form>
        <FormControl>
          <InputLabel> Enter the message...</InputLabel>
          <Input value={input} onChange={event => setinput(event.target.value)} />
          <br></br>
        <Button  disabled={!input} variant="contained" color="primary" type='submit' onClick={sendmsg}>Send Message</Button>
        </FormControl>
     
      </form>
     
    
      {
        message.map(message => (
          <Messages username={message.username} text={message.text} />
         
        ))
        
        
      }
    </div>
  );
}

export default App;
