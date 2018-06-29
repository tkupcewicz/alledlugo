const priceClasses = {
  'listings': 'ecb7eff',
  'mainPrice': 'm-price',
  'horizontalList': '_07bcb_2-O4V _07bcb_2A6zP',
  'delivery': 'original-price _1pa4o',
  'discount': '_07bcb_2-O4V _07bcb_3AoIh ',
  'itemsKit': '_4795a692 _520a029f',
  'kitSumUp': 'defac815 _98dc940e f396bdb3',
  'sumUpBefore': '_98dc940e _74d596c8',
  'deliveryFrom': '_2SMFlpDz'
}

var hourRate = 8.5;

function convertPrice(textPrice) {

  var strippedPrice = textPrice.replace(/[^\d,]/g, '').replace(/,/g, '.');
  var priceFloat = parseFloat(strippedPrice);
  var priceInHours = priceFloat / hourRate;
  var days = Math.floor(priceInHours/24);
  var hours = priceInHours - days * 24;
  var minutes = Math.floor((hours - Math.floor(hours)) * 60);
  hours = Math.floor(hours);
  var finalTime = days + "d " + hours + "h " + minutes + "m";
  return finalTime;
}

function convertCollection(collection) {

  var priceToConvert;

  for (var i = 0, l = collection.length; i < l; i++) {
    priceToConvert = collection[i].innerText;
    if (priceToConvert) {
      console.log(convertPrice(priceToConvert));
      collection[i].innerHTML = convertPrice(priceToConvert);
    }
  }
}

for (var key in priceClasses) {
  prices = document.getElementsByClassName(priceClasses[key]);
  convertCollection(prices);
}
