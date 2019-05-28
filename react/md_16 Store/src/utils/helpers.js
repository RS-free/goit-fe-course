export const checkSum = arr => {
  const sum = Number(
    arr.reduce((acc, el) => acc + el.count * el.cost, 0).toFixed(2),
  );
  const itemsCount = arr.reduce((acc, el) => acc + el.count, 0);
  return {
    sum,
    itemsCount,
  };
};

export const a = () => {};
