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

// TODO - - - 
// Let Product Search
// let forms = document.querySelectorAll('.product-search');
// forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();

// 	  console.log("Hello World");
// 	  // Set Filter to All
// 	  // Set Custom Filter
//     });
//   });
