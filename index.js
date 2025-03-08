


fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    const bitcoinPrice = data.bitcoin.usd;
    document.getElementById('bitcoin-price').textContent = `US$ ${bitcoinPrice}.-`;
  });