import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const FormUpdateJob = (props) => {
   
    const [title,setTitle] = useState("");
    const [JobDescription,setJobDescription] =useState("");
    const [Email,setEmail] = useState("");
    const [CurrencyPosition,SetCurrencyPosition] = useState("");
    const [Salary,setSalary] = useState("");
    const [SalaryMin,setSalaryMin] = useState("");
    const [SalaryMax,setSalaryMax] = useState("");
    const [Experience,setExperience] = useState("");
    const [Qualification,setQualification] = useState("");
    const [Country,setCountry] = useState("");
    const [State,setState] = useState("");
    const [City,setCity] = useState("");
    const [FullAddress,setFullAddress] = useState("");
    const [contract,setcontract] = useState("");
    const [IDRecruiter,setIDRecruiter] = useState("");
   const getOffreID =()=>{
    axios.get("http://127.0.0.1:8000/api/job_offers/"+props.Offres).then((res)=>{
        setTitle(res.data.titlejob);
        setJobDescription(res.data.description);
        setEmail(res.data.email);
        SetCurrencyPosition(res.data.currencyPosition);
        setSalary(res.data.salary);
        setSalaryMin(res.data.salaryMin);
        setSalaryMax(res.data.salaryMax);
        setExperience(res.data.expeience);
        setQualification(res.data.qualifications);
        setCountry(res.data.Country);
        setState(res.data.State);
        setCity(res.data.city);
        setFullAddress(res.data.FullAdress);
        setcontract(res.data.cONTRACT);
        setIDRecruiter(res.data.Recruiter);
    })
   }
  
   getOffreID();
   const UpdateJob =()=>{
    const Newdata = {
        titlejob: title,
        expeience: Experience,
        description: JobDescription,
        recruiter: IDRecruiter,
        salary: Salary,
        CONTRACT: contract,
        salaryMin: SalaryMin,
        SalaryMax: SalaryMax,
        State: State,
        CurrencyPosition: CurrencyPosition,
        Qualifications: Qualification,
        Country: Country,
        City: City,
        FullAdress: FullAddress,
        email: Email
      }
   axios.put("http://127.0.0.1:8000/api/job_offers/"+props.Offres,Newdata).then((res)=>{
    if (res.status == 200) {
        toast.success("success Update!");
      }
    }) 
   }
  return (
    <>

    </>
  );
};
export { FormUpdateJob };
