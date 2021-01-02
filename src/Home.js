import React from "react";
import "./Home.css";
import Product from "./Product";
import portfolio from "./static/portfolio.PNG";
import singlePage from "./static/singlePage.PNG";
import blog from "./static/blog.PNG";
import business from "./static/business.PNG";
import wordpress from "./static/wordpress.PNG";
import ecommerce from "./static/ecommerce.PNG";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://media.discordapp.net/attachments/769081190518489088/775648401983143936/banner.png?width=1440&height=576"
          alt=""
        />

        <div className="home__row firstProduct">
          <Product
            id="11111111"
            title="Single page website - Here you can only get a signle page website in which has no redirect, forms but all services"
            price={100000}
            image={singlePage}
            rating={5}
          />

          <Product
            id="22222222"
            title="Portfolio - A portfolio as you want as much pages you want as much services you want as much functions you want."
            price={100000}
            image={portfolio}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="33333333"
            title="Blog - A blog website to hold your ideas and views."
            price={100000}
            image={blog}
            rating={5}
          />

          <Product
            id="44444444"
            title="Business Website - A profession website for your company/business."
            price={100000}
            image={business}
            rating={5}
          />

          <Product
            id="55555555"
            title="Wordpress - A wordpress website without any sort of code."
            price={100000}
            image={wordpress}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="66666666"
            title="Ecommerce Website - A website with full ecommerce functionality like payments, user authentication etc."
            price={100000}
            image={ecommerce}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
