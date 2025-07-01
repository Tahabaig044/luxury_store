import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import ShopByCategory from "@/components/ShopByCategory";

import Slide from "@/components/Slider";


export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    
    <Slide />
      {/* <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" /> */}
      <Collections />
      <ProductList />
      <ShopByCategory/>
      {/* <Footer /> */}
    </>
  );
}

export const dynamic = "force-dynamic";

