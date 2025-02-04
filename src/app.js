const productList = document.querySelector(
	"#dessert-list",
);

// Populate the products
async function populateList() {
	const res = await fetch("./data.json");
	const data = await res.json();
	data.map((item) => {
		const product = `  <div class="product__card  product__card--in--cart">
        <div class="image__container">
            <button class="button">
                <div class="flex items__center gap-1">
                    
                    <img src="/public/assets/images/icon-add-to-cart.svg" alt="">
                    <span>Add to Cart</span>
                </div>
            </button>
        </div>
        <div class="product__card__details">
            
            <span class="category">
                Waffle
            </span>
            <p class="name">
                
                Waffle with Berries
                
            </p>
            <span class="price">
                
                $6.50
            </span>
           
          
        </div>
    
    </div>`;
		productList.appendChild(product);
	});
}

populateList();
