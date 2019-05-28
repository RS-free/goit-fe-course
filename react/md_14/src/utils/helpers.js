export const checkSum = arr => {
  const sum = Number.parseFloat(
    arr.reduce((acc, el) => acc + el.count * el.cost, 0),
  );
  const itemsCount = arr.reduce((acc, el) => acc + el.count, 0);
  return {
    sum,
    itemsCount,
  };
};

export const a = () => {};
