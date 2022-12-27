import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

function Login() {
  const connectWithMetamask = useMetamask();
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 wo-56 mb-10 shadow-2xl"
          src="favicon.png"
          alt=""
        />
        <h1 className="text-6xl text-white font-bold">THE LUCKY DRAW</h1>
        <h2 className="text-[#a1a1a1] p-1">
          Get Started By logging in with your MetaMask
        </h2>
        <button
          onClick={connectWithMetamask}
          className="bg-white hover:text-white hover:bg-[#a128a1] px-8 py-5 mt-10 rounded-lg hover:shadow-l font-bold"
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
}

export default Login;
