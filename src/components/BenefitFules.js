import React from 'react';
import india from "../assets/images/india.png"
import quality from "../assets/images/quality.png"
import empoloy from "../assets/images/employee.png"
import emision from "../assets/images/co2-emission.png"
import green from  "../assets/images/61BJXVWWVLL._AC_UF1000_1000_QL80_-removebg-preview.png"
const BenefitFules = () => {
    return (
       <section style={{ background: '#e1ffea'}} className='pt-5'>
       <div className="container">
       <div class="text-center text-success mb-3">
           <h2 class="display-4 lh-1 fw-bold ">Benefits of Biofuels</h2>
           <p class="lead fw-bold">Certified By Government Of India</p>

       </div>
       <div className="row">
         <div className="col-lg-4">
           <div className="choose-number">
             <div className="choose-1 mb-4">
               <div className="choose-img">
                 <img src= {india} alt="Digital Experience" title="Digital Experience" />
               </div>
               <div className="choose-text">
                 <h3 className='text-success fw-bold  '>INDIA based productions</h3>
                 <p>There is growing demand for Biofuel as it is safe alternative to traditional fuel..</p>
               </div>
             </div>
             <div className="choose-1 mb-4">
               <div className="choose-img">
                 <img src= {empoloy} alt="Integrated Solutions" title="Integrated Solutions" />
               </div>
               <div className="choose-text">
                 <h3 className='text-success fw-bold  '>Employment opportunities</h3>
                 <p>Join, Work and Succeed.</p>
               </div>
             </div>
            
           </div>
         </div>
         <div className="col-lg-4 d-flex justify-content-around align-items-center">
           <div className="choose-us-img">
           
             <div style={{ width: '200px', height: '150px',  }}>
             <img src={green} alt='green'></img>
             </div>
           </div>
         </div>
         <div className="col-lg-4">
           <div className="choose-number">
             <div className="choose-1 mb-4">
               <div className="choose-img">
                 <img src= {quality} alt="Fast And Reliable" title="Fast And Reliable" />
               </div>
               <div className="choose-text">
                 <h3 className='text-success fw-bold  '>Additional mileage best in quality fuel and GST benefit</h3>
                 <p>Fuel for your engine.</p>
               </div>
             </div>
             <div className="choose-1 mb-4">
               <div className="choose-img">
                 <img src= {emision} alt="Better Branding" title="Better Branding" />
               </div>
               <div className="choose-text">
                 <h3 className='text-success fw-bold '>85% pollution reduction</h3>
                 <p>Go green, Breathe clean.</p>
               </div>
             </div>
           
           </div>
         </div>
       </div>
     </div>
       </section>
      );
    };

export default BenefitFules;
