import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-yellow-200 h-screen flex justify-center items-center">
      <div className="">
        <h1 className="text-3xl font-bold">Home</h1>
        <div className="flex mt-5 gap-5">
          <button className="border border-black px-10 rounded-xl bg-white">
            <Link to={"/todo"}>Todo</Link>
          </button>
          <button className="border border-black px-10 rounded-xl bg-white">
            <Link to={"/product"}>Product</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home
