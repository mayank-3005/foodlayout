

import ContactForm from "./ContactUsForm";


const Hero = () =>{
    return(
        <section>
        <div className="">
            <div className="container col-xxl-11">
                <div className="row flex-lg align-items-center pt-5">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold text-success lh-1 mb-3">Bharat Ecofuels</h1>
                        <p className="text-success-emphasis mb-2">At Bharat Ecofuels, we are renovating the nation’s scene for
                            millions of farmers and People in india.</p>
                        <p className="text-success-emphasis">In The Industry Of Biofuel We Are Generating Opportunity &amp;
                            Employment For The People Who Live In Even The Most Rustic Areas.
                            Hold The Vision And Trust Of The Process. A City Is Not Gauged By Its Length And Width.
                            We Thank! Our Distributers, Clients, Customers, Associates, Employee And our Well-Wishers.
                        </p>
                    </div>
                    <div className="col-lg-6 ">
                     <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
    
}
export default Hero;