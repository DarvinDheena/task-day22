import React from 'react'
import Navbar from './navbar'
import Header from './header'
import Footer from './footer'
import Card from './card'

function SaleBtn (){
  return (
      <div className="badge bg-dark text-white position-absolute" >Sale</div>

  )
}

function App() {
  
  return (
    <div>
      <Navbar />
      <Header />
      <section className='py-5'>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card heading={"Fancy Product"} rupee={'$40.00 - $80.00'} btnDetails={'View options'} />
            <Card heading={"Special Item"} rupee={'$18.00'}  rupeeShade='$20.00' btnDetails={'Add to Cart'} saleBtn={ true } review={ true }/>
            <Card heading={"Sale Item"} rupee={'$25.00'} rupeeShade= {'$50.00' } btnDetails={'Add to Cart'} saleBtn={ true }/>
            <Card heading={"Popular Item"} rupee={'$40.00'} btnDetails={'Add to Cart'} review={ true }/>
            <Card heading={"Sale Item"} rupee={'$25.00'} rupeeShade= {'$50.00' }  btnDetails={'Add to Cart'} saleBtn={ true }/>
            <Card heading={"Fancy Product"} rupee={'$120.00 - $280.00'} btnDetails={'View options'}/>
            <Card heading={"Special Item"} rupee={'$18.00'} rupeeShade= {'$20.00' } btnDetails={'Add to Cart'} saleBtn={ true } review={ true }/>
            <Card heading={"Popular Item"} rupee={'$40.00'} btnDetails={'Add to Cart'} review={ true }/>
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App