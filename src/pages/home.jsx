import React, { useEffect, useState } from 'react';
import { getAllMemes } from '../api/memes';
import Cards from '../components/card';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="row">
      {data.map((el) => (
        <Cards key={el.id} img={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default Home;
