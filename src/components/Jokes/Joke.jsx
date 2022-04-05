import React from "react";
// import { Building } from "../icons/Icons";

// const injectStars = (number) => {
//     const allStars = []
//     for(let i = 0; i < number; i++){
//         allStars.push(i)
//     }
//     return allStars
// }

const Joke = ({ joke, punchline, rating}) => {
    return(
        <div className="joke">
            <p className="joke__joke-main">{joke}</p>
            <p className="joke__joke-sub">{punchline}</p>
            {/* <div className="joke__stars">
                {
                    injectStars().forEach((current) => console.log(current))
                }
            </div> */}
        </div>
    )
}

export default Joke;