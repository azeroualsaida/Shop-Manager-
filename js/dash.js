
    const productsContainer = document.getElementById("products-container")

    async function test() {
        const response = await fetch("http://localhost:3000/api/products");
        console.log(response.status);

        if (!response.ok) {
            const problem = await response.json();
            console.log(problem.message);
            return;
        }

        const products = await response.json();
        // console.log(products);
        displayProduct(products);
    }

    test()

    let temp = "";

    function displayProduct(products) {
        console.log(products);

        productsContainer.innerHTML = "";
        products.forEach((products) => {

            temp += `

        <article id="articl-"
                    class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-3xl border border-[#EBE5D9] flex flex-col bg-[#FFFCF5] p-4 shadow-xs justify-between">

                        <img src="http://localhost:3000/${products.image}" alt="${products.name}" class=" w-full p-3 object-cover rounded-4xl">
                        <div class=" flex flex-col ml-4 mr-4  ">
                            <h3 class=" font-sans font-medium text-xl text-gran-900 mb-2 ">${products.name}
                            </h3>
                            <p class=" text-[#605E5A] text-sm  font-light leading-relaxed max-w-md mb-5">${products.description}</p>
                            <div class="  flex items-center justify-between   p-4 rounded-b-2xl border-t border-gray-400 ">
                                <p class=" text-sm ">${products.price}</p>
                                <button class="  h-10 w-10 bg-[#rgb(255, 212, 59)]">
                                    <div class="font-2xl">
                                        <i class="fa-solid fa-circle-arrow-right" style="color: rgb(255, 212, 59);"></i>
                                    </div>

                                </button>
                            </div>
                        </div>

                    </article>
    `
            productsContainer.innerHTML = temp
        });


    }
    displayProduct()

