"use client";
import BannerSlider from "@/components/BannerSlider";
import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import FlashSales from "@/components/FlashSales";
import Perks from "@/components/Perks";
import ShopList from "@/components/ShopList";
import { useRouter } from "next/navigation";

export default function Home() {
 const router = useRouter();

 return (
  <main className="">
   <section className="flex flex-row divide-y gap-8 xs:w-full lg:w-[90%] mx-auto py-8">
    <ShopList />
    <BannerSlider />
   </section>

   {/* Flash sales */}
   <FlashSales />

   {/* browse category */}
   <Categories />

   {/* best selling Products */}
   <BestSelling />

   {/* Explore our products */}
   <Explore />

   <Perks />
  </main>
 );
}
