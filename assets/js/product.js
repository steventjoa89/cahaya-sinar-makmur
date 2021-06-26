// IMPORTANT NOTE
// IMAGE SIZE SHOULD BE 800x600

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(productList,"text/xml");

// Column Setting
let colSpan = 3;

// Product Sorting
let productCount = xmlDoc.getElementsByTagName("product").length;
let prodId = new Array(), prodName = new Array(), prodCategory = new Array(), prodImageUrl = new Array(), prodOrigin = new Array(), prodWeight = new Array();
for(var i=0;i<productCount;i++){
	// PRODUCT IMAGE
	prodImageUrl.push(xmlDoc.getElementsByTagName("images")[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);

	// PRODUCT DETAILS
	prodId.push(xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue);
	prodName.push(xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue);
	prodCategory.push(xmlDoc.getElementsByTagName("category")[i].childNodes[0].nodeValue);
	prodOrigin.push(xmlDoc.getElementsByTagName("origin")[i].childNodes[0].nodeValue);
	prodWeight.push(xmlDoc.getElementsByTagName("weight")[i].childNodes[0].nodeValue);
}
// End of Product Sorting
let newProdName = prodName.slice(); newProdName.sort();

// Display Product
const isSameProdName = (element) => element == newProdName[i];
for(var i=0;i<productCount;i++){
	let index = prodName.indexOf(newProdName[i]);

	document.getElementById("product-list").innerHTML += `
	<div class="col-lg-${colSpan} col-md-6 portfolio-wrap filter-${prodCategory[index].replace(" ", "-").toLowerCase()}">
		<h4 class="title" style="text-align: center;">${newProdName[i]}</h4>
		<div class="portfolio-item">
			<img src="`+prodImageUrl[index]+`" class="img-fluid" alt="${newProdName[i]}">
			<div class="portfolio-info">
				<h3>${prodOrigin[i]}<br>${prodWeight[index]} KG</h3>
				<div><a href="product-details.html?id=${prodId[index]}" title="${newProdName[i]} Details"><i class="bx bx-detail"></i></a></div>
			</div>
		</div>
	</div>
	`;
}
// End of display product

// Product Filter
var productCategory = new Array();
for(var i=0;i<xmlDoc.getElementsByTagName("category").length;i++){
	productCategory.push(xmlDoc.getElementsByTagName("category")[i].childNodes[0].nodeValue.trim().toLowerCase());
}

// Get Unique Array
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var productCategoryUnique = productCategory.filter(onlyUnique);
productCategoryUnique.sort();

let titleCase = (str) => {
	str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
var productFilter = "";
for(var i=0;i<productCategoryUnique.length;i++){
	productFilter += `<li data-filter=".filter-${productCategoryUnique[i].replace(" ", "-").toLowerCase()}">${titleCase(productCategoryUnique[i])}</li>`;
}

document.getElementById("product-filter").innerHTML = 
`
<ul id="portfolio-flters">
	<li data-filter="*" class="filter-active">All</li>
	${productFilter}
</ul>
`;