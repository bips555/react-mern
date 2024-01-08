import { useState } from "react";
import { Navigate } from "react-router-dom";
const PermissionCheck = ({ accessBy, Component }) => {

    const [user,setUser]=useState(
        {
            name:"biplove subedi",
            role:"seller"
        }
    )
    if(user.role === accessBy)
    {return Component}
    else{
        return <Navigate to={'/'+user.role}/>
    }
};
export default PermissionCheck;
