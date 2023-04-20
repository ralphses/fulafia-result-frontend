import React, { useState } from 'react';

function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { name, description, price }]);
    setName('');
    setDescription('');
    setPrice(0);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Name:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-300 p-3 rounded-lg" />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Description:</span>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border-2 border-gray-300 p-3 rounded-lg"></textarea>
        </label>
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Price:</span>
          <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} className="border-2 border-gray-300 p-3 rounded-lg" />
        </label>
        <button type="submit" className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Add Product
        </button>
      </form>
      <table className="mt-8 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-4 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-4 py-4 whitespace-nowrap">{product.description}</td>
              <td className="px-4 py-4 whitespace-nowrap">{product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductForm;
