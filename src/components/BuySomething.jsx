import { useEffect, useState } from 'react';

const BuySomething = () => {

  const [items, setItems] = useState([]);       
  const [searchBy, setSearchBy] = useState('Electronics');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  const getItemsForSale = useEffect(() => {
    fetch(`https://nc-marketplace.herokuapp.com/api/items?category_name=${searchBy}`)
      .then((response) => response.json())
      .then((body) =>{
        let array = body.items
        setItems(array)});
  },[searchBy]);

  console.log(items)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={(event)=> setSearchBy(event.target.value)}>
          <option value="Electronics">Electronics</option>
          <option value ="Household">Household</option>
          <option value="Clothing">Clothing</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <ul>
        {items.map((item) => { 
          return <li key={item.item_id}>
            <h2>{item.item_name}</h2>
            <img src={item.img_url}/><br/>
            {item.price}<br/>
            {item.category_name}
            </li>
        })};
      </ul>
    </div>
  );
};

export default BuySomething;
