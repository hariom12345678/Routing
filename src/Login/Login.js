import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  

    const navigation=useNavigate();
    const[getform,setform]=useState({
        email:"",
        password:""
    })
    function onsubmit(event){
        let id=343;
        event.preventDefault();
        navigation(`/Product/${id}?email=${getform.email}&password=${getform.password}`);
        // useNavigate("./product");
        // if(false){
        //     navigation('/Product');

        // }
        // alert("hello");
    }
    const onchangehandler=(event)=>{
        setform({...getform,[event.target.name]:event.target.value})
    }


    return (<div>
        <div className="row" style={{marginTop:"50px"}}>
            <div className="col-4">

            </div>
            <div className="col-4">
                <form>
                    <div class="form-group">
                        <label >Email address</label>
                        <input type="email" name="email" onChange={onchangehandler} class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" name="password" onChange={onchangehandler} class="form-control" placeholder="Password"/>
                    </div>
                   
                    <button onClick={onsubmit} type="submit" class="btn btn-primary" >Submit</button>
                </form>

            </div>
            <div className="col-4">

            </div>

        </div>

    </div>)

}
export default Login;