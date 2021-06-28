let parser = new DOMParser();
let xmlDoc = parser.parseFromString(productList,"text/xml");

let productCount = xmlDoc.getElementsByTagName("product").length;
let prodId = new URLSearchParams(window.location.search).get("id");

for(var i=0;i<productCount;i++){
	if(prodId == xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue){
		// PRODUCT IMAGE
		var prodImage = "";
		for(var j=0;j<xmlDoc.getElementsByTagName("images")[i].getElementsByTagName("image").length;j++){
			prodImage += `
			<div class="swiper-slide">
				<img src="${xmlDoc.getElementsByTagName("images")[i].getElementsByTagName("image")[j].childNodes[0].nodeValue}" alt="">
			</div>
			`
		}

		document.getElementById("product-image").innerHTML = prodImage;

		// PRODUCT INFORMATION
		document.getElementById("product-name").innerHTML = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
		document.getElementById("product-category").innerHTML = xmlDoc.getElementsByTagName("category")[i].childNodes[0].nodeValue;
		document.getElementById("product-formula").innerHTML = xmlDoc.getElementsByTagName("formula")[i].childNodes[0].nodeValue;
		document.getElementById("product-application").innerHTML = xmlDoc.getElementsByTagName("application")[i].childNodes[0].nodeValue;
		document.getElementById("product-purity").innerHTML = xmlDoc.getElementsByTagName("purity")[i].childNodes[0].nodeValue;
		document.getElementById("product-brand").innerHTML = xmlDoc.getElementsByTagName("brand")[i].childNodes[0].nodeValue;
		document.getElementById("product-origin").innerHTML = xmlDoc.getElementsByTagName("origin")[i].childNodes[0].nodeValue;
		document.getElementById("product-package").innerHTML = xmlDoc.getElementsByTagName("package")[i].childNodes[0].nodeValue;
		document.getElementById("product-weight").innerHTML = xmlDoc.getElementsByTagName("weight")[i].childNodes[0].nodeValue;
		document.getElementById("product-color").innerHTML = xmlDoc.getElementsByTagName("color")[i].childNodes[0].nodeValue;
		document.getElementById("product-appearance").innerHTML = xmlDoc.getElementsByTagName("appearance")[i].childNodes[0].nodeValue;
		
		// PRICE
		let getProdPrice = (prodUsdPrice) => {
			let numWithThousandSep = (x) => {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			}

			return numWithThousandSep(Math.ceil((prodUsdPrice * usdIdrRate * xmlDoc.getElementsByTagName("weight")[i].childNodes[0].nodeValue)*(1+myRate)));
		}
		document.getElementById("product-price").innerHTML = "Rp " + getProdPrice(xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue);

		// PRODUCT DESCRIPTION
		console.log();
		document.getElementById("product-description").innerHTML = xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue.trim();
		break;
	}
}

