import { useState } from "react";

const Dispaly = (props) => <div>{props.heading}</div>;

const Button = (props) => {
  return <button onClick={props.feedback}> {props.text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total, average, percentageGood }) => {
  if (total > 0) {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={percentageGood + " %"} />
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  );
};

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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percentageGood={percentageGood}
      />
    </div>
  );
};

export default App;
