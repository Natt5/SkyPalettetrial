// import React, { useState } from 'react';

// function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         // For example, sending formData to an API or email service
//         alert('Thank you for reaching out!');
//     };

//     return (
//         <div className="contact-container">
//             <h1 className="contact-title">Contact Us</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="message" className="form-label">Message</label>
//                     <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-custom">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Contact;

//LATEST DEPLOYED

// import React, { useState } from 'react';

// function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const [showThankYouAlert, setShowThankYouAlert] = useState(false); // New state to control the alert visibility

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setShowThankYouAlert(true); // Show the thank you alert
//         // Reset the form fields
//         setFormData({
//             name: '',
//             email: '',
//             message: '',
//         });
//         // Optionally, hide the alert after some time
//         setTimeout(() => {
//             setShowThankYouAlert(false);
//         }, 5000); // Hides the alert after 5 seconds
//     };

//     return (
//         <div className="contact-container">
//             <h1 className="contact-title">Contact Us</h1>
//             {/* Conditionally render the Bootstrap alert */}
//             {showThankYouAlert && (
//                 <div className="alert alert-success" role="alert">
//                     Thank you for reaching out!
//                 </div>
//             )}
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="message" className="form-label">Message</label>
//                     <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-custom">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Contact;


import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showThankYouAlert, setShowThankYouAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Note: We're removing handleSubmit since Netlify will handle the form submission
    // const handleSubmit = (e) => {...};

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
         
            {showThankYouAlert && (
                <div className="alert alert-success" role="alert">
                    Thank you for reaching out!
                </div>
            )}
            {/* Add 'method="POST"', 'data-netlify="true"', and a hidden input for form name */}
{/*         <form name="contact" method="POST" data-netlify="true" action="/thankyoupage"> */}
                 <form name="contact" method="POST" data-netlify="true">

                {/* Netlify requires a hidden input field to identify the form */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-custom">Submit</button>
            </form>
            {/* Optionally, you can remove the thank you alert or handle it differently */}
        </div>
    );
}

export default Contact;
