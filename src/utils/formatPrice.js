// 6.5 becomes "$6.50"
function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

export default formatPrice;
