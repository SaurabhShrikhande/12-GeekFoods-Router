// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Resturants from "./Restaurants"
import Layout from './Layout';
import Quote from './Quote';
import Food from './Food';
import Contact from './Contact';

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/> ,
      children  :  [
        {
          path : "/home",
        element : <Home/>
        }
        ,
        {
          path : "/quote",
        element : <Quote/>
        },
        {
          path : "/quote",
        element : <Quote/>
        },
        {
          path : "/resturants",
        element : <Resturants/>
        },
        {
          path : "/food",
        element : <Food/>
        },
        {
          path : "/contact",
        element : <Contact/>
        }

      ]   
    },
    


  ])
  return (
    <div style={{overflowX:"hidden"}}>
       {/* <Link to = "/./home"> Home </Link> */}
     < RouterProvider router= {router}/>
   
     
     
    
        
        


    
    {/* <Footer /> */}
    </div>

  );
}

export default App;
