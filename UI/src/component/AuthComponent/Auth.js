import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 

function Auth()
{
    const navigate = useNavigate();

    useEffect(()=>{
     var path=window.location.pathname;
     if(path=="/admin"|| path=="/epadmin" || path=="cpadmin"|| path=="managengo")
     {
      if(!localStorage.getItem("token") || localStorage.getItem("role")!="admin")  //ye true jb dega jb token set nahi hoga 
        navigate("/logout")
     }
     else if(path=="/ngo" || path=="/epngo" || path=="cpngo"|| path=="managereq")
     {
      if(!localStorage.getItem("token") || localStorage.getItem("role")!="ngo")   
        navigate("/logout");
     }
     else
     {
        if(localStorage.getItem("role")=="admin")            
            navigate("/admin");
        else if(localStorage.getItem("role")=="ngo")
            navigate("/ngo");
        else
            navigate("/");    
     }
    },[]);
    
    return(
        <></>
    )
}

export default Auth