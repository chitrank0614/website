function initialize() {
	displayProducts();
}
async function displayProducts() {
	response = await makeAsyncGetRequest('get-all-products/');
	content = document.getElementById('content');
	finalText = '';
	response = response.result;
	for (x in response) {
		finalText +=
			'<a href="product.html?productID=' + response[x].ProductID + '">\n';
		finalText += '<div class="box">\n';
		finalText += '<div class="imgBx">\n';
		finalText += '<img src="' + response[x].ImageURLs[0] + '" alt="">\n';
		finalText += '</div>\n';
		finalText += '<div class="text">\n';
		finalText += '<h3>' + response[x].Name + '</h3>\n';
		finalText += '</div>\n';
		finalText += '</div>\n';
		finalText += '</a>\n\n';
	}
	console.log(finalText);
	content.innerHTML = finalText;
}
