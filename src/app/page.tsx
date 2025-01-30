import NewArrivals from "./pages/arrivals/page";

import Blog from "./pages/blog/page";

import DisplayProduct from "./pages/displaypro/page";

import Hero from "./pages/hero/page";
import Instagram from "./pages/instagram/page";

import Table from "./pages/table/page";
import Toppicks from "./pages/toppicks/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Table />
      <Toppicks />
      <NewArrivals />
      <Blog />
      <Instagram />
      <DisplayProduct />
    </>
  );
}
