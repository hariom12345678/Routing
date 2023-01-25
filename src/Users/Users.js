import { Link ,Outlet} from "react-router-dom";

function User(props){
    return(<div>
        <ul>
        {props.list.map((obj)=>{
            return(<li>
                <Link to={obj.fullname}>{obj.fullname}</Link>
            </li>)
            

        })}
        </ul>
        <Outlet />       
        

    </div>)

}
export default User;