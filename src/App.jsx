import { useState } from "react";
import FormComponent from "./Form/FormComponent";
import ListComponent from "./List/ListComponent";
import ErrorAlert from "./Form/ErrorAlert";

const DUMMY_DATA = [
    {
        name: "Max",
        age: "31",
    },
    {
        name: "Tony",
        age: "20",
    },
];

const userError = "Please don't leave blank the username field";
const ageError = "Please provide a valid age (>0)";

function App() {
    const [userInput, setUserInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    const [dataInput, setDataInput] = useState(DUMMY_DATA);
    const [userIsValid, setUserIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    const userInputHandler = (event) => {
        setUserInput(event.target.value.replace(/\s/g, ""));
    };

    const ageInputHandler = (event) => {
        setAgeInput(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (userInput.length <= 0) {
            return setUserIsValid(false);
        }
        if (Number(ageInput) <= 0 || ageInput.length <= 0) {
            return setAgeIsValid(false);
        }
        const newUser = {
            name: userInput,
            age: ageInput,
        };
        setDataInput((prevData) => {
            return [newUser, ...prevData];
        });
        setUserInput("");
        setAgeInput("");
    };

    const alertCloseHandler = () => {
        setUserIsValid(true);
        setAgeIsValid(true);
    };

    return (
        <div className="App flex flex-col items-center h-screen justify-center bg-[#2e2f4d]">
            <div className="w-2/5">
                {!userIsValid && (
                    <ErrorAlert errorMsg={userError} alertCloseHandler={alertCloseHandler} />
                )}
                {!ageIsValid && (
                    <ErrorAlert errorMsg={ageError} alertCloseHandler={alertCloseHandler} />
                )}
                <FormComponent
                    userInputHandler={userInputHandler}
                    ageInputHandler={ageInputHandler}
                    formSubmitHandler={formSubmitHandler}
                    userInputValue={userInput}
                    ageInputValue={ageInput}
                />
                <ListComponent dataInputs={dataInput} />
            </div>
        </div>
    );
}

export default App;
