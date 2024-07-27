import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import RecipeDetails from "./components/RecipeDetails";
import data from "./recipes.json";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TipsandTricks from "./components/subMenu/TipsandTricks";
import Shareyourrecipes from "./components/subMenu/Shareyourrecipes";
import CustomMealPlan from "./components/subMenu/CustomMealPlan";
import NewRecipes from "./components/subMenu/NewRecipes";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails recipes={recipes} />}
        />
        <Route path="/TipsandTricks" element={<TipsandTricks />} />
        <Route path="/ShareYourRecipes" element={<Shareyourrecipes />} />
        <Route path="/CustomMealPlan" element={<CustomMealPlan />} />
        <Route path="/NewRecipes" element={<NewRecipes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
