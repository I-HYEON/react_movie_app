import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="detail/" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
