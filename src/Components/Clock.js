import React from "react";

const Clock = ({date}) => {

    return(
        <div>
            <h2>It is {date.toLocaleString()}.</h2>
        </div>
    )

}

export default Clock