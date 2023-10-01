function SaleBtn (){
    return (
        <div className="badge bg-dark text-white position-absolute" >Sale</div>

    )
}

function Review (){
    return (
        <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
    )
}

function Card(props) {
      return (
    <div className="col mb-5">
    <div className="card h-100">
        <div>
       {
        props.saleBtn ? <SaleBtn /> : ''
       }
        </div>
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{ props.heading}</h5>
                <div>
                    {
                        props.review ? <Review /> : ''
                    }
                </div>
                <div><span className="rupeeShade">{props.rupeeShade}</span> { props.rupee } </div>
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{ props.btnDetails}</a></div>
        </div>
    </div>
</div>
  )
}

export default Card

