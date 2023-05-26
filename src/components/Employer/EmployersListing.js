//import { Outlet, Link } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { SearchEmployer } from "./Employerliste/SearchEmployer";
import { SideSearchEmployer } from "./Employerliste/SideSearchEmployer";
import { Employer } from "./Employerliste/Employer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "../Search";
import { Loader } from "../Loader"
const EmployerListing = () => {
  const [loader,setLoader] = useState(false);


  const [employers,setEmployer] = useState([]);
/*
  const getallEmployer =()=>{
    setLoader(true)
    axios.get("http://127.0.0.1:8000/api/recruiters").then((res)=>{

      setEmployer(res.data);
      setLoader(false)
    })

  }*/

  const getallEmployer =()=>{
    setLoader(true)
    const url = `http://127.0.0.1:8000/recruiters/search?dateposted1=${searchSidebarItems.dateposted1}&dateposted2=${searchSidebarItems.dateposted2}&dateposted3=${searchSidebarItems.dateposted3}&dateposted4=${searchSidebarItems.dateposted4}&dateposted5=${searchSidebarItems.dateposted5}`
    axios.get(url).then((res)=>{

      setEmployer(res.data);
      setLoader(false)
    })

  }

  const [visibleItems, setVisibleItems] = useState(5);
  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };
  const [searchSidebarItems, setsearchSidebarItems] = useState(
    {
      dateposted1  : false,
      dateposted2  : false,
      dateposted3  : false,
      dateposted4  : false,
      dateposted5  : false
     }
    );
    const checkboxes = (data)=>{
      searchSidebarItems[data.nomCB] =  data.valCB;
    //  console.log(data);
      getallEmployer();
    }
  const [searchSidebarTop, setsearchSidebarTop] = useState(
    {
      dataFromChildWhere :  "",
      dataFromChildWhat  : "",
     }
    );

  const searchTop = (data)=>{
    searchSidebarTop[data.nomST] =  data.valST;
    getallEmployer();
  }

  useEffect(() => {
    getallEmployer();
  }, [searchSidebarItems]);


  return (
    <>
      <Header />
       
       <Search   onSearchTop={searchTop}/>

      <section className="space-ptb">
        <div className="container">
          <div className="row">
            {/*=================================
      sidebar */}
            
             
      <SideSearchEmployer checkboxes={checkboxes} />

            {/*=================================
      sidebar */}
            <div className="col-lg-9">
              <div className="row mb-4">
                <div className="col-12">
                  <h6 className="mb-0">Showing 1-8 of <span className="text-primary">{employers.length} Employer</span></h6>
                </div>
              </div>
              <div className="job-filter mb-4 d-sm-flex align-items-center">

                <div className="job-shortby ms-sm-auto d-flex align-items-center">
                  <form className="form-inline">

                  </form>
                </div>
              </div>
              { loader ? <Loader />  : "" }   
           {employers.slice(0, visibleItems)
            .filter((item) => {
              return searchSidebarTop.dataFromChildWhere.toLowerCase() === '' && searchSidebarTop.dataFromChildWhat.toLowerCase() === '' 
                ? item
                : item.company_name.toLowerCase().includes(searchSidebarTop.dataFromChildWhat) && item.company_adress.toLowerCase().includes(searchSidebarTop.dataFromChildWhere )
            })
           .map((employer) => (
                  <div key={employer.id}>
                  <Employer Employer={employer}/>
                  </div>
           ))}
            <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:"20px"}}>
            {visibleItems < employers.length && (
                    <button   onClick={loadMore} className="btn btn-outline-dark" type="button">View More</button>
                    )}
            </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { EmployerListing };
