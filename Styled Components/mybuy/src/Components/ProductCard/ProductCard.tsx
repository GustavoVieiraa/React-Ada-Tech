import * as S from "./styles";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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

interface ProductCardsProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardsProps> = ({ product }) => {
  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceWrapper>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({product.rating.rate})
        </S.Review>
        <S.Price>{`$${product.price}`}</S.Price>
      </S.ReviewPriceWrapper>
      <S.AddToCardButtonWrapper>
        <S.AddToCardButton>
          Adicionar ao carrinho
          <FaCartShopping />
        </S.AddToCardButton>
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
