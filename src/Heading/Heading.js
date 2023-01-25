import { Link,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Heading(){


 
    return(<div>
        {/* <h1>Hello</h1> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand" href="#"><Link to="#">Newton School</Link></a> */}
  {/* <a className="navbar-brand" href="#"><Link to="#">Newton School</Link></a> */}
  <NavLink className="navbar-brand" to="#">Newton School</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <a className="nav-link" href="#"><Link to="">Home</Link>  */}
        <NavLink className="nav-link" to="">Home <span className="sr-only">(current)</span></NavLink>
     
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item">
            {/* <a className="nav-link"><Link to="contact">Contact</Link></a> */}
            <NavLink className="nav-link" to="contact">Contact</NavLink>
          </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <button  style={{marginRight:'15px'}} className="btn btn-outline-success my-2 my-sm-0" type="submit"><NavLink to="register">Register</NavLink></button>

    <button  className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="Login">Login</Link></button>
    </form>
  </div>
</nav>
    </div>)

}
export default Heading;