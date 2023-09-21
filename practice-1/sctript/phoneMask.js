const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function() {
  const cleanedValue = this.value.replace(/\D/g, '');
  
  let formattedValue = `+${cleanedValue[0] || ''}`;
  if (cleanedValue.length > 1) {
    formattedValue += ` ${cleanedValue.slice(1, 4)}`;
  }
  if (cleanedValue.length > 4) {
    formattedValue += ` ${cleanedValue.slice(4, 7)}`;
  }
  if (cleanedValue.length > 7) {
    formattedValue += `-${cleanedValue.slice(7, 9)}`;
  }
  if (cleanedValue.length > 9) {
    formattedValue += `-${cleanedValue.slice(9, 11)}`;
  }

  this.value = formattedValue;
});