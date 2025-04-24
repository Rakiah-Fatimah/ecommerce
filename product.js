const products = [
    {
      name: "Fjallraven - Foldsac",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest.",
      category: "Clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      name: "Mens Casual Premium",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, soft fabric.",
      category: "Clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg"
    },
    {
      name: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jackets for all seasons.",
      category: "Clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
      name: "Samsung Monitor 24\"",
      price: 140.5,
      description: "Full HD, ultra-slim, HDMI/VGA.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
    },
    {
      name: "Sony Headphones WH-1000XM4",
      price: 299.99,
      description: "Noise-cancelling wireless headphones with mic.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61MT0Mbt5CL._AC_SX679_.jpg"
    },
    {
      name: "Electric Toothbrush",
      price: 39.95,
      description: "Smart electric toothbrush with timer and travel case.",
      category: "Beauty & Personal Care",
      image: "https://fakestoreapi.com/img/61s1KWAj2IL._AC_SL1500_.jpg"
    },
    {
      name: "LEGO Super Mario Set",
      price: 59.99,
      description: "Interactive adventure game with Mario figurine.",
      category: "Toys & Games",
      image: "https://fakestoreapi.com/img/61gkHzD8FUL._AC_SL1500_.jpg"
    },
    {
      name: "Gaming Chair",
      price: 120.0,
      description: "Ergonomic racing chair for gamers.",
      category: "Home & Furniture",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_SL1500_.jpg"
    },
    {
      name: "Yoga Mat",
      price: 19.95,
      description: "Non-slip, extra thick yoga mat with carrying strap.",
      category: "Sports & Outdoors",
      image: "https://fakestoreapi.com/img/71D9ImsvEtL._AC_UL640_QL65_.jpg"
    },
    {
      name: "Adidas Running Shoes",
      price: 85.5,
      description: "Lightweight, breathable sneakers for running.",
      category: "Clothing",
      image: "https://fakestoreapi.com/img/71KilybDOoL._AC_UL640_QL65_.jpg"
    },
    {
      name: "Blender Pro 900W",
      price: 49.99,
      description: "Powerful blender for smoothies and shakes.",
      category: "Home & Furniture",
      image: "https://fakestoreapi.com/img/71o8Q5XJS5L._AC_SL1500_.jpg"
    },
    {
      name: "Office Desk",
      price: 199.99,
      description: "Spacious computer desk with shelves.",
      category: "Home & Furniture",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_SL1500_.jpg"
    },
    {
      name: "Perfume Set",
      price: 75.0,
      description: "Luxury fragrance set with 3 scents.",
      category: "Beauty & Personal Care",
      image: "https://fakestoreapi.com/img/71hD3z2U0ML._AC_UL640_QL65_.jpg"
    },
    {
      name: "Kids Remote Car",
      price: 27.99,
      description: "Rechargeable toy car with remote controller.",
      category: "Toys & Games",
      image: "https://fakestoreapi.com/img/71EzQ1VZ+kL._AC_SL1500_.jpg"
    },
    {
      name: "Basketball",
      price: 24.99,
      description: "Official size 7 indoor/outdoor basketball.",
      category: "Sports & Outdoors",
      image: "https://fakestoreapi.com/img/81vKAkYlPiL._AC_SL1500_.jpg"
    },
    {
      name: "Smartwatch Fit Band",
      price: 69.99,
      description: "Fitness tracker with heart rate monitor and steps.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/71wYqgDq5iL._AC_SL1500_.jpg"
    },
    {
      name: "Women Handbag",
      price: 49.5,
      description: "Stylish leather handbag for everyday use.",
      category: "Clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      name: "Desk Lamp LED",
      price: 19.99,
      description: "Adjustable LED lamp with touch control.",
      category: "Home & Furniture",
      image: "https://fakestoreapi.com/img/61pHAEJ4NHL._AC_SL1500_.jpg"
    },
    {
      name: "Nivea Men Face Wash",
      price: 7.99,
      description: "Oil control face wash for men.",
      category: "Beauty & Personal Care",
      image: "https://fakestoreapi.com/img/71z2Zg3eViL._AC_SL1500_.jpg"
    },
    {
      name: "Toy Dinosaur",
      price: 15.99,
      description: "Realistic dinosaur model for kids.",
      category: "Toys & Games",
      image: "https://fakestoreapi.com/img/91FzDUVt8LL._AC_SL1500_.jpg"
    },
    {
      name: "Resistance Bands Set",
      price: 34.99,
      description: "5-level fitness bands with handles and pouch.",
      category: "Sports & Outdoors",
      image: "https://fakestoreapi.com/img/61DF2iIh34L._AC_SL1500_.jpg"
    }
  ];
  
  let wisharr=[]
  const container = document.getElementById("product-container");
  function renderProducts(productsArray) {
    
    container.innerHTML = "";
  
    productsArray.map((product) => {
      const card = document.createElement("div");
      card.className = "bg-white rounded shadow p-4 text-center";
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-contain mb-4">
        <h2 class="text-lg font-bold mb-1">${product.name}</h2>
        <p class="text-blue-600 font-semibold mb-1">$${product.price}</p>
        <p class="text-sm text-gray-600 mb-4">${product.description}</p>
        <div class="flex gap-2 justify-center">
          <button id="cartbtn" onclick="cart()" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to Cart</button>
          <button id="wishbtn" onclick="wishlist()" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Add to Wishlist</button>
        </div>
      `;
  
      container.appendChild(card);

      function wishlist()
  {
   
      wisharr.push(product)
      console.log(wisharr)
 
    
  }

    });
  }
  // Show all products
function All() {
  container.innerHTML = "";
  renderProducts(products);
}

// Filter: Electronics
function Electronics() {
  let electronics = products.filter(p => p.category === "Electronics");
  container.innerHTML = "";
  renderProducts(electronics);
}

// Filter: Clothing
function Clothing() {
  let clothes = products.filter(p => p.category === "Clothing");
  container.innerHTML = "";
  renderProducts(clothes);
}

// Filter: Home & Furniture
function HnF() {
  let homeAndFurniture = products.filter(p => p.category === "Home & Furniture");
  container.innerHTML = "";
  renderProducts(homeAndFurniture);
}

// Filter: Beauty & Personal Care
function BnP() {
  let beauty = products.filter(p => p.category === "Beauty & Personal Care");
  container.innerHTML = "";
  renderProducts(beauty);
}

// Filter: Toys & Games
function TnG() {
  let toys = products.filter(p => p.category === "Toys & Games");
  container.innerHTML = "";
  renderProducts(toys);
}

// Filter: Sports & Outdoors
function SnO() {
  let sports = products.filter(p => p.category === "Sports & Outdoors");
  container.innerHTML = "";
  renderProducts(sports);
}

  renderProducts(products);
  function Dashboard()
  {
  window.location.href="./login.html"
  }
  
  