import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Proudct from "./Proudct";
import './ProudctDetail.css';

function ProudctDetail() {
    const Params = useParams();
    const api_url = 'https://fakestoreapi.com/products';
    const [proudct, setproudc] = useState({})
    
    useEffect(() => {
        fetch(`${api_url}/${Params.ProudctID}`)
            .then((res) => res.json())
            .then((Proudct) => setproudc(Proudct))
    }, [])
   
    
    return (
        <div className="non">
            <Proudct proudct={proudct} ShowButton={false} />
           
        </div>
    )
}
export default ProudctDetail;