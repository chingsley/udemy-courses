import React, { useState } from 'react';
import News from './news';
import Tasks from './Tasks';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = (event) => {
    event.preventDefault();
    setUserQuery(event.target.value);
    console.log(userQuery);
    // console.log({ userQuery, 'event.target.value': event.target.value });
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };
  return (
    <div className='App'>
      <h1>{userQuery || 'Hello Kingsley'}</h1>
      <form className='form' onSubmit={searchQuery}>
        <input type='text' onChange={updateUserQuery} value={userQuery} />
        <button onClick={searchQuery}>Search</button>
      </form>
      <hr />
      <Tasks />
      <hr />
      <News />
    </div>
  );
}

export default App;
