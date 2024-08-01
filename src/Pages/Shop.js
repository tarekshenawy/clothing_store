import React from 'react';
import Home from '../Components/Home/Home';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Collections from '../Components/Collections/Collections';
import Newletters from '../Components/Newletters/Newletters';
import Title from '../Components/Title/Title';

export default function Shop() {
  return (
    <div> 
        <Home/>
        <Title title="POPULAR IN WOMEN" />
        <Popular/>
        <Offers/>
        <Title title="New Collections" />
        <Collections/>
        <Newletters/>

    </div>
  )
}
