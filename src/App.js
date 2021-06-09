import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Notify from 'react-notify-toast';

function App() {
    return (
        <div>
            <Notify />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;
