import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }
  useEffect(() => {
    getData()
  })
  return (
    <div className="mx-auto px-4 py-16 bg-gray-500">
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold text-gray-900">Product</h1>
        <button
          className="border border-black mx-2 px-10 rounded-xl bg-white"
          onClick={() => navigate("/")}
        >
          back Home
        </button>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-10">
        {data.map((item) => (
          <Card key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}

export default Product
