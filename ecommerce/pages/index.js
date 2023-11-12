import React, { useState } from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';



const Home = ({ products, bannerData, footerBannerData }) => {
  const [sortBy, setSortBy] = useState('name'); 
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredAndSortedProducts = [...products]
    .filter((product) => product.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else {
        
        return a.name.localeCompare(b.name);
      }
    });

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Browse Our Products</h2>
        <p>University Uniforms and other Items</p>
      </div>

      <div className="sort-and-search">
        <div className="sort-options">
          <label>
            Sort by:
            <select value={sortBy} onChange={handleSortByChange}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </label>
          <label>
            Order:
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
        <div className="search-bar">
        <label>
          Search:
          <span className="search-icon"></span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="&#x1F50E;&#xFE0E;Search products... "
            className="search-input"
          />
        </label>
       </div>
      </div>

      <div className="products-container">
        {filteredAndSortedProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={footerBannerData && footerBannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerBannerQuery = '*[_type == "footerBanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);

  return {
    props: { products, bannerData, footerBannerData },
  };
};

export default Home;
