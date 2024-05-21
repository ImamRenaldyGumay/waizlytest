import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Product = () => {
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
    <div className="mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900">Product</h1>
      <div className="grid grid-cols-6 gap-4">
        {data.map((item) => (
          <Card key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}

export default Product
