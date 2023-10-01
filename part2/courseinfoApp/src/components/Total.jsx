const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>
        <strong>total of {totalExercises} exercises</strong>
      </p>
    </div>
  );
};

export default Total;
