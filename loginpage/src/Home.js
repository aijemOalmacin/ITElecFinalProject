import React from 'react';
import './Home.css';
import foodImage1 from './food1.jpg'; // Replace with your image files
import foodImage2 from './food2.jpg';
import foodImage3 from './food3.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Delicious Food Hub</h1>
        <p>Explore a world of culinary delights</p>
      </header>

      <nav className="navbar">
        <div className="logo">
          <h1>Food Hub</h1>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="featured-section">
        <h2>Featured Dishes</h2>
        <div className="featured-images">
          <img src={foodImage1} alt="Featured Food 1" />
          <img src={foodImage2} alt="Featured Food 2" />
          <img src={foodImage3} alt="Featured Food 3" />
        </div>
      </section>

      <section className="category-section">
        <h2>Explore Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={foodImage1} alt="Category 1" />
            <h3>Italian Cuisine</h3>
          </div>
          <div className="category-card">
            <img src={foodImage2} alt="Category 2" />
            <h3>Asian Fusion</h3>
          </div>
          <div className="category-card">
            <img src={foodImage3} alt="Category 3" />
            <h3>Vegetarian Delights</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;