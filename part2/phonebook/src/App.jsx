import { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Notification from "./components/Notification";

import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]); // persons state
  const [newName, setNewName] = useState(""); // newName state
  const [newNumber, setNewNumber] = useState(""); // newNumber state
  const [searchTerm, setSearchTerm] = useState(""); // search term state
  const [errorMessage, setErrorMessage] = useState(null); // errorMessage state

  // Fetching initial data
  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

  // Handling name change event
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Handling number change event
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // Handling search change event
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Adding person to list
  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    // Check if person exists
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook. Replace the old number with a new one?`
      );

      if (existingPerson && !existingPerson.deleted) {
        // Rest of the code...
      }

      // Update person if user confirms
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        personService
          .update(existingPerson.id, updatedPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
              )
            );

            // Reset form and notify of successful update
            setNewName("");
            setNewNumber("");
            setErrorMessage(
              `Number for ${updatedPerson.name} updated successfully.`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setErrorMessage(
              `Information of ${updatedPerson.name} has already been removed from server.`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(
              persons.filter((person) => person.id !== updatedPerson.id)
            );
            console.log(error);
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService
        .create(newPerson)
        .then((createdPerson) => {
          setPersons(persons.concat(createdPerson));
          setNewName("");
          setNewNumber("");

          // Notify of successful addition
          setErrorMessage(`${createdPerson.name} added successfully.`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Filter persons based on search term
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render App
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <SearchFilter
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3 className="filter">Numbers</h3>
      <PersonList persons={filteredPersons} setPersons={setPersons} />
    </div>
  );
};

export default App;
