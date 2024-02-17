'use client';
import React, { useState } from "react";
import './page.css'


const Component = ({narx, nomi, massasi}) => {
    const [son, setSon ] = useState(0);
    return(
        <div>
         <div className="component">
             <img className="image" src="https://www.gastronom.ru/binfiles/images/20170707/b04eaef7.jpg" alt="" />
             <div className="component-1">
                <h4 className="text-1">{nomi}</h4>
                <p className="text-2">{massasi}</p>
             <h4 className="text-3">{narx}</h4>
             </div>
             <div className="component-2">
                <span onClick={() => {setSon((prev) => prev-1)}}>-</span>
                <p className="text-4">{son}</p>
                <span onClick={() => {setSon((prev) => prev+1)}}>+</span>
    <h4 className="text-5">{son*narx}</h4>
    <img src="/delete.svg" alt="" />
    </div>
    </div>
      </div>
    )
}

export default Component;