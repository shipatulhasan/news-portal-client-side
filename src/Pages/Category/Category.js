import React from 'react';
import { useLoaderData } from 'react-router-dom';

import NewsSummeryCard from '../Shared/SingleNews/NewsSummeryCard';

const Category = () => {
   const allNews = useLoaderData()
  
  
    return (
        <div>
            
            {
                allNews.length === 0 && <h2>No data found</h2>
            }
           
            {
                allNews.map(news=><NewsSummeryCard key={news._id} news={news} ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;