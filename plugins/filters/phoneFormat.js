export default (value) => {
  const [plusMark, ...numbers] = value;
  let phone;

  if (plusMark !== '+') {
    phone = [...`+${value}`];
  } else {
    phone = [...value];
  }

  phone.splice(phone.length - 2, 0, ' ');
  phone.splice(phone.length - 4, 0, ' ');
  phone.splice(phone.length - 7, 0, ' ');
  phone.splice(phone.length - 10, 0, ' ');
  phone.splice(phone.length - 14, 0, ' ');

  return phone.join('');
};
