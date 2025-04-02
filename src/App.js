import logo from './logo.svg';
import './App.css';
import VideoStream from './Components/VideoStream';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="video-container">
                    <VideoStream />
                </div>
            </div>
        </div>
    );
}

export default App;
