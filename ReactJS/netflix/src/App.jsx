import React from 'react';
import Card from './card';
import Sdata from './Sdata';

const App = () => {
  return (
    <>
      <h1 className='Heading'>The Favoriot Shows</h1>
      <div class="py-2 container my-4" id="card-container">
        {Sdata.map((val) => (
          <Card 
            key={val.id}
            imgsrc={val.imgsrc}
            Sname={val.Sname}
            title={val.title}
            link={val.link}
          />
        ))}
      </div>
    </>
  );
};

export default App;
