import React from 'react';
import Header from './header';
import Carousel from './carousel';
import Smartphone from './listSmartphone'
import Laptop from './listLaptop'
import Promotion from './promotion';

export default function baitap_js(){
    return(
        <div className = "bg-dark " >
            <Header />
            <Carousel />
            <Smartphone />
            <Laptop />
            <Promotion />
        </div>
    );
}