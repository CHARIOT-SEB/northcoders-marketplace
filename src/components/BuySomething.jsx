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
      .then((body) => console.log(body));
  });

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
      <ol>
        {/* {items.map((item) => { return
          (<li>{item.item_name}</li>);
        })} */}
      </ol>
    </div>
  );
};

export default BuySomething;
