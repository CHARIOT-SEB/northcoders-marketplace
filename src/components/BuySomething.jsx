import { useEffect, useState } from 'react';

const BuySomething = ({ setBasket, basket }) => {
  const [items, setItems] = useState([]);
  const [searchBy, setSearchBy] = useState('Show All');
  const [categories, setCategories] = useState([]);

  let getRequest;

  if (searchBy === 'Show All') {
    getRequest = `https://nc-marketplace.herokuapp.com/api/items`;
  } else {
    getRequest = `https://nc-marketplace.herokuapp.com/api/items?category_name=${searchBy}`;
  }
  useEffect(() => {
    fetch(`https://nc-marketplace.herokuapp.com/api/categories`)
      .then((response) => response.json())
      .then((body) => {
        let array = body.categories;
        setCategories(array);
      });
  }, [categories]);

  useEffect(() => {
    fetch(getRequest)
      .then((response) => response.json())
      .then((body) => {
        let array = body.items;
        setItems(array);
      });
  }, [searchBy, getRequest]);

  const basketAdder = (item) => {
    setBasket((currentBasket) => {
      const newBasket = [...currentBasket];
      newBasket.push(item);
      return newBasket;
    });
  };
  return (
    <div>
      <form>
        <select onChange={(event) => setSearchBy(event.target.value)}>
          <option value="Show All">Show All</option>
          {categories.map((category) => {
            return (
              <option
                key={category.category_name}
                value={category.category_name}
              >
                {category.category_name}
              </option>
            );
          })}
        </select>
      </form>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <h2>{item.item_name}</h2>
              <img
                className="itemPic"
                src={item.img_url}
                alt={item.item_name}
              />
              <br />
              {item.price}
              <br />
              {item.category_name}
              <button onClick={() => basketAdder(item)}>Add To Basket</button>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
};

export default BuySomething;
