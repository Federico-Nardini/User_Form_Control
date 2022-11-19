import React, { useState } from "react";

const FormComponent = (props) => {
    return (
        <form
            onSubmit={props.formSubmitHandler}
            className="flex flex-col bg-[#1b1c30] rounded-xl py-6 px-8 items-start justify-items-start mb-6 shadow-md"
        >
            <label htmlFor="username" className="font-bold text-white text-xl">
                Username
            </label>
            <input
                type="text"
                name="username"
                id="username"
                className="rounded w-full mb-2 pl-2 h-8 text-lg"
                onChange={props.userInputHandler}
                value={props.userInputValue}
            />

            <label htmlFor="age" className="font-bold text-white text-xl">
                Age
            </label>
            <input
                type="number"
                name="age"
                id="age"
                className="rounded w-full mb-4 pl-2 h-8 text-lg"
                onChange={props.ageInputHandler}
                value={props.ageInputValue}
            />

            <button
                type="submit"
                className="bg-[#666bff] font-bold rounded-lg py-2 px-4 text-white"
            >
                Add User
            </button>
        </form>
    );
};

export default FormComponent;
