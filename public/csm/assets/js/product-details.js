function isProduct(product) {
    return product.id == new URLSearchParams(window.location.search).get("id");
}

let setValue = (value) => {
	const el = document.createElement('span');
	el.innerHTML = value;
	return el;
}

let setImageValue = (index, value, name) => {
	// console.log(`./assets/img/products/${value}`);
	document.getElementById(`product-image-${index}`).src = `./assets/img/products/${value}`;
	document.getElementById(`product-image-${index}`).alt = name;
}

let getProductDetail = () => {
	let products = JSON.parse(jsonProductList).products.product;
	let product = products.find(isProduct);

	// Images - Set Value to 2
	var index = 1;
	for(const value of product.images.image){
		setImageValue(index, value, product.name);
		index++;
	}

	let numWithThousandSep = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}

	// Product Details
	document.getElementById("product-name").appendChild(setValue(product.name));
	document.getElementById("product-category").appendChild(setValue(product.categories.category.sort().join(", ")));
	document.getElementById("product-purity").appendChild(setValue(product.purity));
	document.getElementById("product-chem-formula").appendChild(setValue(product.formula));
	document.getElementById("product-country").appendChild(setValue(product.country));
	document.getElementById("product-brand").appendChild(setValue(product.brand));
	document.getElementById("product-package").appendChild(setValue(product.package+` (${product.content} Kg)`));
	
	document.getElementById("product-grade").appendChild(setValue(product.grades.grade.sort().join(", ")));
	document.getElementById("product-appearance").appendChild(setValue(product.appearance));
	document.getElementById("product-color").appendChild(setValue(product.color));

	document.getElementById("product-moq").appendChild(setValue("1 "+product.package));

	
	var setPrice = (hideShow) => {
		if(hideShow){
			// check if price exists in json
			if(product["priceFrom"] && product["priceTo"]){		// Ada harga from to
				displayPrice(numWithThousandSep(`Rp ${product.priceFrom} - ${product.priceTo} / Package`));
			}else if(product["priceFrom"]){		// cman ada from
				displayPrice(numWithThousandSep(`<i>from</i> Rp ${product.priceFrom} / Package`));
			}

			function displayPrice(price){
				document.getElementById("product-price").appendChild(setValue(price));
				document.getElementById("li-product-price").style.display  ='block'
			}
		}
	}
	setPrice(false);							// Hide or Show Product Price

	document.getElementById("product-description").appendChild(setValue(product.description));
}

getProductDetail();