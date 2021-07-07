function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

var allProductCategories = new Array();
let products = JSON.parse(jsonProductList).products.product;

let getAllProductList = () => {
	console.log(products);
	products.forEach(function (product) {
		product.categories.category.forEach(function(category){
			allProductCategories.push(category.toLowerCase());
		})		
	});

	// Check first whether all or per category
	if(new URLSearchParams(window.location.search).get("category")!=null){			// if only display one category
		// Decode First
		let searchCategory = decodeURIComponent(new URLSearchParams(window.location.search).get("category"));
		displayProduct(searchCategory);
	}else{																																			// if display all
		displayProductCategoryHtml(productCategory);
		displayProductHtml(products);
	}
}

var productCategory = ['Food', 'Industrial', 'Solvent'];

let displayProduct = (category) => {
	console.log("category "+category)
	indexOf = (arr, q) => arr.findIndex(item => q.toLowerCase() === item.toLowerCase());
	
	if(indexOf(productCategory, category)!=-1){
		let singleCategory = new Array()
		singleCategory.push(productCategory[indexOf(productCategory, category)]);
		displayProductCategoryHtml(singleCategory, false);

		const product = products.filter(product => product.categories.category.toString().toLowerCase().indexOf(category)>-1);
		console.log(product);

		displayProductHtml(product);
	}else{
		displayProductCategoryHtml(productCategory);
		displayProductHtml(products);
	}
}

let displayProductCategoryHtml = (productCategory, isShowAll = true) => {
	let productCategoryHtml = '';
	if(isShowAll) productCategoryHtml += `<li data-filter="*" class="filter-active" style="margin: 0px; padding: 0 3px 5px 0; font-weight: 200;">All </li><small style="color: #aaaaaa;">(${products.length})<br>`;

	let displayFilterActive = !isShowAll ? `class="filter-active"` : ``;
	
	for(const category of productCategory){
		productCategoryHtml += `<li id="category-food" data-filter=".filter-${category.toLowerCase()}" ${displayFilterActive} style="margin: 0px; padding: 0 3px 5px 0; font-weight: 200;">${category} </li><small style="color: #aaaaaa;">(${countOccurrences(allProductCategories, category.toLowerCase())})</small><br>`;
	}
	document.getElementById("product-filter").innerHTML = productCategoryHtml;
}

let displayProductHtml = (products) => {
	console.log("printing all products");

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




	
	// div.className = "col-lg-4 col-md-6 portfolio-wrap "+'12345';
	// div.innerHTML = `
	// 	<span><center>12134</center></span>
	// 	<div class="portfolio-item">
	// 		<img src="assets/img/products/123" class="img-fluid" alt="123">
	// 		<div class="portfolio-info">
	// 			<h3>1234</h3>
	// 			<div>
	// 				<a href="product-details.html?id=123" title="Portfolio Details"><i class="bx bx-search"></i></a>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	`;
	// 	document.getElementById('product-list').appendChild(div);
}

getAllProductList();