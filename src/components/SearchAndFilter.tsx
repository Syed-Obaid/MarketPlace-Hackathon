"use client";

import React, { useState } from "react";
import { Product } from "../../types/products";

interface SearchAndFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  products,
  onFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const priceRanges = [
    { label: "Under $50", range: [0, 50] },
    { label: "$50 - $100", range: [50, 100] },
    { label: "$100 - $200", range: [100, 200] },
    { label: "Over $200", range: [200, Infinity] },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Immediately filter based on search query
    handleFilter();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(e.target.value);
  };

  const handleFilter = () => {
    let filteredProducts = products;

    // Filter by search query
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price range
    if (selectedPrice) {
      const priceRange = priceRanges.find(
        (price) => price.label === selectedPrice
      )?.range;
      if (priceRange) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );
      }
    }

    onFilter(filteredProducts);
  };

  const handleApplyFilter = () => {
    handleFilter(); // Apply filter based on current category and price selection
  };

  return (
    <div className="shadow-md rounded-lg p-6 mb-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5 bg-gray-100 gap-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* Price Range Dropdown */}
        <select
          value={selectedPrice}
          onChange={handlePriceChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Prices</option>
          {priceRanges.map((price) => (
            <option key={price.label} value={price.label}>
              {price.label}
            </option>
          ))}
        </select>
        {/* Apply Filter Button */}
        <div className="">
          <button
            onClick={handleApplyFilter}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Apply Filters
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default SearchAndFilter;
