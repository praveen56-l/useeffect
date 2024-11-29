import { Link, Navigate, NavLink,useNavigate } from "react-router-dom";

const Navigation=()=>{
  const Navigate=useNavigate() 
    return(
        <>
        <div className="button">
      <button onClick={()=>Navigate("/User")}><a>< Link to="/user">User
        </Link></a><br/></button>
      <button className="btn2" onClick={()=>Navigate("/Commands")}> <NavLink to="/commands">Commends
        </NavLink><br/></button>
       
        </div>
        </>
    )
}
export default Navigation;