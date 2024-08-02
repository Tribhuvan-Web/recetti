import React from "react";
import {  Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <>
      <article className="recipes">
        <section>
          <button>
            <Link to={"/TipsandTricks"}>Cooking Tips & Tricks </Link>
          </button>
          <button>
            <Link to={"/NewRecipes"}>New Recipes </Link>
          </button>
          <button>
            <Link to={"/ShareYourRecipes"}>Share Your Recipe</Link>
          </button>
          <button>
            <Link to={"/CustomMealPlan"}>Custom Meal Plan </Link>
          </button>
        </section>
        <section className="container">
          {recipes.slice(0, 8).map((element, index) => {
            return <Card key={index} element={element} />;
          })}
        </section>
        <h3>Recommended Recipes</h3>
        <section className="container">
          {recipes.slice(8).map((element, index) => {
            return <Card key={index} element={element} />;
          })}
        </section>
      </article>
    </>
  );
};

export default Recipes;

const Card = ({ element }) => {
  return (
    <Link to={`/recipe/${element.id}`} className="card">
      <img src={element.image} alt={element.title} />
      <h4>{element.title}</h4>
      <h4>{element.cookingTime}</h4>
    </Link>
  );
};
