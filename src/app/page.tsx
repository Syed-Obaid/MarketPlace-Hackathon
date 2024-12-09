import NewArrivals from "./pages/arrivals/page";
import Blog from "./pages/blog/page";
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
