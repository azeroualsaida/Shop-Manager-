
const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const maxPriceInput = document.getElementById("max-price")
const inStockChexBox = document.getElementById("in-stock");
const buttonResetFilters = document.getElementById("reset-filters");

// const API_BASE = "http://localhost:3000/api";
//     
//   fetch ("http://localhost:3000/api/products")
//   .then ((repense)=>{
//     console.log(repense);
//   })
//   .catch((error)=>{
// console.log( "ona un error :" +error)

//   });
// test()

//    displayProduct();

// async function test() {
//     const response = await fetch(API_BASE + "/products");
//     console.log(response.status);

//     if (!response.ok) {
//         const problem = await response.json();
//         console.log(problem.message);
//         return;
//     }
//     const products = await response.json();
//     displayProduct(products);
// }


// // let temp = "";
// function displayProduct(products) {

//     productsContainer.innerHTML = "";
//     products.forEach((product) => {

//         productsContainer.innerHTML += `

//         <article id="articl-"
//                     class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-3xl border border-[#EBE5D9] flex flex-col bg-[#FFFCF5] p-4 shadow-xs justify-between">

//                         <img src="http://localhost:3000/${product.image}" alt="${product.name}" class=" w-full p-3 object-cover rounded-4xl">
//                         <div class=" flex flex-col ml-4 mr-4  ">
//                             <h3 class=" font-sans font-medium text-xl text-gran-900 mb-2 ">${product.name}
//                             </h3>
//                             <p class=" text-[#605E5A] text-sm  font-light leading-relaxed max-w-md mb-5">${product.description}</p>
//                             <div class="  flex items-center justify-between   p-4 rounded-b-2xl border-t border-gray-400 ">
//                                 <p class=" text-sm ">${product.price}</p>
//                                 <button class="  h-10 w-10 bg-[#rgb(255, 212, 59)]">
//                                     <div class="font-2xl">
//                                         <i class="fa-solid fa-circle-arrow-right" style="color: rgb(255, 212, 59);"></i>
//                                     </div>

//                                 </button>
//                             </div>
//                         </div>

//                     </article>
//     `
//         //    = temp
//     });


// }


// searchInput.addEventListener("input", function () {


//     searchProducts(searchInput.value);

// });

// async function searchProducts(input) {
//     const response = await fetch(`${API_BASE}/products?search=${input}`);
//     console.log(response.status);
//     const products = await response.json();
//        displayProduct(products);
// }

 productsContainer.addEventListener("click",(event)=>{
 
    if(event.target.classList.contains("btn-plus")){
        let span = event.target.previousElementSibling;
      span.textContent = Number(span.textContent) + 1;

    }

    if(event.target.classList.contains("btn-minus")){
          let span = event.target.previousElementSibling;
       if (Number(span.textContent) > 1) {
            span.textContent = Number(span.textContent) - 1;
        }
    }
 });

getProducts()

function getProducts() {

    productsContainer.innerHTML = `
    <div class="w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-[#FFFCF5] rounded-3xl border border-[#EBE5D9] p-8">

        <div class="w-16 h-16 rounded-full bg-[#F5F2E9] flex items-center justify-center mb-5">
            <i class="fa-solid fa-spinner fa-spin text-2xl text-[#E0533C]"></i>
        </div>

        <h3 class="text-[#0B3C32] text-2xl font-semibold mb-2">
            Loading products...
        </h3>

        <p class="text-[#605E5A] text-sm max-w-sm leading-relaxed">
            Please wait while we load the products for you.
        </p>

    </div>
`;


    fetch("http://localhost:3000/api/products")
        .then((respense) => {
            // console.log(repense);
            if (!respense.ok) {
                throw new error("Aucun produit disponible pour le moment.")
            }

            return respense.json();

        })
        .then((products) => {
            products.map(product => product.categoryName)
            // console.log(products);
            //  console.log(products[0]);
            if (products.length === 0) {
                productsContainer.innerHTML = `

    <div class="w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-[#FFFCF5] rounded-3xl border border-[#EBE5D9] p-8">

        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-[#F6F2E9] mb-5">
            <i class="fa-solid fa-box-open text-2xl text-[#0B3C32]"></i>
        </div>

        <h3 class="text-xl font-semibold text-[#0B3C32] mb-2">
            Aucun produit disponible
        </h3>

        <p class="text-gray-500 text-sm">
            Aucun produit disponible pour le moment.
        </p>

    </div>

`;

                return;
            }
            Array.isArray(products)
            displayProducts(products);
        })
        .catch((error) => {

            productsContainer.innerHTML = `

        <div class="w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-[#FFFCF5] rounded-3xl border border-[#EBE5D9] p-8">

            <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 mb-5">
                <i class="fa-solid fa-triangle-exclamation text-2xl text-[#E0533C]"></i>
            </div>

            <h3 class="text-xl font-semibold text-[#0B3C32] mb-2">
                 Something went wrong
            </h3>

            <p class="text-gray-500 text-sm">
                Unable to load products. Please try again.
            </p>

        </div>

    `;
            console.log(error);

        });
}



