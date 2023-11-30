import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" flex justify-center items-center p-4 w-full md:h-screen text-[#e27d60] bg-[#85dbcf]"
    >
      <form
        method="POST"
        action="https://getform.io/f/4d804625-1a69-4a5a-b2e2-8f514b08ce23"
        className="flex flex-col max-w-[600px] w- "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="pt-4">
            Submit the form below or contant me on email
            @jashsharma1310@gmail.com
          </p>
        </div>
        <input
          className=" p-2 bg-[#efc5b9] text-gray-900"
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          className="my-4 p-2 bg-[#efc5b9] text-gray-900"
          name="email"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="bg-[#efc5b9] p-2 text-gray-900"
          name="Message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-#e8a87c border-2 hover:border-[#c36d9e] border-[#e27d60] hover:bg-[#c36d9e] px-4 items-center py-3 flex mx-auto my-8">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
