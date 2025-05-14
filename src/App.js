import logo from './logo.svg';
import './App.css';
import VideoStream from './Components/VideoStream';
import MenuItem from './Components/MenuItem';
import useFeed from './Hooks/useFeed';

function App() {
    const { handleFeedClick } = useFeed();

    return (
        <div className="App">
            <div className="header">
                <div className="menu">
                    <img src={logo} className="App-logo" alt="logo" />
                    <MenuItem label="Feed" onClick={handleFeedClick} />
                </div>
            </div>
            <div className="video-container">
                <VideoStream />
            </div>
        </div>
    );
}

export default App;
