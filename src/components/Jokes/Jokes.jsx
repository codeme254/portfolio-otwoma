import React from "react";
import Joke from "./Joke";
import Heading from "../Heading/Heading";
import Carousel from "react-elastic-carousel";

const Jokes = () => {
  const jokes = [
    {
      jokeMain: "Are you a computer keyboard?",
      jokeAnswer: "Because you're my type",
    },
    {
      jokeMain: "Is your name Google?",
      jokeAnswer: "Because you have everything I've been searching for",
    },
    {
      jokeMain: "Are you a double?",
      jokeAnswer: "The thought of you always floats inside my head",
    },
    {
      jokeMain: "Can you be my private variable?",
      jokeAnswer: "I want to be the only one with access to you",
    },
    {
      jokeMain: "How do you tell HTML from HTML5?",
      jokeAnswer:
        "Try it out in Internet Explorer. Did it work? No? It’s HTML5",
    },
    {
      jokeMain:
        "A programmer's wife tells him: \"While you're at the store, get some milk\".",
      jokeAnswer: "He never comes back.",
    },
    {
      jokeMain: "Why did the programmer leave his job ?",
      jokeAnswer: "Because he couldn’t hack it.",
    },
    {
      jokeMain: "What do programmers do when they're hungry?",
      jokeAnswer: "They grab a byte",
    },
    {
      jokeMain: "Why do programmers like dark mode?",
      jokeAnswer: "Because light attracts bugs",
    },
    {
      jokeMain: "How does a programmer get cooler in the summer?",
      jokeAnswer: "He opens Windows",
    },
    {
      jokeMain: "Why do programmers wear glasses?",
      jokeAnswer: "Because they can't C#",
    },
  ];
  return (
    <section className="jokes-section">
      <Heading title="jokes" subTitle="let's take a break and build a smile" />
      <div className="jokes__container">
        <Carousel itemsToShow={2}>
          {jokes.map((el, i) => (
            <Joke joke={el.jokeMain} punchline={el.jokeAnswer} key={i} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Jokes;
