import personService from "../services/personService";

const PersonList = ({ persons }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          // Update the local state after successful deletion
          setns(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id, person.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
