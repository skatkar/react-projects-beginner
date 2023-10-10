import Question from "./Question";
import classes from "./Accordian.module.css";

const Accordian = () => {
  const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quifacere in labore maxime, assumenda iure sed tenetur alias omniseveniet similique laborum, neque porro unde ducimus officiis animivitae! Quidem",
    },
    {
      id: 2,
      title: "How much does it cost?",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quifacere in labore maxime, assumenda iure sed tenetur alias omniseveniet similique laborum, neque porro unde ducimus officiis animivitae! Quidem",
    },
    {
      id: 3,
      title: "When can I get it?",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quifacere in labore maxime, assumenda iure sed tenetur alias omniseveniet similique laborum, neque porro unde ducimus officiis animivitae! Quidem",
    },
  ];

  return (
    <>
      <h2>Project 2: FAQ/Accordion</h2>
      <div class={classes.container}>
        <h2>Frequently Asked Questions</h2>
        <div class={classes.questions}>
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              description={question.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordian;
