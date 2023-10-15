import { useContext, useState } from "react";
import Review from "./assets/Review"


 function SaleBtn (){
    return (
        <div className="badge bg-dark text-white position-absolute" >Sale</div>
    )
}

function Card({cart , setCart,id,heading,rupee,rupeeShade,saleBtn,review,ratingId,btnDetails,btnIdAdd,btnIdRmv }) {
        const display = {
            display:'none'
        }
        const handleAddClick = ()=>{

            if ( btnDetails == 'Add to Cart'){
            setCart( Number(cart) + 1 );
            const clickAddBtn = document.getElementById(btnIdAdd);
             clickAddBtn.setAttribute('disabled','')
             const clickRmvBtn = document.getElementById(btnIdRmv);
             clickRmvBtn.removeAttribute('style');
            }
        }
        const handleRemoveClick = ()=> {
            setCart( Number(cart) - 1 );
            const clickAddBtn = document.getElementById(btnIdAdd);
             clickAddBtn.removeAttribute('disabled')
            const clickRmvBtn = document.getElementById(btnIdRmv);
            clickRmvBtn.setAttribute('style','display:none');
        }    
      return (
        <div>
       
            <div className="col mb-5" >
            <div className="card h-100">
                <div>
            {
                saleBtn ? <SaleBtn /> : ''
            }
                </div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{ heading}</h5>
                        {
                            review ? <Review id={id} ratingId={ratingId}/>:''
                        }                           
                        <div><span className="rupeeShade">{rupeeShade}</span> {rupee } </div>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        
                        <button className="btn btn-outline-dark mt-auto" id={ btnIdAdd }  onClick={ handleAddClick } >{ btnDetails}</button>
                        <button className="btn btn-outline-dark mt-auto" id={ btnIdRmv }  onClick={ handleRemoveClick }  style={display}>Remove From Cart </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
export default Card;

