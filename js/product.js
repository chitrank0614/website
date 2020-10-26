function initialize() {
	getProduct();
}

async function getProduct() {
	var url = window.location.href;
	url = new URL(url);
	productID = url.searchParams.get('productID');

	response = await makeAsyncGetRequest('get-product/' + productID + '/');
	response = response.result;
	displayProduct(response);
}

function displayProduct(response) {
	console.log(response);
	document.getElementById('productName').innerText = response.Name;
	imagesText = '';
	for (x in response.ImageURLs) {
		imagesText += '<img src="' + response.ImageURLs[x] + '" alt="" />';
	}
	// console.log(imagesText);
	document.getElementById('images').innerHTML = imagesText;
	document.getElementById('specifications').innerText =
		'Specifications \n' + response.Specifications;
	document.getElementById('availability').innerText = response.Availability;
	document.getElementById('price').innerText = 'Rs. ' + response.Price;
}
