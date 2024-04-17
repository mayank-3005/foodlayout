import React, { useState } from 'react';

const FormComponent = () => {
   
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
       
    };

    return (
        <div className="container-contact grid md:grid-cols-2 ">
            <div className="grid1">
                <div className='grid1-item'>
                    <h2 className='grid-heading'>Hours Of Operation</h2>
                    <div className='one-operation'>
                        <h2>MON - FRI</h2>
                        <p>10:00am - 1:00 pm</p>
                        <p>4:00pm - 10:00 pm</p>
                    </div>
                    <div className='two-operation'>
                        <h2>SAT</h2>
                        <p>3:00pm - 10:30 pm</p>
                    </div>
                    <div className='third-operation'>
                        <h2>SUN</h2>
                        <p>We are closed</p>
                    </div>
                    <button className='grid-1-btn'>MAKE A RESERVATION</button>
                </div>
            </div>

            <div className="grid2">
                <div className='grid2-item'>
                    <div>
                        <h3 className='form-heanding-1'>Drop Us a Line</h3>
                        <h4 className='form-pera1'>Don’t be shy. Let us know if you have any <br/> questions!</h4>
                        <button className='form-btn-1'>CONTACT US</button>
                    </div>

                    <div>
                        <div className='form-container'>
                            <h3 className='form-heading'>Our Newsletter</h3>
                            <h4 className='form-pera'>Dialogue is an essential part of any script</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-field">
                                <input
                                    className='form-input'
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className='form-input'
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className='form-input'
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <button type="submit" className='form-btn-2'>CONTACT US</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormComponent;
