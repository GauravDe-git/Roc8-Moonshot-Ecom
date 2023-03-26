import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-4 px-4">
      <div className="flex">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/3 h-auto object-contain"
        />
        <div className="ml-8">
          <h1 className="text-gray-900 font-bold text-2xl mb-2">{product.title}</h1>
          <p className="text-gray-700 text-base">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="font-bold text-xl">${product.price}</span>
            <div className="ml-4 flex">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                -
              </button>
              <span className="mx-2 font-bold text-xl">0</span>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                +
              </button>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
