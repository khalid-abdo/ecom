
import { useEffect, useState } from "react";
import Proudct from "./Proudct";

function ProudctsList() {
    const api_url = 'https://fakestoreapi.com/products';
    const [proudcts, setproudcts] = useState([]);
    const [categories, setcategories] = useState([]);
    // الكود الفوق محطوط فيه الاقواس بتاعت ارراي فاضيه علشان هو قيمته فاضيه وعلشان اخلي الداتا بتعاتي داخليه
    const getProudct = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setproudcts(data))

    }
    const getCategory = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setcategories(data))
    }
    const getinCategory = (CatName) => {
        fetch(`${api_url}/category/${CatName}`)
            .then((res) => res.json())
            .then((data) => setproudcts(data))
        // we make data = setproudcts => to make this const grt all data about proudct
    }
    useEffect(() => {
        getProudct()
        getCategory()

    }, [])
    //  قوس الاراي الفاضي دا علشان ينفذ الكود مره واحده بس وبلاضو علشان ميعملش ريكوست كتير هو واحد بس وبرضو الريكويست بيتكتب داخل الهووك او يوز ايفكت
    return (
        <>
            <h1 className="text-center pt-4">
                Proudcts
            </h1>
            <div className="container">
                <button className="btn btn-info " onClick={() => {
                    getProudct();
                    // دا زرار علشان لما ادوس عليه يعرض المنتجات كلها 
                }}>All</button>
                {categories.map((cat) => {
                    return (
                        <>
                            <button className="btn btn-info " key={cat} onClick={() => {
                                getinCategory(cat)
                                //  حطيت كات داخل القوسين علشان هي بتعبر عن الكاتجوري وبرضو بتعبر عن الكاتيجوري نيم الخاصه بالفيتش اللي فوق والاخير 
                            }}>{cat}</button>

                        </>
                    )
                })}

                <div className="row">
                    {proudcts.map((proudct) => {
                        //  انا بعمل الماب هلشان استلم الداتا باسم بروديكت  وتبقي بنفس الشكل اللي تحت دا 
                        return (
                            <div className="col-3 mt-3" key={proudct.id}>
                                <Proudct proudct={proudct} ShowButton={true} />
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