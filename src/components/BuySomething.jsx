import { useEffect, useState } from 'react';

const BuySomething = () => {
  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(userInput);
    setUserInput('');
  };

  const getItemsForSale = useEffect(() => {
    fetch('https://nc-marketplace.herokuapp.com/api/items')
      .then((response) => response.json())
      .then((body) =>{
        let array = body.items
        setItems(array)});
  },[searchTerm]);

  console.log(items)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Search for an item to buy! </label>
        <input
          type="text"
          value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {items.map((item) => { 
          return <li key={item.item_id}>
            <h2>{item.item_name}</h2>
            <img src={item.img_url}/><br/>
            {item.price}
            </li>
        })};
      </ul>
    </div>
  );
};

export default BuySomething;
