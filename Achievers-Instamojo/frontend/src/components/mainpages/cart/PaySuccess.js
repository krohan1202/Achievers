import React from "react";

function PaySuccess() {
    return(
        <div className="ach__success">
            <h1 className="ach__success--heading">Your Payment was successful 🎉</h1>
            <p className="ach__success--thankYou">Thanks for buying from us. Hope to see you soon!</p>
            <a href="/" className="ach__success--redirect">Back to Home Page</a>
        </div>
    )
}

export default PaySuccess;