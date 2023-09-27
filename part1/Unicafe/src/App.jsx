import { useState } from "react";

const Dispaly = (props) => <div>{props.heading}</div>;

const Button = (props) => {
  return <button onClick={props.feedback}> {props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const heading = "give feedback";

  const goodFeedback = () => {
    setGood(good + 1);
  };

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const badFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>
        <Dispaly heading={heading} />
      </h1>
      <Button feedback={goodFeedback} text="good" />
      <Button feedback={neutralFeedback} text="neutral" />
      <Button feedback={badFeedback} text="bad" />

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
