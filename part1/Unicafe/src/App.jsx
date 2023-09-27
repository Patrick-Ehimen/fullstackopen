import { useState } from "react";

const Dispaly = (props) => <div>{props.heading}</div>;

const Button = (props) => {
  return <button onClick={props.feedback}> {props.text}</button>;
};

const Statistics = (props) => {};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentageGood, setPercentageGood] = useState(0);

  const heading = "give feedback";

  const goodFeedback = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    updateTotalAndAverage(updatedGood, bad, neutral);

    const updatedTotal = updatedGood + neutral + bad;
    setPercentageGood((updatedGood / updatedTotal) * 100);
  };

  const neutralFeedback = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    updateTotalAndAverage(good, updatedNeutral, bad);

    const updatedTotal = updatedNeutral + good + bad;
    setPercentageGood((good / updatedTotal) * 100);
  };

  const badFeedback = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    updateTotalAndAverage(good, neutral, updatedBad);

    const updatedTotal = updatedBad + good + neutral;
    setPercentageGood((good / updatedTotal) * 100);
  };

  const updateTotalAndAverage = (good, neutral, bad) => {
    const updatedTotal = good + neutral + bad;
    setTotal(updatedTotal);
    setAverage(updatedTotal ? (good - bad) / updatedTotal : 0);
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

      <p>all {total} </p>
      <p>average {average} </p>
      <p>positive {percentageGood} %</p>
    </div>
  );
};

export default App;
