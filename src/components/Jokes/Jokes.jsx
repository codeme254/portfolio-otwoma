import React from 'react';
import Joke from './Joke';
import Heading from '../Heading/Heading';
import Carousel from 'react-elastic-carousel';




const Jokes = () => {
    return(
        <section className='jokes-section'>
            <Heading title="jokes" subTitle="let's take a break and build a smile" />
            <div className="jokes__container">
            <Carousel itemsToShow={2}>
                <Joke joke="guess what is a joke" punchline="Anything that makes you laugh" rating={3} />
                <Joke joke="guess what is a joke 2" punchline="Anything that makes you laugh" rating={3} />
                <Joke joke="guess what is a joke 3" punchline="Anything that makes you laugh" rating={3} />
                <Joke joke="guess what is a joke 4" punchline="Anything that makes you laugh" rating={3} />
                <Joke joke="guess what is a joke5" punchline="Anything that makes you laugh" rating={3} />
            </Carousel>
            { console.log(Carousel)}
            </div>
        </section>
    )
}

export default Jokes;