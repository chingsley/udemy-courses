import React from 'react';
import { useFetch } from './hooks';

function News() {
  const news = useFetch(
    'https://inshortsapi.vercel.app/news?category=science',
    {}
  );

  console.log(news);

  return (
    <div>
      <h3>News</h3>
      <p>
        Category: <em>{news.category}</em>
      </p>
      {news.data.map((newsItem, index) => (
        <div key={index}>
          <p>
            Author: <em>{newsItem.author}</em>
          </p>
        </div>
      ))}
    </div>
  );
}

export default News;
