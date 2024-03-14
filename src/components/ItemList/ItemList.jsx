/* eslint-disable react/prop-types */
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({
  data = [],
  wishlist= [],
  addItemToCart,
  toggleWishlistById,
}) {
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
