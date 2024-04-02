import React from "react";

function Contact() {
  return (
    <div className="pb-[100px]" id="contact">
      <div className=" p-10  ">
        <h1 className="text-4xl mb-10 ">Contact Me</h1>
        <span className="tracking-[5px] text-gray-400">
          {" "}
          Please complete the form below
        </span>
        <div className="flex flex-col md:items-center">
          <form action="" className="mt-10 md:w-[50%] ">
            <div className="flex w-full justify-between gap-2">
              <div className="w-full">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" />
              </div>
              <div className="w-full">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" />
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" />
            <button className="mt-5 bg-gray-200 p-5" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
