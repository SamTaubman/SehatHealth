import React, { useState, useEffect, useRef } from 'react';
import TopBar from './TopBar';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([
    // Initial messages
    { text: "Welcome to ChatBot! How can I assist you?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState(""); // State to track user input
  const messagesEndRef = useRef(null);

  // Function to handle user input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle sending the user message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Prevent sending empty messages
    const newMessage = { text: inputValue, sender: "user" };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue(""); // Clear input field after sending message
    // Call function to generate response here
    generateResponse(newMessage);
  };

  // Function to generate response from the language model
  const generateResponse = (userMessage) => {
    // Here you can implement logic to send the user message to your backend server
    // and receive a response from your language model.
  
    // Simulate delay and add bot response after delay
    const botResponse = "I'm sorry, I'm still learning!";
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botResponse, sender: "bot" }
      ]);
    }, 500); // Simulate delay for a more realistic interaction
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to scroll to the bottom of the chat window
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <TopBar />
    <div className="chat-container2">
      <div className="chat-window2">
        <div className="message-list2">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form2">
        <textarea
          value={inputValue}
          onChange={handleChange}
          placeholder="Type your message..."
          className="chat-input2"
          rows={4}
          cols={40}
        />
        <button type="submit" className="send-button2">Send</button>
      </form>
    </div>
  </div>
  );
}

export default ChatBot;