import { faker } from '@faker-js/faker';
import React, { useState } from 'react';


function App() {
  const fixedProductList = Array.from({ length: 100 }).map(() => ({
    name: faker.commerce.product(),
    price: faker.commerce.price(50, 2000)
  }));

  const [productList, setProductList] = useState([...fixedProductList]);

  const searchHandler = (value:string)=>{
    const filteredProductList = fixedProductList.filter(p=>p.name.includes(value));
    setProductList([...filteredProductList])
  }

  return (
    <React.Fragment>
      <label>Search: </label>
      <input onChange={(e)=>searchHandler(e.target.value)} />
    <ul>
      {productList.map(p=>(<li>{`${p.name} -- ${p.price} USD`}</li>))}
    </ul>
    </React.Fragment>

  );
}

export default App;


