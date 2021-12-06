import React, {useEffect, useState} from 'react';
export const useCalculate = () => {
  const [contador, setContador] = useState(0);

  const [change, setChange] = useState(false);

  const handleChange = (number) => {
    setContador(contador + number);
  };

  const handleChangeTrue = () => {
    setChange(!change);
  };

  useEffect(() => {
    setContador(contador + 5);
  }, [change]);

  return {
    contador,
    handleChange,
    handleChangeTrue,
  };
};
