import React from "react";

const signup = () => {
  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <div
        className="w-[90%] max-w-[500px] h-[500px] bg-[#141f1f] rounded 
    flex flex-col justify-center items-center gap-[20px]"
      >
        <h1 className="text-white  text-[20px] font-semibold"> Sign up </h1>
        <form className="w-[100%] flex flex-col items-center  justify-center">
          <div className="w-[80%] h-[50px] flex justify-center items-center gap-[10px]">
            <input
              type="text"
              placeholder="first name"
              className="w-[50%] h-[100%] bg-white outline-none 
           border-none rounded-lg px-[10px] py-[5px]"
            />
            <input
              type="text"
              placeholder="last name"
              className="w-[50%] h-[100%] bg-white outline-none *
           border-none rounded-lg px-[10px] py-[5px]"
            />
          </div>
          <input type="email" placeholder="email" 
        </form>
      </div>
    </div>
  );
};

export default signup;
