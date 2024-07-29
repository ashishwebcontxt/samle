import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Define the onbeforeunload event handler
    const handleBeforeUnload = () => {
      const iframe = document.getElementById('childIframe');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('parentReloaded', 'https://event.godreamcast.com');
      }
    };

    // Attach the event handler
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to remove the event handler
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <div className="App">
      <div>
        <div>
          <div>
            <iframe id="childIframe" src="https://event.godreamcast.com/dev/embed/gjdh22-form-check?embed=true" width='100%' height="400"
              frameBorder='0'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
