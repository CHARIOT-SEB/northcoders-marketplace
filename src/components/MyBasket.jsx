const MyBasket = (props) => {
  const { basket, setBasket } = props;

  console.log(props);
  let myBasket;
  if (basket.length === 0) {
    myBasket = 'your basket is empty!';
  } else {
    myBasket = 'basket has ' + basket.length + ' items inside';
  }

  const removeItem = (itemToRemove) => {
    // console.log(basket);
    setBasket((currentBasket) => {
      const newBasket = [...currentBasket];
      const result = newBasket.filter((basketItem) => {
        console.log(newBasket);
        return basketItem.item_id !== itemToRemove.item_id;
      });
      return result;
    });
  };

  return (
    <div>
      <p>{myBasket}</p>
      <ul>
        {basket.map((item) => {
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
              <button onClick={() => removeItem(item)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyBasket;
