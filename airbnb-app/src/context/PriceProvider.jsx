import { createContext, useState } from 'react';
import { MIN_PRICE, MAX_PRICE } from '@/constants/priceText';

const PriceContext = createContext({});

function PriceProvider({ children }) {
  const [min, setMin] = useState(MIN_PRICE);
  const [max, setMax] = useState(MAX_PRICE);

  const gap = MIN_PRICE * 5;

  const calcLimit = (num, gap) => {
    return Number(num) + Number(gap);
  };

  const updateMin = ({ target }) => {
    if (Number(target.value) >= calcLimit(max, -1 * gap)) return;
    setMin(target.value);
  };

  const updateMax = ({ target }) => {
    if (Number(target.value) <= calcLimit(min, gap)) return;
    setMax(target.value);
  };

  return <PriceContext.Provider value={{ min, max, updateMin, updateMax }}>{children}</PriceContext.Provider>;
}

export { PriceContext, PriceProvider };
