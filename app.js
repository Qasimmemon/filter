

document.getElementById('scrollButton').addEventListener('click', function() {
  document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
});

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search_input");
const priceSelect = document.getElementById("priceSelect");
// Array of products
// document.addEventListener('DOMContentLoaded', () => {
const products = [
  
  {
    id: 0,
    
    price:'100$',
    title:'This Shirt is Brand and Summer Colletion.',
    description:'Shirt made Summer Vacation and Cool',
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 1,
      price:'200$',
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      // price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
   
          image: "https://images.unsplash.com/photo-1600019248002-f4c4898f739b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmphbGxyYXZlbiUyMCUyMCUyMEZvbGRzYWNrJTIwTm8uJTIwMSUyMEJhY2twYWNrJTJDJTIwRml0cyUyMDE1JTIwTGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",

    },
    {
      id: 2,
      price:'300$',
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      // price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. ",
      
        
        image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1lbnMlMjBDYXN1YWwlMjBQcmVtaXVtJTIwVCUyMFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",

    },
    {
      id: 3,
      price:'400$',
      title: "Mens Cotton Jacket",
      // price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock.",
          //  
          image: "https://images.unsplash.com/photo-1685328403732-64be6bb9d112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVucyUyMENvdHRvbiUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",

    },
    {
      id: 4,
      price:'500$',
      title: "Mens Casual Slim Fit",
      // price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice.",
            
          image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1lbnMlMjBDYXN1YWwlMjBTbGltJTIwRml0fGVufDB8fDB8fHww",

    },
    {
      id: 5,
      price:'100$',
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      // price: 695,
      description:
        "Four Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        image: "https://images.unsplash.com/photo-1518779737284-161fc061f38a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEpvaG4lMjBIYXJkeSUyMFdvbWVuJ3MlMjBMZWdlbmRzJTIwTmFnYSUyMEdvbGQlMjAlMjYlMjBTaWx2ZXIlMjBEcmFnb24lMjBTdGF0aW9uJTIwQ2hhaW4lMjBCcmFjZWxldHxlbnwwfHwwfHx8MA%3D%3D",

         
      
    },
    {
      id: 6,
      price:'200$',
      title: "Solid Gold Petite Micropave ",
      // price: 168,
      description:
        "Ssfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez.",
        image: "https://images.unsplash.com/photo-1513104806186-1b00f3e7a65e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29saWQlMjBHb2xkJTIwUGV0aXRlJTIwTWljcm9wYXZlfGVufDB8fDB8fHww",

         
        },
    {
      id: 7,
      price:'300$',
      title: "White Gold Plated Princess",
      // price: 9.99,
      description:
        "Clsic Created Wedding \s  for Engagement, Wedding, Anniversary, Valentine's Day...",
        image: "https://images.unsplash.com/photo-1581388646048-3c04adad37b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFdoaXRlJTIwR29sZCUyMFBsYXRlZCUyMFByaW5jZXNzfGVufDB8fDB8fHww",

        
       },
    {
      id: 8,
      price:'400$',
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      // price: 10.99,
      description:
        "R Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      
        
        image: "https://images.unsplash.com/photo-1579053778004-3a4d3f0fae19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fFBpZXJjZWQlMjBPd2wlMjBSb3NlJTIwR29sZCUyMFBsYXRlZCUyMFN0YWlubGVzcyUyMFN0ZWVsJTIwRG91YmxlfGVufDB8fDB8fHww",

    },
    {
      id: 9,
      price:'500$',
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      // price: 64,
      description:
        "USB 0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; ",
        
        
        image: "https://images.unsplash.com/photo-1501987679309-0bc430a60908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDJUQiUyMEhhcmQlMjBEcml2ZXxlbnwwfHwwfHx8MA%3D%3D",

    },
    {
      id: 10,
      price:'100$',
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      // price: 109,
      description:
        "Easpgrade for faster boot up, shutdown, application load and response (As compared.)",
        
      
        image: "https://images.unsplash.com/photo-1661347561636-93817eb0bdea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNhbkRpc2slMjBTU0QlMjBQTFVTJTIwMVRCJTIwSW50ZXJuYWwlMjBTU0QlMjAlMjAlMjBTQVRBJTIwSUlJJTIwNiUyMEdiJTJGc3xlbnwwfHwwfHx8MA%3D%3D",

    },
    {
      id: 11,
      price:'200$',
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      // price: 109,
      description:
        "3DD flash are applied to deliver high transfer speeds Remarkable transfer .",
        image: "https://images.unsplash.com/photo-1678257355149-6eda1755b1a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNpbGljb24lMjBQb3dlciUyMDI1NkdCJTIwU1NEJTIwM0QlMjBOQU5EJTIwQTU1JTIwU0xDJTIwQ2FjaGUlMjBQZXJmb3JtYW5jZSUyMEJvb3N0JTIwU0FUQSUyMElJSSUyMDIuNXxlbnwwfHwwfHx8MA%3D%3D",

            
    },
    {
      id: 12
      ,
      price:'300$',
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      // price: 114,
      description:
        "Expyour PS4 gaming experience, Play anywhere Fast and easy, setup Sleek ",
        image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V0QlMjA0VEIlMjBHYW1pbmclMjBEcml2ZSUyMFdvcmtzJTIwd2l0aCUyMFBsYXlzdGF0aW9uJTIwNCUyMFBvcnRhYmxlJTIwRXh0ZXJuYWwlMjBIYXJkJTIwRHJpdmV8ZW58MHx8MHx8fDA%3D",

            
    },
    {
      id: 13
      ,
      price:'400$',
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      // price: 599,
      description:
        "21. inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. ",
        image: "https://images.unsplash.com/photo-1522198428577-adf2d374b05b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlciUyMFNCMjIwUSUyMGJpJTIwMjEuNSUyMGluY2hlcyUyMEZ1bGwlMjBIRCUyMCgxOTIwJTIweCUyMDEwODApJTIwSVBTJTIwVWx0cmElMjBUaGlufGVufDB8fDB8fHww",

             
    },
    {
      id: 14
      ,
      price:'500$',
      title:
        "Samsung 49-Inch CHG90 144Hz  – Super Ultrawide Screen QLED ",
      // price: 999.99,
      description:
        "49 SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side ",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMDQ5JTIwSW5jaCUyMENIRzkwJTIwMTQ0SHolMjBDdXJ2ZWQlMjBHYW1pbmclMjBNb25pdG9yJTIwKExDNDlIRzkwRE1OWFpBKSUyMCVFMiU4MCU5MyUyMFN1cGVyJTIwVWx0cmF3aWRlJTIwU2NyZWVuJTIwUUxFRHxlbnwwfHwwfHx8MA%3D%3D",

           
    },
    {
      id: 15
      ,
      price:'100$',
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      // price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% ",
      
        image: "https://plus.unsplash.com/premium_photo-1707235459095-8db068de1486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QklZTEFDTEVTRU4lMjBXb21lbidzJTIwMyUyMGluJTIwMSUyMFNub3dib2FyZCUyMEphY2tldCUyMFdpbnRlciUyMENvYXRzfGVufDB8fDB8fHww",

      
      
    },
    {
      id: 16
      ,
      price:'200$',
      title:
        "Lock and Love Women's  Leather Moto Biker Jacket",
      // price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux ",
      
        image: "https://plus.unsplash.com/premium_photo-1681488142153-9d3966f2d815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TG9jayUyMGFuZCUyMExvdmUlMjBXb21lbidzJTIwUmVtb3ZhYmxlfGVufDB8fDB8fHww",

       
    },
    {
      id: 17
      ,
      price:'300$',
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      // price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable .",
      
        image: "https://images.unsplash.com/photo-1599577180513-7dd76ffd9761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmFja2V0JTIwV29tZW4lMjBXaW5kYnJlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",

        
      
    },
    {
      id: 18
      ,
      price:'400$',
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric ",
        
        image: "https://plus.unsplash.com/premium_photo-1673853725250-131a1669c686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V29tZW4ncyUyMFNvbGlkJTIwU2hvcnQlMjBTbGVldmV8ZW58MHx8MHx8fDA%3D",
  
     
    },
    {
      id: 19
      ,
      price:'500$',
      title: "Opna Women's Short Sleeve Moisture",
     
      description:
        "100% Polyester, Machine wash, 100% cationic polyester  t Fabric with comfortable ",
        image: "https://plus.unsplash.com/premium_photo-1690338237128-b32fedb44d55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHQlMjBzaGlydCUyMGZvciUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",

  
       
    },
    {
      id: 20
      ,
      price:'100$',
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      // price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees.",
               
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fHww",

    },
    { id: 21
      ,
      price:'200$',
       title: "Sunglasses",
        description: "Stylish sunglasses with UV protection.",
         image: "https://images.unsplash.com/photo-1610136649349-0f646f318053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D" 
        },
    { id: 22
      ,
      price:'300$',
       title: "Reading Glasses",
        description: "Comfortable reading glasses with a lightweight frame.",
         image: "https://images.unsplash.com/photo-1618933974351-e38629016464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVhZGluZyUyMEdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
         },
    { id: 23
      , 
      price:'400$',
      title: "Fashion Glasses",
       description: "Trendy glasses that make a fashion statement.",
        image: "https://plus.unsplash.com/premium_photo-1661319147577-fe52598a037a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RmFzaGlvbiUyMEdsYXNzZXxlbnwwfHwwfHx8MA%3D%3D"
       },
    { id: 24
      ,
      price:'500$',
       title: "Blue Light Glasses",
        description: "Glasses that protect your eyes from blue light emitted by screens.", 
        image: "https://images.unsplash.com/photo-1580935727530-99e8732bc21e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qmx1ZSUyMExpZ2h0JTIwR2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
       },
    { id: 25
      ,
      price:'100$',
       title: "Sports Glasses",
        description: "Durable sports glasses designed for active lifestyles.",
         image: "https://plus.unsplash.com/premium_photo-1663089885615-b70cae51c5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFNwb3J0cyUyMEdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
         }
];
         
  
  




