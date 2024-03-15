function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

var allProductCategories = new Array();
var allProductUsages = new Array();
let products = JSON.parse(jsonProductList).products.product;

let getAllProductList = () => {
	console.log(products);
	products.forEach(function (product) {
		product.categories.category.forEach(function(category){
			allProductCategories.push(category.toLowerCase());
		})		
		if(product["usages"]){
			product.usages.usage.forEach(function(usage){
				allProductUsages.push(usage.toLowerCase());
			})	
		}
	});

	// Check first whether all or per category
	if(new URLSearchParams(window.location.search).get("category")!=null){			// if only display one category
		// Decode First
		let searchCategory = decodeURIComponent(new URLSearchParams(window.location.search).get("category"));
		displayProduct(searchCategory);
	}else{																																			// Display all
		displayProductCategoryHtml(productCategory);
		displayProductUsageHtml(productUsage);
		displayProductHtml(products);
	}
}

var productCategory = ['Food', 'Industrial', 'Solvent'];
var productUsage = ['Vinegar'];

let displayProduct = (category) => {
	console.log("category "+category)					// Category

	indexOf = (arr, q) => arr.findIndex(item => q.toLowerCase() === item.toLowerCase());
	if(indexOf(productCategory, category)!=-1){
		let singleCategory = new Array()
		singleCategory.push(productCategory[indexOf(productCategory, category)]);
		displayProductCategoryHtml(singleCategory, false);
		
		// TODO - klo blank countnya jgn di display -> cari yg categorynya food, dan masuk vinegar
		// cari food masuk categorynya apa aja -> trus display

		// for(const category of productCategory){
		// console.log(singleCategory)
		var singleUsageArr = new Array();
		for(const category of singleCategory){
			products.forEach(function (product) {
				if(category == product.categories.category){
					if(product['usages']){
						for(const usage of product.usages.usage){
							singleUsageArr.push(usage);
						}
					}
				}
			});
		}
		displayProductUsageHtml(Array.from(new Set(singleUsageArr)));

		const product = products.filter(product => product.categories.category.toString().toLowerCase().indexOf(category)>-1);
		console.log(product);

		displayProductHtml(product);
	}else{
		displayProductCategoryHtml(productCategory);
		displayProductUsageHtml(productUsage);
		displayProductHtml(products);
	}
}

let displayProductUsageHtml = (productUsage) => {
	let productUsageHtml = '';
	
	for(const usage of productUsage){
		productUsageHtml += `<li class="product-category" data-filter=".filter-${usage.toLowerCase()}">${usage} </li><small class="product-category-count">(${countOccurrences(allProductUsages, usage.toLowerCase())})</small><br>`;
	}
	document.getElementById("product-usage").innerHTML = productUsageHtml;

	console.log(productUsageHtml.trim().length);
	if(productUsageHtml.trim().length>0) document.getElementById("sidebar-usage").style.display  ='block'
}

let displayProductCategoryHtml = (productCategory, isShowAll = true) => {
	let productCategoryHtml = '';
	if(isShowAll) productCategoryHtml += `<li data-filter="*" class="filter-active product-category">All </li><small class="product-category-count">(${products.length})<br>`;

	let displayFilterActive = !isShowAll ? `class="filter-active"` : ``;
	
	for(const category of productCategory){
		productCategoryHtml += `<li class="product-category" data-filter=".filter-${category.toLowerCase()}" ${displayFilterActive}>${category} </li><small class="product-category-count">(${countOccurrences(allProductCategories, category.toLowerCase())})</small><br>`;
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

		if(product["usages"]){
			var prodUsages = new Array();
			for(const usage of product.usages.usage){
				prodUsages.push("filter-"+usage.toLowerCase())
			}
			div.className += ' '+prodUsages.join(" ");
		}

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