import Account from "./pages/Account/page";
import Accountregister from "./pages/Accountregister/page";
import NewArrivals from "./pages/arrivals/page";
import Asgardsofa from "./pages/asgardsofa/page";
import Blog from "./pages/blog/page";
import Blogdetail from "./pages/blogdetail/page";
import Blogdetailhero from "./pages/blogdetailhero/page";
import Cart from "./pages/cart/page";
import Checkout from "./pages/checkout/page";
import Contact from "./pages/contact/page";
import Footer from "./pages/footer/page";
import Hero from "./pages/hero/page";
import Instagram from "./pages/instagram/page";
import Navbar from "./pages/navbar/page";
import Table from "./pages/table/page";
import Toppicks from "./pages/toppicks/page";



export default function Home() {
  return (
   <>
   <Navbar/>
    <Hero/>
  <Table/>
  <Toppicks/>
    <NewArrivals/>
  <Blog/>
   <Instagram/>
    <Footer/>
    
   


   </>
  );
}
