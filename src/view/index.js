import {BrowserRouter} from 'react-router-dom'
import RouterNav from './router/index'

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <BrowserRouter>
            <RouterNav />
        </BrowserRouter>
    )
}

export default App;