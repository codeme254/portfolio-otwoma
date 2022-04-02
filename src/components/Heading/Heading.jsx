import React from 'react';

const Heading = ({ title, subTitle }) => {
    return(
        <h1 className="heading">
            <span className="heading__title">{title}</span>
            <span className="heading__subtitle">{subTitle}</span>
        </h1>
    )
}

export default Heading