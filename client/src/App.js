import logo from './logo.svg';
import './App.css';
import LongPulling from "./LongPulling";
import EveSource from "./EventSource";
import WebSock from "./WebSocket";

function App() {
  return (
    <div className="App">
      {/*<LongPulling />*/}
      {/*  <EveSource />*/}
        <WebSock />
    </div>
  );
}

export default App;
