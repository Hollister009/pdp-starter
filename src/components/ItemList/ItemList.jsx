import { useAppContext } from '../../context/appContext';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({ data = [] }) {
  const { wishlist, addItemToCart, toggleWishlistById } = useAppContext();
  return (
    <div className="grid">
      {data.map((item) => (
        <Item
          key={item.id}
          item={item}
          addItemToCart={addItemToCart}
          toggleWishlistById={toggleWishlistById}
          isWishlisted={wishlist.includes(item.id)}
        />
      ))}
    </div>
  );
}

export default ItemList;
