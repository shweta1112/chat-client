import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
    queryAmy:'',
    queryJohn:''
  }
 updateAmyQuery = (e) =>{
   this.setState({
      queryAmy: e.target.value.trimStart()
   }
   )
 }
 updateJohnQuery = (e) =>{
   this.setState({
      queryJohn: e.target.value.trimStart()
   }
   )
 }
  addAmyQuery = () =>{
    let message = {};
    message['username'] = "Amy"
    message['text'] = this.state.queryAmy
    let updatedMessage = this.state.messages.concat(message);
    this.setState({
      messages: updatedMessage,
      queryAmy:'',
    }
    )
  }   
addJohnQuery = () =>{
    let message = {};
    message['username'] = "John"
    message['text'] = this.state.queryJohn
    let updatedMessage = this.state.messages.concat(message);
    this.setState({
      messages: updatedMessage,
      queryJohn:''
    }
    )
  }    

  render() {
    const isEnabled = this.state.queryAmy.length > 0 || this.state.queryJohn.length > 0;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
	     <div className="container">
           <div className="chat-window">
             <h2>Super Awesome Chat</h2>
             <div className="name sender">Amy</div>
			 <div className="chat-amy">
             	<ul className="message-list">
            	  {this.state.messages.map((message, index) => (
              	  <li key={index} 
						className={
                   	 message.username === "Amy" ? 'message sender' : 'message recipient'
                 	 }>
                 	 <p>{`${message.username}: ${message.text}`}</p>
              	  </li>
            	  ))}
           		 </ul>
          	   </div>
              <div className="input-group">
                <input type="text" className="form-control" 
					   placeholder="Enter your message..."
					   value = {this.state.queryAmy}
					   onChange = {this.updateAmyQuery}/>
                <div className="input-group-append">
                  <button className="btn submit-button" 
						  disabled={!isEnabled}
						  onClick = {this.addAmyQuery}>
                    SEND
                  </button>
                </div>
              </div>
            </div>
            <div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">John</div>
                        <div className="chat-amy">
              <ul className="message-list">
                {this.state.messages.map((message, index) => (
                  <li key={index} 
                      className={
                      message.username === "John" ? 'message sender' : 'message recipient'
                    }>
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>
            </div>
			<div className="input-group">
                <input type="text" className="form-control" 
					   placeholder="Enter your message..."
					   value = {this.state.queryJohn}
					   onChange = {this.updateJohnQuery}/>
                <div className="input-group-append">
                  <button className="btn submit-button" 
						  disabled={!isEnabled}
						  onClick = {this.addJohnQuery}>
                    SEND
                  </button>
                </div>
            </div>
          </div>
        </div>
	</div>
    );
  }
}

export default App;
