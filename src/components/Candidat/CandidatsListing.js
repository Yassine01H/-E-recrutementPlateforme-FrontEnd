//import { Outlet, Link } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../Loader"
import { useNavigate } from "react-router-dom";
import { Candidats } from "./Candidatelist/Candidats";
import { Search, SearchCandidats } from "../Search";
import { SideBarSearch } from "./Candidatelist/SideBarSearch/SideBarSearch";

function CandidatsListing(props) {
  //const [id,setId] = useState("");
  const [loader,setLoader] = useState(false);

  // const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState(5);
  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };
  const [candidats, setCandidats] = useState([]);
  const [search, setSearch] = useState('');


  const countcandidats = candidats.length;
  const getallCandidat = () => {
    setLoader(true);
    const url = `http://127.0.0.1:8000/candidats/search?dateposted1=${searchSidebarItems.dateposted1}&dateposted2=${searchSidebarItems.dateposted2}&dateposted3=${searchSidebarItems.dateposted3}&dateposted4=${searchSidebarItems.dateposted4}&dateposted5=${searchSidebarItems.dateposted5}`
    axios.get(url).then((res) => {
      setCandidats(res.data);
     // console.log(res.data);
     setLoader(false);
    });
    //setFilteredData(candidats);
  };


  const [dataFromChildWhere, setDataFromChildWhere] = useState('');
  const handleDataFromChildWhere = (data) => {
    setDataFromChildWhere(data);
  };

  
  const [dataFromChildWhat, setDataFromChildWhat] = useState('');
  const handleDataFromChildWhat = (data) => {
    setDataFromChildWhat(data);
  };
    const [searchSidebarTop, setsearchSidebarTop] = useState(
    {
      dataFromChildWhere :  "",
      dataFromChildWhat  : "",
     }
    );
  const searchTop = (data)=>{
    searchSidebarTop[data.nomST] =  data.valST;
    getallCandidat();
  }
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
      console.log(data);
    getallCandidat();
    }
  useEffect(() => {
    getallCandidat();
    //setFilteredData([]);
  }, [searchSidebarItems]);

  return (
    <>
      <Header />

      <Search onSearchTop={searchTop}/>

      {/*=================================
banner */}
      {/*=================================
candidate post-box list */}

      <section className="space-ptb" style={{ marginBottom: "100px" }}>
        <div className="container">
          <div className="row">
            <SideBarSearch checkboxes={checkboxes}/>

            <div className="col-lg-9">
              <div className="row mb-4">
                <div className="col-12">
                  <h6 className="mb-0">
                    Showing 1-11 of{" "}
                    <span className="text-primary">{countcandidats} Candidates</span>
                  </h6>
                </div>
              </div>
              <div className="job-filter mb-4 d-sm-flex align-items-center">
              </div>
              <div className="row">
              { loader ? <Loader />  : "" }   
                {candidats.slice(0, visibleItems)
                .filter((item) => {
                  return searchSidebarTop.dataFromChildWhere.toLowerCase() === '' && searchSidebarTop.dataFromChildWhat.toLowerCase() === '' 
                    ? item
                    : (item.job.toLowerCase().includes(searchSidebarTop.dataFromChildWhat)|| item.last_name.toLowerCase().includes(searchSidebarTop.dataFromChildWhat)) && item.address.toLowerCase().includes(searchSidebarTop.dataFromChildWhere)
                })
                .map((Candidat) => (
                  <div key={Candidat.id}>
                  <Candidats Candidat={Candidat} />
                  </div>
                ))}

                    <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:"20px"}}>
                    {visibleItems < countcandidats && (
                    <button  onClick={loadMore} className="btn btn-outline-dark" type="button">View More</button>
                    )}
                  </div>
              </div>
       
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


export { CandidatsListing };
