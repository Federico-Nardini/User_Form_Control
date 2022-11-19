import React from "react";

const ErrorAlert = (props) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div
                className="bg-gray-900/70 bg-cover bg-center absolute m-0 w-screen h-screen"
                onClick={props.alertCloseHandler}
            ></div>
            <div className="flex rounded-xl fixed flex-col justify-between w-3/5 lg:w-1/3 mx-auto">
                <div className="text-white rounded-t-xl p-4 flex-1 bg-purple-900">Invalid</div>
                <div className="font-bold p-4 flex-1 bg-white rounded-b-xl flex flex-col">
                    {props.errorMsg}
                    <button
                        className="rounded-lg flex-1 bg-purple-900 text-white w-20 self-end py-2 px-4 mt-4"
                        onClick={props.alertCloseHandler}
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorAlert;
