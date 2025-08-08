import React,{useRef} from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
const EventForm = () => {
  const brandName='FILMMAX'
   const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs.sendForm(
      'service_uqd1fd8',      // replace with your EmailJS service ID
      'template_qln5wi5',     // replace with your EmailJS template ID
      formRef.current,
     'KbImgFBI2LN01iNSH'         // replace with your EmailJS user ID
    )
    .then((result) => {
       Swal.fire({
  title: "success!",
  text: "Registration successful!",
  icon: "success",
 

 
});
      formRef.current.reset();
    }, (error) => {
     Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    });
  };

  return (
    <div>
       <div className="upComing-event">
    <h1>Up coming event</h1>
    <p>Register for the <span className='brand-name'>{brandName}</span> Enrollment for className summer 2026 </p>
    <div className="modal-dialog modal-dialog-scrollable">
  
  </div>

<button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Register Now!
</button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable">
<div className="modal-content">
  <div className="modal-header">
    <h1 className="modal-title fs-5" id="staticBackdropLabel"><span className='brand-name'>{brandName}</span> Summer 2026</h1>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div className="modal-body">
    <p>Register for <span className='brand-name'>{brandName}</span> 2026 summer event</p>
   <form ref={formRef} onSubmit={handleSubmit}>
      <div className="box">
        <label>Name:</label>
        <input type="text" name="user_name"   className='field' required  />
      </div>
      <div  className="box">
        <label>Email:</label>
        <input type="email" name="user_email"   className='field' required />
      </div>
         <div>
          <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            required
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            required
          /> Female
        </label>
 
      </div>

      
       <div className='box'>
        <label>Profession:</label><br/>
        <select
        className='field'
          name="profession"
        >
          <option value="">Select Profession</option>
          <option value="Director">Director</option>
          <option value="Script writer">Script writer</option>
          <option value="Videograhpher">Videograhpher</option>
          <option value="Crew member">Crew member</option>
        </select>
       
      </div>

      <button type="submit">Register</button>
    </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default EventForm
