import Chat from "./Chat";
import React, {useState} from "react"
import "./App.css";

function App() {

const [displayChat, setDisplayChat] = useState(false);

  return (
    <div className="App">
      React Live Chat App
      {displayChat ? <Chat /> : null}
      <button onClick={() => setDisplayChat(!displayChat)} type="button">chat</button>
    </div>
  );
}

export default App;
