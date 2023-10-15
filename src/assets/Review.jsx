function Review (props){
    return (
        <div className="d-flex justify-content-center small text-warning mb-2" id={props.ratingId}>
                <input type="text" placeholder="Enter Review Value 0/5" id={props.id}/>
                <button  onClick={()=>{
                    let result = document.getElementById(props.ratingId);
                    let reviewValue = document.getElementById(props.id).value;
                        if (reviewValue== 0){
                                result.innerHTML=`<div className='bi-star-fill'>☆☆☆☆☆</div>`
                        }else if (reviewValue==1){
                            result.innerHTML=`<div className='bi-star-fill'>★☆☆☆☆</div>`
                        }else if (reviewValue==2){
                            result.innerHTML=`<div className='bi-star-fill'>★★☆☆☆</div>`
                        }else if (reviewValue==3){
                            result.innerHTML=`<div className='bi-star-fill'>★★★☆☆</div>`
                        }else if (reviewValue==4){
                            result.innerHTML=`<div className='bi-star-fill'>★★★★☆</div>`
                        }else if (reviewValue==5){
                            result.innerHTML=`<div className='bi-star-fill'>★★★★★</div>`
                        }
                    
                }} >Submit </button>
                       
        </div>
    )
}

export default Review