function displayProducts(products) {


    productsContainer.innerHTML = "";

    products.forEach((product) => {

        // productsContainer.innerHTML += ` 

        //  <article id="articl-" http://localhost:3000class=" w-90 h-115 shadow-md rounded-4xl border-gray-600 flex flex-col bg-[#FFFCF5] justify-start
        //             mt-4 overflow-hidden w-[calc(25%-18px)] rounded-3xl ">
        //             <img src="http://localhost:3000${product.image}" alt="${product.name}" class=" w-full p-3 object-cover rounded-4xl">
        //             <div class=" flex flex-col ml-4 mr-4  ">
        //                 <h3 class=" font-sans font-medium text-xl text-gran-900 mb-2 ">${product.name}
        //                 </h3>
        //                 <p class=" text-[#605E5A] text-sm  font-light leading-relaxed max-w-md mb-5">${product.description}</p>
        //                 <div class="  flex items-center justify-between   p-4 rounded-b-2xl border-t border-gray-400 ">
        //                     <p class=" text-sm ">$${product.price}</p>
        //                     <button class="ml-auto flex justify- items-center    bg-[#152c27]  

        //                      text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-[#286246] transition-colors


        //                     ">
        //                          <i class="fa-xl  fa-plus" style="color: rgb(255, 255, 255)"></i>

        //                         <div class="font-1xl text-white ">
        //                             Add
        //                         </div>
        //                     </button>
        //                 </div>

        //             </div>

        //         </article>
        // `
        productsContainer.innerHTML += ` 


  <article id="articl-${product.id}" class="w-90 h-115 shadow-md rounded-4xl border-gray-600 flex flex-col bg-[#FFFCF5] justify-start mt-4 overflow-hidden w-[calc(25%-18px)]">
    
    <!-- Image + Category Badge -->
    <div class="relative">
      <img src="http://localhost:3000${product.image}" alt="${product.name}" class="w-full p-3 object-cover rounded-4xl">
      <span class="absolute top-6 left-6 bg-white/90 text-[#605E5A] text-xs font-medium px-3 py-1 rounded-full uppercase">
        ${displayCategories(product.categoryId)}
      </span>
    </div>

    <div class="flex flex-col ml-4 mr-4 flex-1 justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-sans font-medium text-xl text-gray-900">${product.name}</h3>
          <p class="text-base font-medium text-gray-900">$${product.price}</p>
        </div>

        <!-- Description -->
        <p class="text-[#605E5A] text-sm font-light leading-relaxed max-w-md mb-5">
          ${product.description}
        </p>
      </div>

      <!-- Bottom Action Row -->
      <div class="flex items-center justify-between gap-2 py-4 rounded-b-2xl border-t border-gray-400">
        <span class="text-amber-600 text-xs font-medium">
          Only ${product.stock || 5} left
        </span>

        <div class="flex items-center gap-2 ml-auto">
          <!-- Quantity Pill (- 1 +) -->
          <div class="flex items-center justify-between w-24 px-3 py-1.5 bg-white border border-gray-300 rounded-full">
            <button type="button" class=" btn-minus text-gray-400 hover:text-gray-700">-</button>
            <span class="text-sm font-medium text-gray-900">1</span>
            <button type="button" class=" btn-plus text-gray-700 hover:text-black">+</button>
          </div>

          <!-- Your Add Button -->
          <button type="button" class="flex justify-center items-center bg-[#152c27] text-white px-4 py-2 rounded-xl text-sm font-medium gap-2 hover:bg-[#286246] transition-colors">
            <i class="fa-solid fa-plus" style="color: rgb(255, 255, 255)"></i>
            <span class="text-white">Add</span>
          </button>
        </div>
      </div>

    </div>
  </article>
`;
    });

}

searchInput.addEventListener("input", () => {
    console.log(searchInput.value);
    searchProducts(searchInput.value);

})

function searchProducts(input) {


    fetch(`http://localhost:3000/api/products?search=${input}`)
        .then((respense) => {


            if (!respense.ok) {
                throw new Error("Something went wrong");
            }


            return respense.json()
        })
        .then((products) => {

            //  console.log(Array.isArray(products));
            console.log("Products:", products);
            console.log("Length:", products.length);
            if (products.length === 0) {
                // productsContainer.innerHTML = `
                //             <p class="text-[#E0533C] text-lg font-medium p-4 flex justify-items-center">
                //                 Aucun résultat trouvé.
                //             </p>
                //         `;


                productsContainer.innerHTML = `
        <div class="w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-[#FFFCF5] rounded-3xl border border-[#EBE5D9] p-8">

            <div class="w-16 h-16 rounded-full bg-[#F5F2E9] flex items-center justify-center mb-5">
                <i class="fa-solid fa-magnifying-glass text-2xl text-[#E0533C]"></i>
            </div>

            <h3 class="text-[#0B3C32] text-2xl font-semibold mb-2">
                No products found
            </h3>

            <p class="text-[#605E5A] text-sm max-w-sm leading-relaxed mb-5">
                We couldn't find any products matching your search.
                Try another keyword or check your spelling.
            </p>

            <button id="clear-search"
                class="bg-[#0B3C32] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#174F43] transition-colors">
                <i class="fa-solid fa-rotate-left mr-2"></i>
                Clear search
            </button>

        </div>
    `;

                document.getElementById("clear-search").addEventListener("click", () => {
                    searchInput.value = "";
                    getProducts();
                });

                return;
            }

            displayProducts(products)
        })
        .catch((error) => {
            console.log("Impossible de rechercher les produits", error);
        });

}
// ===============filter-Récupérez les catégories disponibles depuis l'API================

