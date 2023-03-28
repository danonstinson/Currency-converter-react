import React from "react";

const Result = ({ result }) => (
    < p className="form__text">
        Calculated value:
        <strong>
            {result.targetAmount.toFixed(4)}
        </strong>
    </p >
);

export default Result;