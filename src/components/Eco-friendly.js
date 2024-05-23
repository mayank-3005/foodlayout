import partner from '../assets/images/partner.png'


const Partner = () =>{
    return(
        <section>
        <div className="">
            <div className="container col-xxl-11">
                <div className="row flex-lg align-items-center pt-5">
                     
                <div className="col-lg-4 ">
                    <div className="partner-img">
                    <img src ={partner} alt="partner" className='img-fluid'></img>
                    </div> 
                </div>
                    

                    <div className="col-lg-8">
                        <p class="fs-3 text-success fw-bold lh-1 mb-2">Eco-friendly option for a sustainable future</p>
                        <p class="fs-5 text-success-emphasis fw-bold lh-1 pb-3 mb-2">Install Your Own Biofuel Pump Station In
                    Compliance With Government Of India.</p>
                    <a href="/form" class="rounded-5 border border-3 border-success px-3 py-2 text-decoration-none text-success greenborderbtn">Become
                    A
                    Partner</a>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
    );
    
}

export default Partner;