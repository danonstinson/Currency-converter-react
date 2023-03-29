import React from "react";

const Result = ({ result }) => (
    < p className="form__text">
        Calculated value:
        <strong>
            {result}
        </strong>
    </p >
);

export default Result;