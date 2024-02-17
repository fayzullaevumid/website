'use client'
import React from "react";
import Navbar from "../navbar/page";
import './page.css'
import Component from "../component/page";
import {cards} from "../component/db"
import { useRouter } from "next/navigation";
const Korzina = () => {
    const router = useRouter();
    console.log(cards);
    return(
        <div>
            <Navbar/>
            <p className="text-6">Корзина</p>
            <p className="text-7">Главная / Корзина</p>
            {cards.map(card=>(
                <>
                <Component nomi={card.nomi} narx={card.narx} massasi={card.massa}/>
                </>
            ))}
            <button className="knopka-3" onClick={() => router.push('/oplata')}>Оплата</button>
         </div>
    )
}

export default Korzina;