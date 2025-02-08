"use client";

import React, { useState, FormEvent } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Buttons";
// import Button from "../components/Buttons";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 50 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99, stock: 100 },
    { id: 3, name: "Headphones", category: "Accessories", price: 149.99, stock: 200 },
    { id: 4, name: "Desk Chair", category: "Furniture", price: 199.99, stock: 30 },
    { id: 5, name: "Coffee Maker", category: "Appliances", price: 79.99, stock: 75 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", stock: "" });

  const addProduct = (e: FormEvent) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...newProduct,
        id: products.length + 1,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
      },
    ]);
    setNewProduct({ name: "", category: "", price: "", stock: "" });
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="space-y-6">
      <Card title="Add New Product">
        <form onSubmit={addProduct} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <Button type="submit">
            <Plus size={18} className="mr-2" />
            Add Product
          </Button>
        </form>
      </Card>

      <Card title="Product List">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Stock</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">{product.name}</td>
                  <td className="py-4 px-6">{product.category}</td>
                  <td className="py-4 px-6">${product.price.toFixed(2)}</td>
                  <td className="py-4 px-6">{product.stock}</td>
                  <td className="py-4 px-6">
                    <button className="text-blue-600 hover:text-blue-800 mr-2" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteProduct(product.id)}
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProductsPage;
