import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    setTimeout(() => {
      var iframes = document.getElementsByTagName('iframe');
      var firstIframe = iframes[0];
      // firstIframe.onload = function () {
        const buttons = document?.getElementsByClassName('main-menu__wrapper-inner');
        const buttonArray = Array?.from(buttons);
        buttonArray?.forEach((button) => {
          button.addEventListener('click', () => {
            firstIframe.contentWindow.postMessage('Hello receiver', '*');
          });
        });
      // };
    }, 500);

  }, []);


  return (
    <div className="App">
      <button className="main-menu__wrapper-inner'">Register for event</button>
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
