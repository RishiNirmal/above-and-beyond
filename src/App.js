
import './App.css';
import Routes from './router/Index'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from './Layout';

function App() { 
  return (
   //basename={process.env.PUBLIC_URL}
    <>
      <Router >           
      <Layout>
        <Routes/>
      </Layout>      
      </Router>
    </>
  );
}

export default App;
