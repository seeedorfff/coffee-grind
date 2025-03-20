import React from "react";
import { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";

const RecipeChoices = ({handleChange, label, choices, checked}) => {
  return (
    <div className="radio-buttons">
        {
            choices && choices.map((choice) => (
                <li key={choice}>
                    <input 
                        type="radio"
                        id={choice}
                        value={choice}
                        name={label}
                        onChange={handleChange}
                        checked={checked == choice}
                    />
                    {choice}
                </li>
            ))
        }
    </div>
  );
};

export default RecipeChoices;
