function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

let getAllProductList = () => {
	let products = JSON.parse(jsonProductList).products.product;
	

	// Get Total Products
	let totalProductsCount = products.length;
	document.getElementById("total-product-categories-count").innerHTML = totalProductsCount;

	// Get All Products Categories
	var productCategories = new Array();
	products.forEach(function (product) {
		product.categories.category.forEach(function(category){
			productCategories.push(category);
		})		
	});

	// Get Unique Product Category Array
	var productCategoryUnique = productCategories.filter(onlyUnique);
	productCategoryUnique.sort();

	// Printing Product Categories
	for(const value of productCategoryUnique){
		const div = document.createElement('div');
		div.innerHTML = `<li data-filter=".filter-${value.toLowerCase()}" style="margin: 0px; padding: 0 3px 5px 0; font-weight: 200;">${value} </li><small style="color: #aaaaaa;">(${countOccurrences(productCategories, value)})</small><br>`;
		document.getElementById("product-filter").appendChild(div);
	}

	// Printing All Products
	for(const product of products){
		const div = document.createElement('div');
		var prodCategories = new Array();
		for(const category of product.categories.category){
			prodCategories.push("filter-"+category.toLowerCase());
		}
		div.className = "col-lg-4 col-md-6 portfolio-wrap "+prodCategories.join(" ");
		div.innerHTML = `
		<span><center>${product.name}</center></span>
		<div class="portfolio-item">
			<img src="assets/img/products/${product.images.image[0]}" class="img-fluid" alt="${product.name}">
			<div class="portfolio-info">
				<h3>${product.name}</h3>
				<div>
					<a href="product-details.html?id=${product.id}" title="Portfolio Details"><i class="bx bx-search"></i></a>
				</div>
			</div>
		</div>
		`;
		document.getElementById('product-list').appendChild(div);
	}
}

getAllProductList();


// let readXmlFile = (file) => {
// 	fetch('assets/js/product-list.xml')
//   .then(response => response.text())
//   .then(data => {

// 		// for(var i=0;i<2;i++){
// 		// 	const div = document.createElement('div');
// 		// 	div.className = "col-lg-3 col-md-3 portfolio-wrap filter-app";
// 		// 	div.innerHTML = `
// 		// 	<div class="col-lg-4 col-md-6 portfolio-wrap filter-app">
// 		// 		<div class="portfolio-item">
// 		// 			<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
// 		// 			<div class="portfolio-info">
// 		// 				<h3>App 1</h3>
// 		// 				<div>
// 		// 					<a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
// 		// 					<a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
// 		// 				</div>
// 		// 			</div>
// 		// 		</div>
// 		// 	</div>
// 		// 	`;

// 		// 	document.getElementById('product-list').appendChild(div);
// 		// }

// 		return 2;
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	});
	
// }

// let xmlProductList = readXmlFile("product-list.xml");
// console.log(xmlProductList)

// for(var i=0;i<xmlProductList;i++){
// 	const div = document.createElement('div');
// 	div.className = "col-lg-3 col-md-3 portfolio-wrap filter-app";
// 	div.innerHTML = `
// 	<div class="col-lg-4 col-md-6 portfolio-wrap filter-app">
// 		<div class="portfolio-item">
// 			<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
// 			<div class="portfolio-info">
// 				<h3>App 1</h3>
// 				<div>
// 					<a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
// 					<a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	`;

// 	document.getElementById('product-list').appendChild(div);
// }


// async function fetchText() {
// 	let response = await fetch('assets/js/product-list.xml');
// 	let data = await response.text();
// 	console.log(data);

	
// }

// fetchText();


// for(var i=0;i<4;i++){
// 	const div = document.createElement('div');
// 	div.className = "col-lg-4 col-md-4 portfolio-wrap filter-app";
// 	div.innerHTML = `<div class="portfolio-item">
	
// 	<div class="portfolio-info">
// 		<h3>App 1</h3>
// 		<div>
// 			<a href="assets/img/products/backup/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
// 			<a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
// 		</div>
// 	</div>
// </div>`;

// document.getElementById('product-list').appendChild(div);
// }