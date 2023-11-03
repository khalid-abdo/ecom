import './Proudct.css'
function Proudct(props) {
    const { proudct } = props;
    //  دا نفس الشكل بتاع يوز ستات علشان حاطر اجيب الداتا بتاعتي اللي اسمها برودكت اللي عملتلها ماب  و اخليها بتساوي البروبس 
    return (
        <>
            <div className="card" >
                <img src={proudct.image} className="card-img-top" alt="lol" />
                <div className="card-body">
                    <h5 className="card-title">{proudct.title}</h5>
                    <p className="card-text">{proudct.description}</p>
                    <p>{proudct.price } $$</p>
                    <a href="#" className="btn btn-primary">Details</a>
                   
                </div>
            </div>

            
        </>
    )
}

export default Proudct;