import React from "react";

const Result = ({ result }) => (
    <>
        < p className="form__text">
            Calculated value:
        </p >
        <p>
            <strong >
                {result.result} {result.currency}
            </strong>
        </p>
    </>
);

export default Result;