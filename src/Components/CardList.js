import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map(robot=>{
                    return (
                        <Card 
                            name={robot.name} 
                            email={robot.email} 
                            key={robot.id} 
                            id={robot.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList