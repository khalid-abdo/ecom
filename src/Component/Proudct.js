import { Link } from 'react-router-dom';
import './Proudct.css'
function Proudct(props) {
    const { proudct, ShowButton } = props;
    //  دا نفس الشكل بتاع يوز ستات علشان حاطر اجيب الداتا بتاعتي اللي اسمها برودكت اللي عملتلها ماب  و اخليها بتساوي البروبس 
    return (
        <>
            <div className="card" >
                <img src={proudct.image} className="card-img-top" alt="lol" />
                <div className="card-body">
                    <h5 className="card-title">{proudct.title}</h5>
                    <p className="card-text">{proudct.description}</p>
                    <p>{proudct.price} $$</p>
                    {ShowButton && (
                        <Link className="btn btn-primary" to={`/Proudct/${proudct.id}`}>
                            Details</Link>)

                    }


                </div>
            </div>


        </>
    )
}

export default Proudct;