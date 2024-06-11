import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    setTimeout(() => {

      var iframes = document.getElementsByTagName('iframe');

      var firstIframe = iframes[0];

      var btn = document.getElementsByClassName("123");
      // firstIframe.onload = function () {
    console.log("@@@@@@@",firstIframe)
        
        const buttons = document?.getElementsByClassName('123');
        const buttonArray = Array?.from(buttons);
        console.log(iframes)
        buttonArray?.forEach((button) => {
          button.addEventListener('click', () => {
            console.log("@@@@@@")
            firstIframe.contentWindow.postMessage('Hello from parent', 'https://event.godreamcast.com');
          });
        });
      // };
    }, 1000);

  }, []);


  return (
    <div className="App">
      <button className="123">Register for event</button>
      <div>
        <div>
          <div>
            <iframe src="https://event.godreamcast.com/diy/gjdh5f-ttes/gjdi7q" width='100%' height="400"
              frameBorder='0' ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
