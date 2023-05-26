
import { Header } from "../Header";
import { Footer } from "../Footer";
import { HeaderProfile } from "./HeaderProfile";
import { useState } from "react";


const EmployerDashbord =()=>{
  const [Employer, setIdEmployer] = useState([]);

  const IdEmployer = (data) => {
    setIdEmployer(data);
  };
return (
<>
<Header />



<HeaderProfile  IdEmployer={IdEmployer} />
<div className="blog-post-content">

<center>
<img className="img-fluid" src="/images/blog/01.jpg" alt="logo" style={{width: "60%"}}/>
</center>
</div>

<Footer/>
</>
);
}
export {EmployerDashbord}