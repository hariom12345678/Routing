import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Nomatch(){
    const {pathname}=useLocation();
    const[getlist,setlist]=useState(["/product","/prod","/products"]);
    const[getflag,setflag]=useState(false);
    useEffect(()=>{
        console.log(pathname);
        const filter=getlist.includes(pathname);
        if(filter){
            setflag(true);
        }
    },[])

    return (<div style={{marginTop:'170px'}} className="container">
    <div className="row">
        <div className="col-12">
            <div class="jumbotron">
                <h1 class="display-4">Sorry!</h1>
                <p class="lead">this particular  {pathname} path does not exist</p>
                <hr class="my-4" />
                <p>Please login back to Newton School.</p>
                 <h1>please visit the below page </h1>
                 {getflag && <h1>please visits this page<Link to="product">products</Link> </h1>}
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    </div>
</div>)
}
export default Nomatch;