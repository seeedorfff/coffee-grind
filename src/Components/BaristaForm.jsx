import React from "react";
import { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../assets/drinks.json"

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    'temperature': "",
    'milk': "",
    'syrup': "",
    'blended': "",
  });

  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});

  const [correctTemp, setCorrectTemp] = useState('');
  const [correctMilk, setCorrectMilk] = useState('');
  const [correctSyrup, setCorrectSyrup] = useState('');
  const [correctBlended, setCorrectBlended] = useState('');

  const ingredients = {
    'temperature': ["hot", "lukewarm", "cold"],
    'syrup': ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    'milk': ["cow", "oat", "goat", "almond", "none"],
    'blended': ["yes", "turbo", "no"],
  };

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  }

  const onCheckAnswer = () => {
    if (trueRecipe.temp != inputs['temperature']) {
      setCorrectTemp("wrong");
    } 
    else {
      setCorrectTemp("correct");
    }

    if (trueRecipe.milk != inputs['milk']) {
      setCorrectMilk("wrong");
    }
    else {
      setCorrectMilk("correct");
    }

    if (trueRecipe.syrup != inputs['syrup']) {
      setCorrectSyrup("wrong");
    }
    else {
      setCorrectSyrup("correct");
    }

    if (trueRecipe.blended != inputs['blended']) {
      setCorrectBlended("wrong");
    }
    else {
      setCorrectBlended("correct");
    }
  };

  const onNewDrink = () => {
    setInputs({
      temperature: "",
      syrup: "",
      milk: "",
      blended: ""
    });

    setCorrectTemp('');
    setCorrectMilk('');
    setCorrectSyrup('');
    setCorrectBlended('');

    getNextDrink();
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button 
          type="new-drink-button" 
          className="button newdrink"
          onClick={onNewDrink}
        >
          🔄
        </button>
      </div>
      <form action="" className="container">
        <div className="mini-container">
          <h3>Temperature</h3>
          <div className='answer-space' id={correctTemp}>
            {inputs["temperature"]}
          </div>
          <RecipeChoices 
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState, [e.target.name]: e.target.value,
            }))}
            label="temperature"
            choices={ingredients["temperature"]}
            checked={inputs["temperature"]}
          />
        </div>

        <div className="mini-container">
          <h3>Syrup</h3>
          <div className="answer-space" id={correctSyrup}>
            {inputs["syrup"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState, [e.target.name]: e.target.value,
            }))}
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
          />
        </div>

        <div className="mini-container">
          <h3>Milk</h3>
          <div className="answer-space" id={correctMilk}>
            {inputs["milk"]}
          </div>
          <RecipeChoices 
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState, [e.target.name]: e.target.value,
            }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
          />
        </div>

        <div className="mini-container">
          <h3>Blended</h3>
          <div className="answer-space" id={correctBlended}>
            {inputs["blended"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState, [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
          />
        </div>

      <button type="submit" onClick={onCheckAnswer} className="button submit">
        Check Answer
      </button>

      <button
        type="new-drink-button"
        className="button submit"
        onClick={onNewDrink}
      >
        New Drink
      </button>
      </form>
      
    </div>
  );
};

export default BaristaForm;
