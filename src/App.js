import React from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const getRandomIndex = function (length) {
    return parseInt(Math.random() * length);
  };

  const reload = function reloadPage() {
    location.reload();
  };

  return (
    <div className="App">
      <div className="head_text">
        <img src={`${process.env.PUBLIC_URL}img/xx.png`} />
        <h2>인터넷에 연결되어있지 않아요.</h2>
        <h4>ERR_INTERNET_DISCONNECTED</h4>
      </div>
      <div className="content_wrap">
        <div className="video">
          <video src="/whale.mp4" loop autoPlay muted alt="whale dance" />
        </div>
        <div className="text_balloon">
          <div className="text">{data[getRandomIndex(data.length)].text}</div>
        </div>
        <button type="button" onClick={reload}>
          <img
            src={`${process.env.PUBLIC_URL}img/reload.png`}
            alt="reload button"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
