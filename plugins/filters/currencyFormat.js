export default (value, currencySign = '$', currencySignPosition = 'left') => {
  if (value === undefined) {
    return '';
  }
  const valueStr = String(value);
  const valueArrReversed = [...valueStr].reverse();
  const charsCount = valueArrReversed.length;

  for (let i = charsCount; i > 0; i -= 1) {
    if ((i % 3) === 0 && i !== charsCount) {
      valueArrReversed.splice(i, 0, '.');
    }
  }

  const price = valueArrReversed.reverse().join('');

  if (currencySignPosition === 'rigth') {
    return price + currencySign;
  }
  return currencySign + price;
};
