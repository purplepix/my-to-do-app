import React from 'react';

const Ninjas = ({ninjas}) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 0 ? (
      <div className="ninja" key={ninja.id}>
        <div >Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Color: {ninja.color}</div>
        <hr/>
      </div>
    ) : null;
  });

  return (
    <div className="ninjaList">
      {ninjaList}
    </div>
  );
}

export default Ninjas;
