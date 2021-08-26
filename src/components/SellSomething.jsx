import {useState} from 'react';

const SellSomething = () => {
  const [itemsForSale, setItemsForSale] = useState([{},{},{}]);
  const [addItemComponant, setAddItemComponant] = useState(false)


  return (
    <div>
      <p>sell some things here!</p>
    </div>
  );
};

export default SellSomething;