import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" flex justify-center items-center p-4 w-full md:h-screen text-[#ffffff] bg-[#08100c]"
    >
      <form
        method="POST"
        action="https://getform.io/f/4d804625-1a69-4a5a-b2e2-8f514b08ce23"
        className="flex flex-col max-w-[600px]  "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#55595d]">
            Contact
          </p>
          <p className="pt-4">
            Submit the form below or contant me on email
            @jashsharma1310@gmail.com
          </p>
        </div>
        <input
          className=" p-2 bg-[#a4aeb8]  text-[#08100c] placeholder-gray-800"
          name="name"
          placeholder="Name"
          type="text"
          required
        />
        <input
          className="my-4 p-2 bg-[#a4aeb8] text-[#08100c] placeholder-gray-800"
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          className="bg-[#a4aeb8] p-2 text-[#08100c] placeholder-gray-800"
          name="Message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-#e8a87c border-2 hover:border-[#55595d] border-[#55595d] hover:bg-[#55595d] px-4 items-center py-3 flex mx-auto my-8">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
