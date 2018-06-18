import React from "react";

const Form = ({ getWeather }) => (
    <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="Enter City" />
        <input type="text" name="country" placeholder="Enter Country" />
        <button>Weather for today</button>
    </form>
)

export default Form;