import React from "react";
import { useState } from "react";



function Contact() {

  const [data , setData] = useState({
    fname : "",
    eemail : "",
    pphone : "",
    mmess : "",
  });
  
  const inputEvent = (event) => {
    const {name , value} = event.target;
  
    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };
    });
  
   }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name : ${data.fname} Phone : ${data.pphone} email : ${data.eemail} msg : ${data.mmess}`);
  
  }

  return (
     <>
      <div className="my-0"><h3 className="text-center">Contact US</h3> </div>
      <div className="container contact_div" >
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input name="fname" value={data.fname} onChange={inputEvent} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input name="eemail" value={data.eemail} onChange={inputEvent}  type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input name="pphone" value={data.pphone} onChange={inputEvent}  type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter phone Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea  name="mmess" value={data.mmess} onChange={inputEvent}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-primary btn-sm">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
     </>
  );
}

export default Contact;
