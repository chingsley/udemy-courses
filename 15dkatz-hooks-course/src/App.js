import React, { useState } from 'react';
import Gallery from './Gallery';
import News from './news';
import Tasks from './Tasks';

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = (event) => {
    event.preventDefault();
    setUserQuery(event.target.value);
    // // console.log(userQuery);
    // // console.log({ userQuery, 'event.target.value': event.target.value });
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
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
      <div>
        {showGallery ? <Gallery /> : null}{' '}
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <News />
    </div>
  );
}

export default App;
