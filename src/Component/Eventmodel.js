import React, { useState } from 'react'
import './Eventmodel.css'

function Eventmodel() {
 const [fromData, setFromData] =useState({
  title: '',
  text: '',
  assign :'',
  note :'',
 })


 const onChangeHandler =(event) => {
   console.log(event.target.name, event.target.value)
  setFromData ( () => ({
     ...fromData,
     [event.target.name]: event.target.value
  }))
 }

 const [messages, setMessages] = useState([]);
 const [inputText, setInputText] = useState('');

 const handleInputChange = (e) => {
   setInputText(e.target.value);
 };
 const handleSubmit = (e) => {
  e.preventDefault();
  if (inputText.trim() !== '') {
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');
    // Simulating a reply from bot
    setTimeout(() => {
      setMessages([...messages, { text: 'Thanks for your message!', sender: 'bot' }]);
    }, 1000);
  }
};



  return (
    <div>
      <form >
        <button className='btns'> Save </button >
         <div className='one'>
          <h1 > 
           <input  className='ones'  type='text' onChange={onChangeHandler }  />
           </h1>
        </div>
         

         <div className='two'>
          <h1 > 
           <input  className='twos' type='text' onChange={onChangeHandler } />
           </h1>
        </div>
        <div className='three'>
        <label  > Assign to :</label>
        <select  onChange={onChangeHandler }> 
          <option>
            Jane Smith
          </option>

           <option>
            Nivas
          </option>

           <option>
      
            Root
          </option>
          </select>
          </div>

          <div className='four'>
               <label> Note: </label>
               <input onChange={onChangeHandler }></input>
          </div>
           <br/>
          <hr/>
          <h4 className='five'>Comments</h4>
       
      <div className="chat-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
        </form>
    </div>
         
      </form>
    </div>
  )
}

export default Eventmodel