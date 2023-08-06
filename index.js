fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
		console.log(data.products);
		const products = data.products;

		function showCards () {
			const wrapper = document.querySelector('.wrapper');
			products.forEach(product => {
				const card = document.createElement('div');
				card.classList.add('card', 'col-lg-3', 'col-md-4', 'col-sm-12');
				card.innerHTML = `
					<img class="card-img-top card-img_size" src="${product.thumbnail}" alt="${product.title}">
					<div class="card-body card-body_flex">
						<h5 class="card-title">${product.title}</h5>
						<p class="card-text">${product.description}</p>
	
						<div class="product-info">
							<span class="product-price">Price: $${product.price}</span>
							<span class="product-rating">Rating: ${product.rating}</span>
						</div>
	
						<button class="btn btn-primary add-to-card-btn">Add to cart</button>
					</div>
				`;
				wrapper.appendChild(card);
			});
		}
		showCards ()
  });

	