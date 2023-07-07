'use client'
import CardsItems from "@/components/CardsItems"
import Institutes from "@/components/Institutes"

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center pt-10">
  
    <section className="flex">
    <Institutes/>
    </section> 

     <CardsItems/> 
    </main>
  )
}
