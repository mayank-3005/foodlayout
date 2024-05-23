import React, { useState } from 'react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phone: '',
        businessModels: '',
        budget: '',
        communicationAddress: '',
        dateOfBirth: '',
        educationalQualification: '',
        state: '',
        district: '',
        other_district: '',
        city: '',
        code: '',
        location: '',
        investment: '',
        detail: '',
        land_owner: '',
        select_land_owner: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission logic here
            console.log("Form submitted successfully", formData);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                newErrors[key] = `Please enter your ${key.replace('_', ' ')}.`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="container my-5 col-xxl-10">
            <div className="card rounded-4 shadow-lg border-0 rounded-lg p-4">
                <h2 className="text-center fw-bold pb-5 display-4 text-success-emphasis">Application Form</h2>
                <form className="row g-3 needs-validation" id="applicationForm" method="POST" noValidate onSubmit={handleSubmit}>
                    <input type="hidden" name="csrfmiddlewaretoken" value="KPCdEkRGAO0LDurs810nSCqSVa5vDEBQ8hMnEWXXScsQmvSecmn2ff6U18OIELh3" />

                    {/* First Name Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.firstName ? 'is-invalid' : ''}`}
                                id="firstName"
                                placeholder="Enter your first name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="firstName" className="text-secondary">First Name *</label>
                            {errors.firstName && <div className="invalid-feedback text-danger">{errors.firstName}</div>}
                        </div>
                    </div>

                    {/* Last Name Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.lastName ? 'is-invalid' : ''}`}
                                id="lastName"
                                placeholder="Enter your last name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="lastName" className="text-secondary">Last Name *</label>
                            {errors.lastName && <div className="invalid-feedback text-danger">{errors.lastName}</div>}
                        </div>
                    </div>

                    {/* Email Address Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="email"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.emailAddress ? 'is-invalid' : ''}`}
                                id="emailAddress"
                                placeholder="Enter your email address"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleChange}
                            />
                            <label htmlFor="emailAddress" className="text-secondary">Email Address *</label>
                            {errors.emailAddress && <div className="invalid-feedback text-danger">{errors.emailAddress}</div>}
                        </div>
                    </div>

                    {/* Phone Number Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.phone ? 'is-invalid' : ''}`}
                                id="phone"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="phone" className="text-secondary">Phone Number *</label>
                            {errors.phone && <div className="invalid-feedback text-danger">{errors.phone}</div>}
                        </div>
                    </div>

                    {/* Business Model Select */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <select
                                className={`form-select rounded-3 border-secondary ${errors.businessModels ? 'is-invalid' : ''}`}
                                id="businessModels"
                                name="businessModels"
                                value={formData.businessModels}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Business Model</option>
                                <option value="franchise">Franchise</option>
                                <option value="biodiesel_dealership">Dealership of Bio-Diesel and Bio-Petrol</option>
                                <option value="cng_station">CNG Filling Station</option>
                                <option value="cng_plant">CNG Plant</option>
                                <option value="all_in_one">All In One</option>
                            </select>
                            <label htmlFor="businessModels" className="text-secondary">Business Model *</label>
                            {errors.businessModels && <div className="invalid-feedback text-danger">{errors.businessModels}</div>}
                        </div>
                    </div>

                    {/* Investment Budget Select */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <select
                                className={`form-select rounded-3 border-secondary ${errors.budget ? 'is-invalid' : ''}`}
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Investment Amount</option>
                                <option value="upto_25_lakh">UP TO 25 lakh</option>
                                <option value="26_to_50_lakh">26 Lakh to 50 lakh</option>
                                <option value="51_lakh_to_1_cr">51 Lakh to 1.00 cr.</option>
                                <option value="1_cr_to_3_cr">1.00 cr. to 3.00 cr.</option>
                                <option value="3_cr_to_5_cr">3.00 cr. to 5.00 cr.</option>
                                <option value="5_cr_to_10_cr">5.00 cr. to 10.00 cr.</option>
                            </select>
                            <label htmlFor="budget" className="text-secondary">Investment Budget *</label>
                            {errors.budget && <div className="invalid-feedback text-danger">{errors.budget}</div>}
                        </div>
                    </div>

                    {/* Communication Address Textarea */}
                    <div className="col-12">
                        <div className="form-floating mb-2">
                            <textarea
                                className="form-control rounded-3 border-secondary ps-4"
                                placeholder="Enter your communication address"
                                id="communicationAddress"
                                name="communicationAddress"
                                rows="3"
                                value={formData.communicationAddress}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="communicationAddress" className="text-secondary">Communication Address</label>
                        </div>
                    </div>

                    {/* Date of Birth Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="date"
                                className="form-control rounded-3 border-secondary"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                            <label htmlFor="dateOfBirth" className="text-secondary">Date of Birth</label>
                        </div>
                    </div>

                    {/* Educational Qualification Select */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <select
                                className={`form-select rounded-3 border-secondary ${errors.educationalQualification ? 'is-invalid' : ''}`}
                                id="educationalQualification"
                                name="educationalQualification"
                                value={formData.educationalQualification}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Educational Level</option>
                                <option value="10th_pass">10th pass</option>
                                <option value="12th_pass">12th pass</option>
                                <option value="graduate">Graduate</option>
                                <option value="post_graduate">Post Graduate</option>
                                <option value="above">Above</option>
                            </select>
                            <label htmlFor="educationalQualification" className="text-secondary">Educational Qualification *</label>
                            {errors.educationalQualification && <div className="invalid-feedback text-danger">{errors.educationalQualification}</div>}
                        </div>
                    </div>

                    {/* State Select */}
                    <div className="col-md-4">
                        <div className="form-floating mb-2">
                            <select
                                className={`form-select rounded-3 border-secondary ${errors.state ? 'is-invalid' : ''}`}
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="andaman_and_nicobar">Andaman and Nicobar Island (UT)</option>
                                <option value="andhra_pradesh">Andhra Pradesh</option>
                                <option value="arunachal_pradesh">Arunachal Pradesh</option>
                                <option value="assam">Assam</option>
                                <option value="bihar">Bihar</option>
                                <option value="chandigarh">Chandigarh</option>
                                <option value="chhattisgrah">Chhattisgrah</option>
                                <option value="dabar_and_nagar_haveli">Dabar and Nagar Haveli (UT)</option>
                                <option value="daman_and_diu">Daman and Diu (UT)</option>
                                <option value="delhi">Delhi (NCR)</option>
                                <option value="goa">Goa</option>
                                <option value="gujarat">Gujarat</option>
                                <option value="haryana">Haryana</option>
                                <option value="himachal_pradesh">Himachal Pradesh</option>
                                <option value="jammu_and_kashmir">Jammu and Kashmir</option>
                                <option value="jharkhand">Jharkhand</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="kerala">Kerala</option>
                                <option value="lakshadweep">Lakshadweep (UT)</option>
                            </select>
                            <label htmlFor="state" className="text-secondary">State *</label>
                            {errors.state && <div className="invalid-feedback text-danger">{errors.state}</div>}
                        </div>
                    </div>

                    {/* District Input */}
                    <div className="col-md-4">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.district ? 'is-invalid' : ''}`}
                                id="district"
                                placeholder="Enter your district"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="district" className="text-secondary">District *</label>
                            {errors.district && <div className="invalid-feedback text-danger">{errors.district}</div>}
                        </div>
                    </div>

                    {/* Other District Input */}
                    <div className="col-md-4">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.other_district ? 'is-invalid' : ''}`}
                                id="other_district"
                                placeholder="Enter your other district"
                                name="other_district"
                                value={formData.other_district}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="other_district" className="text-secondary">Other District</label>
                            {errors.other_district && <div className="invalid-feedback text-danger">{errors.other_district}</div>}
                        </div>
                    </div>

                    {/* City Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.city ? 'is-invalid' : ''}`}
                                id="city"
                                placeholder="Enter your city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="city" className="text-secondary">City</label>
                            {errors.city && <div className="invalid-feedback text-danger">{errors.city}</div>}
                        </div>
                    </div>

                    {/* Postal Code/ZIP Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.code ? 'is-invalid' : ''}`}
                                id="code"
                                placeholder="Enter your Postal Code/ZIP"
                                name="code"
                                value={formData.code}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="code" className="text-secondary">Postal Code/ZIP</label>
                            {errors.code && <div className="invalid-feedback text-danger">{errors.code}</div>}
                        </div>
                    </div>

                    {/* Land Location Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.location ? 'is-invalid' : ''}`}
                                id="location"
                                placeholder="Enter your land location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="location" className="text-secondary">Land Location</label>
                            {errors.location && <div className="invalid-feedback text-danger">{errors.location}</div>}
                        </div>
                    </div>

                    {/* Investment Select */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <select
                                className={`form-select rounded-3 border-secondary ${errors.investment ? 'is-invalid' : ''}`}
                                id="investment"
                                name="investment"
                                value={formData.investment}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Investment Type</option>
                                <option value="Own_Fund">Own Fund</option>
                                <option value="Bank_Loan">Bank Loan</option>
                            </select>
                            <label htmlFor="investment" className="text-secondary">Investment</label>
                            {errors.investment && <div className="invalid-feedback text-danger">{errors.investment}</div>}
                        </div>
                    </div>

                    {/* Land Detail Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.detail ? 'is-invalid' : ''}`}
                                id="detail"
                                placeholder="Enter your land detail"
                                name="detail"
                                value={formData.detail}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="detail" className="text-secondary">Land Detail</label>
                            {errors.detail && <div className="invalid-feedback text-danger">{errors.detail}</div>}
                        </div>
                    </div>

                    {/* Land Owner Input */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className={`form-control rounded-3 border-secondary ps-4 ${errors.land_owner ? 'is-invalid' : ''}`}
                                id="land_owner"
                                placeholder="Enter your land owner"
                                name="land_owner"
                                value={formData.land_owner}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="land_owner" className="text-secondary">Land Owner</label>
                            {errors.land_owner && <div className="invalid-feedback text-danger">{errors.land_owner}</div>}
                        </div>
                    </div>

                    {/* Select Land Owner Select */}
                    <div className="col-md-6">
                        <div className="form-floating mb-2">
                            <select
                                className={`form-select rounded-3 border-secondary ${errors.select_land_owner ? 'is-invalid' : ''}`}
                                id="select_land_owner"
                                name="select_land_owner"
                                value={formData.select_land_owner}
                                onChange={handleChange}
                                required
                            >
                                <option value="Self">Self</option>
                                <option value="Lease">Lease</option>
                            </select>
                            <label htmlFor="select_land_owner" className="text-secondary">Select Land Owner</label>
                            {errors.select_land_owner && <div className="invalid-feedback text-danger">{errors.select_land_owner}</div>}
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-center mt-3">
                        <button type="submit" name="application" className="btn-submit btn-lg btn-success rounded-pill px-4 py-2 fw-bold">Submit</button>
                    </div>
                    <small className="text-center text-body-secondary">By clicking Submit, we'll reach you in 72hr.</small>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
