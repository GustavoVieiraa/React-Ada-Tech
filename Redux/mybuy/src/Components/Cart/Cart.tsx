import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { FaTrash } from "react-icons/fa";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  function removeProductItemToCart(product: Product) {
    dispatch(removeProduct(product));
  }

  const totalValue = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => removeProductItemToCart(product)}>
              <FaTrash />
            </button>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.FooterTotal>
        <S.CartTotal>Total: ${Number(totalValue).toFixed(2)}</S.CartTotal>
      </S.FooterTotal>
    </S.Container>
  );
};