function displayCategories() {


    const option0 = document.createElement("option")
    option0.value = ""
    option0.textContent = "All Categories"
    categoryFilter.appendChild(option0);

    const option1 = document.createElement("option");
    option1.value = "1"
    option1.textContent = "Books"
    categoryFilter.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "2"
    option2.textContent = "Electronics"
    categoryFilter.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "3"
    option3.textContent = "Kitchen"
    categoryFilter.appendChild(option3);

    const option4 = document.createElement("option");
    option4.value = "4"
    option4.textContent = "Outdoor"
    categoryFilter.appendChild(option4);

    const option5 = document.createElement("option");
    option5.value = "5"
    option5.textContent = "picture"
    categoryFilter.appendChild(option5);

}

displayCategories()

categoryFilter.addEventListener("change", () => {
    // console.log(categoryFilter.value);
    getCategories(categoryFilter.value)

})
function getCategories(caterogory) {

    fetch(`http://localhost:3000/api/products?categoryId=${caterogory}`)

        .then((respense) => {

            if (!respense.ok) {

                throw new Error("Something went wrong");
            }
            return respense.json();

        })
        .then((products) => {
            console.log("Products:", products);
            if (products.length === 0) {
                productsContainer.innerHTML = `

        <div class="w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-[#FFFCF5] rounded-3xl border border-[#EBE5D9] p-8">

            <div class="w-16 h-16 rounded-full bg-[#F5F2E9] flex items-center justify-center mb-5">
                <i class="fa-solid fa-magnifying-glass text-2xl text-[#E0533C]"></i>
            </div>

            <h3 class="text-[#0B3C32] text-2xl font-semibold mb-2">
                no product found in this category
            </h3>

            <p class="text-[#605E5A] text-sm max-w-sm leading-relaxed mb-5">
                We couldn't find any products matching your category.
                Try another category u will found another one .
            </p>

            <button id="clear-search"
                class="bg-[#0B3C32] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#174F43] transition-colors">
                <i class="fa-solid fa-rotate-left mr-2"></i>
                Clear category 
            </button>

        </div>
    `;

                document.getElementById("clear-search").addEventListener("click", () => {
                    categoryFilter.value = "";
                    getProducts();
                });

                return;
            }

            displayProducts(products)
        })

        .catch((error) => {
            console.log("no products in this categorie !", error);
        })
}



maxPriceInput.addEventListener("input", () => {

    getMaxPrice(maxPriceInput.value);
})


function getMaxPrice(maxPrice) {

    fetch(`http://localhost:3000/api/products?maxPrice=${maxPrice}`)

        .then((respense) => {

            if (!respense.ok) {
                throw new Error("Something went wrong");
            }
            return respense.json()
        })
        .then((products) => {
            if (products.length === 0) {

                productsContainer.innerHTML = `
        <div class="w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-[#FFFCF5] rounded-3xl border border-[#EBE5D9] p-8">

            <div class="w-16 h-16 rounded-full bg-[#F5F2E9] flex items-center justify-center mb-5">
                <i class="fa-solid fa-magnifying-glass text-2xl text-[#E0533C]"></i>
            </div>

            <h3 class="text-[#0B3C32] text-2xl font-semibold mb-2">
                no product found in this price 
            </h3>

            <p class="text-[#605E5A] text-sm max-w-sm leading-relaxed mb-5">
                We couldn't find any products matching your price .
                Try another price  u will found another one .
            </p>

            <button id="clear-search"
                class="bg-[#0B3C32] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#174F43] transition-colors">
                <i class="fa-solid fa-rotate-left mr-2"></i>
                Clear price 
            </button>

        </div>
    `;

                document.getElementById("clear-search").addEventListener("click", () => {
                    categoryFilter.value = "";
                    getProducts();
                });

                return;
            }
            displayProducts(products)

        })

        .catch((error) => {
            console.log("no products in this price !", error)
        })
}





inStockChexBox.addEventListener("change", () => {

    if (inStockChexBox.checked) {
        getAvailableProducts()
    }
    getProducts();

});

function getAvailableProducts() {

    fetch("http://localhost:3000/api/products?inStock=true")
        .then((respense) => {
            if (!respense.ok) {
                throw new Error("Something went wrong");

            }
            return respense.json()
        })
        .then((products) => {
            console.log(products)
            displayProducts(products);
        })
        .catch((error) => {
            console.log("nothing in stock", error)
        })
}


function resetFilters() {

    buttonResetFilters.addEventListener("click", () => {
        searchInput.value = "";
        categoryFilter.value = "";
        maxPriceInput.value = "";
        inStockChexBox.checked = false;
        getProducts();
    })
}
resetFilters()











