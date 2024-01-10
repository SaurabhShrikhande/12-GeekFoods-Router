import Header from "./Header";
 import Footer from './Footer';
import { Outlet } from "react-router-dom";


export default function Layout(){
    return ( <div>

  <Header
    logo = "https://flowbite.com/docs/images/logo.svg"
    title = "GeekFoods"
    />

      <Outlet/>
      

       <Footer/>

        </div> );
}