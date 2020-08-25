import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import NameAndNumber from './NameAndNumber.jsx';
import Form from './Form';
import Filter from './Filter.jsx';

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '335-66-76'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [findNames, setFindNames] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const nameArray = [{
      name: newName,
      number: newNumber,
    }];
    const existPerson = persons.find(value => value.name === newName)
    if (existPerson) alert(`${newName} is already added to phonebook`);
    else setPersons(persons.concat(nameArray)); 
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFindNameChange = (event) => {
    setFindNames(event.target.value)
  }

  const isNameInArray = () => {
    const arrayOfFoundNames = persons.filter(value => value.name.toLowerCase().indexOf(findNames.toLowerCase())+1)
    return arrayOfFoundNames;
  }
  let filteredPersons = isNameInArray();

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter findNames={findNames} handleFindNameChange={handleFindNameChange}/>
      <h2>add a new</h2>
        <Form newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) =>
          <NameAndNumber key={person.name} name={person.name} number={person.number} />)}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