function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach(product => {
    const productCard = `
      <div class="product-card p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="${product.image}">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">${product.title}</h2>
        <p class="text-base leading-relaxed mt-2">${product.description}</p>
        <p class="text-base leading-relaxed mt-2">${product.price}</p>
        <button class="text-indigo-500 inline-flex items-center mt-3" onclick="addToCart(${product.id})">Add to cart</button>
      </div>`;
    productList.innerHTML += productCard;
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = `
    <div class="product-card p-4 md:w-1/3 sm:mb-0 mb-6" data-id="${product.id}">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="${product.image}">
      </div>
      <h2 class="text-xl font-medium title-font text-gray-900 mt-5">${product.title}</h2>
      <p class="text-base leading-relaxed mt-2">${product.description}</p>
      <button class="delete-btn ml-auto flex items-center px-3 py-1 bg-red-500 text-white rounded-md" onclick="removeFromCart(${product.id})">Delete</button>
    </div>
  `;
  document.getElementById("result").innerHTML += cartItem;
}

function removeFromCart(productId) {
  const cartItem = document.querySelector(`#result .product-card[data-id="${productId}"]`);
  if (cartItem) {
    cartItem.remove();
  }
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
  displayProducts(filteredProducts);
});

priceSelect.addEventListener('change', () => {
  const priceRange = priceSelect.value;
  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number);
    const filteredProducts = products.filter(product => {
      const price = parseInt(product.price.replace('$', ''));
      return price >= min && price <= max;
    });
    displayProducts(filteredProducts);
  } else {
    displayProducts(products);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  displayProducts(products);
});







