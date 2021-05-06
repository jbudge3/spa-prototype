import {
    BrowserRouter as Router
} from "react-router-dom";
import {
    PayrollProvider,
    Routes,
    NavLinks,
} from "./components";
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <PayrollProvider>
        <Router>
            <NavLinks />
            <hr />
            <Routes />
        </Router>
    </PayrollProvider>
  );
}

export default App;
