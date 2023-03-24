import './App.css';

import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
// import Challan from './pages/challan/challan';
import Dash from './Dahsboard/dash';
import Home from './Home';
import Challan from './pages/challan/challan';
import UserChallan from './UserChallan';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/challan" element={<Challan />}/>
          <Route path="/user" element={<UserChallan />}/>
          <Route path = "/dash" element = {<Dash /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
