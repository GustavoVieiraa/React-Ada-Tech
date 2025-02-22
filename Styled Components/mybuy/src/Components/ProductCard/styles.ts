import styled from "styled-components";

export const Card = styled.article`
  background-color: #fff;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(33, 33, 33, 0.55);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;

  min-height: 3rem;

  margin-top: 1rem;
`;

export const ReviewPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  color: cadetblue;
  transition: all 1s;
  font-size: 0.75rem;

  svg {
    color: violet;
    font-size: 1rem;
  }

  svg:hover > * {
    transition: all 0.2s;
    color: cadetblue;
  }
`;

export const Price = styled.strong`
  color: green;
`;

export const AddToCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  margin-top: 1rem;
`;

export const AddToCardButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: violet;
  color: #fefefe;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  justify-content: center;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    box-shadow: inset 0px 0px 0px 1px violet;
    background-color: white;
    color: violet;
  }
`;
