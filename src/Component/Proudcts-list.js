
import { useEffect, useState } from "react";
import Proudct from "./Proudct";

function ProudctsList() {
    const api_url = 'https://fakestoreapi.com/products';
    const [proudcts, setproudcts] = useState([]);
    // الكود الفوق محطوط فيه الاقواس بتاعت ارراي فاضيه علشان هو قيمته فاضيه وعلشان اخلي الداتا بتعاتي داخليه

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data)=>setproudcts(data))
    }, [])
    //  قوس الاراي الفاضي دا علشان ينفذ الكود مره واحده بس وبلاضو علشان ميعملش ريكوست كتير هو واحد بس وبرضو الريكويست بيتكتب داخل الهووكاو يوز ايفكت
    return (
        <>
            <h1 className="text-center pt-4">
                Proudcts
            </h1>
            <div className="container">
                <div className="row">
                    {proudcts.map((proudct) => {
                        //  انا بعمل الماب هلشان استلم الداتا باسم بروديكت  وتبقي بنفس الشكل اللي تحت دا 
                        return(
                        <div className="col-3 mt-3" key={proudct.id}>
                                <Proudct proudct={proudct} />
                                {/* الكود اللي فوق معناه ان كل الكومبونانت اللي اسمها برودكت اديها البرودكت بتاعك كانه بروبس */}
                            </div>
                            )
                    })}
                   
                   
                </div>
            </div>
        </>
    )
}
export default ProudctsList;