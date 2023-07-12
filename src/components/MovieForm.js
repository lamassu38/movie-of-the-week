import React, { useState } from 'react';

const MovieForm = ({ handleAddButtonClick }) => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [description, setDescription] = useState('');

    const handleName = e => {
        setName(e.target.value);
    };

    const handleYear = e => {
        setYear(e.target.value);
    };

    const handleDirector = e => {
        setDirector(e.target.value);
    };
    const handleDescription = e => {
        setDescription(e.target.value);
    };
    const handleFormSubmit = e => {
        e.preventDefault();
        handleAddButtonClick(name, year, director, description);
        setName('');
        setYear('');
        setDirector('');
        setDescription('');
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <p>Name:</p>
            <input name='name'onChange={handleName} value={name} />
            <p>Year:</p>
            <input name='year'onChange={handleYear} value={year} />
            <p>Director:</p>
            <input name='director' onChange={handleDirector} value={director} />
            <p>Description:</p>
            <input name='description' onChange={handleDescription} value={description} />
            <button type='submit'>Add movie</button>
            </form>
        </div>
    );
};

export default MovieForm;