import React, { createContext, useState } from 'react'
import Navbar from './assets/navbar'
import Header from './assets/header'
import Footer from './assets/footer'
import Card from './card'


function App() {

  const [cart,setCart] = useState('0');
  
   return (
    <div>
      <Navbar cart = { cart }/>
      <Header />
      <section className='py-5'>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card id={'card1' } heading={"Fancy Product"} rupee={'$40.00 - $80.00'} btnDetails={'View options'} btnIdAdd={'card1BtnAdd'} btnIdRmv={'card1BtnRmv'} cart ={ cart } setCart={ setCart } />

            <Card  id={ 'card2' } heading={"Special Item"} rupee={'$18.00'}  rupeeShade='$20.00' btnDetails={'Add to Cart'} btnIdAdd={'card2BtnAdd'} btnIdRmv={'card2BtnRmv'}  saleBtn={ true } review={ true } ratingId={'ratingCard2'} cart ={ cart } setCart={ setCart }/>

            <Card id={ 'card3' } heading={"Sale Item"} rupee={'$25.00'} rupeeShade= {'$50.00' } btnDetails={'Add to Cart'} btnIdAdd={'card3BtnAdd'} btnIdRmv={'card3BtnRmv'} saleBtn={ true } cart ={ cart } setCart={ setCart }/>

            <Card id={ 'card4' } heading={"Popular Item"} rupee={'$40.00'} btnDetails={'Add to Cart'}  btnIdAdd={'card4BtnAdd'} btnIdRmv={'card4BtnRmv'} review={ true } ratingId={'ratingCard4'} cart ={ cart } setCart={ setCart }/>

            <Card id={ 'card5' } heading={"Sale Item"} rupee={'$25.00'} rupeeShade= {'$50.00' }  btnDetails={'Add to Cart'} btnIdAdd={'card5BtnAdd'} btnIdRmv={'card5BtnRmv'}  saleBtn={ true } cart ={ cart } setCart={ setCart }/>

            <Card id={ 'card6' } heading={"Fancy Product"} rupee={'$120.00 - $280.00'} btnDetails={'View options'} btnIdAdd={'card6BtnAdd'} btnIdRmv={'card6BtnRmv'} cart ={ cart } setCart={ setCart }/>

            <Card id={ 'card7' } heading={"Special Item"} rupee={'$18.00'} rupeeShade= {'$20.00' } btnDetails={'Add to Cart'} btnIdAdd={'card7BtnAdd'} btnIdRmv={'card7BtnRmv'}  saleBtn={ true } review={ true } ratingId={'ratingCard7'} cart ={ cart } setCart={ setCart }/>
            
            <Card id={ 'card8' } heading={"Popular Item"} rupee={'$40.00'} btnDetails={'Add to Cart'} btnIdAdd={'card8BtnAdd'} btnIdRmv={'card8BtnRmv'}  review={ true } ratingId={'ratingCard8'} cart ={ cart } setCart={ setCart }/>
            
          </div>
        </div>
      </section>
      <Footer />  
    </div>
  )
}

export default App;