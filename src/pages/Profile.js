import React from 'react';
import AddPost from '../components/AddPost';
import CardView from '../components/Dequests/CardView';

const Home = () => (
  <div className="my-0 mx-auto">
    <div className="">
      <AddPost />
    </div>
    <div>
      <CardView />
      <CardView />
      <CardView />
    </div>
  </div>
);

export default Home;
