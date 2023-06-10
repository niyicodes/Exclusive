"use client"
import CartItem from "@/components/CartItem"
import Product from "@/components/Product"
import { useRouter } from "next/navigation"




export default function Home() {
  const router = useRouter()
  
  return (
    <main className="flex flex-col">
      <h3>home page</h3>
     <Product />
     <CartItem />
     <CartItem />
    </main>
  )
}
