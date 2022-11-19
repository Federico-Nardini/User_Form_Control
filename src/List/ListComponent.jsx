import React, { useState } from "react";

const ListComponent = (props) => {
    return (
        <div className="bg-[#6f72b3] rounded-xl py-4 px-8 shadow-md">
            <h1 className="text-center text-white text-2xl font-bold">Users</h1>

            {props.dataInputs.map((user, i) => (
                <p key={i} className="bg-[#23243f] text-white py-1 rounded pl-3 my-2">
                    {user.name}, {user.age} Years old
                </p>
            ))}
        </div>
    );
};

export default ListComponent;
