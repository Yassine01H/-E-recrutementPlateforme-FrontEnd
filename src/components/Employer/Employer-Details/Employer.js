import axios from "axios"
import { Footer } from "../../Footer"
import { Header } from "../../Header"
import { DetailsEmployer } from "./DetailsEmployer"
import { HeaderEmployer } from "./HeaderEmployer"
import { SideBarEmployer } from "./SideBarEmployer"
import { useEffect, useState } from "react"
import { JobListing } from "../../JobListing/Joblist"

const EmployerDetails =()=>{

return(
    <>
        <Header/>
        <div>

        <section className="space-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
               

                <HeaderEmployer/>


                <div className="border p-4 mt-4 mt-md-5">
                  <div className="row">
                      
                      <DetailsEmployer/>
                  </div>
                </div>



              </div>
           <SideBarEmployer/>
            </div>
          </div>
        </section>
      </div>
        <Footer/>
    </>
)
}
export {EmployerDetails}