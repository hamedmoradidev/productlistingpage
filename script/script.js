const productsSection = document.getElementById("productsSection")
const categoryOption = document.getElementById("category")
const categorySelectOption = document.getElementById("categorySelectOption")
const womenLink = document.getElementById("womenLink")
const menLink = document.getElementById("menLink")
const searchInput = document.getElementById("searchInput")
getData()
function getData(){
fetch('https://fakestoreapi.com/products')
.then(x => x.json())
.then(y =>{
    y.map((val) => {
        let tempProduct = document.createElement("div")
        tempProduct.classList.add("product", "mb-20", "w-1/2", "md:w-1/3", "lg:w-[300px]", "h-[400px]", "text-neutral-800", "flex", "items-center", "flex-wrap")
        tempProduct.innerHTML = `<figure class="h-[290px] overflow-hidden">
                                    <img class="image" src="${val.image}" alt="">
                                </figure>
                                <h2 class="title w-full text-[15px]">${val.title}</h2>
                                <h3 class="price font-bold w-full">£${val.price}</h3>
                                <h5 class="category border-[1px] hidden border-[#a8a8a8a8] text-[#5f5f5f] text-[12px] font-semibold px-1 lg:block">${val.category}</h5>`
        productsSection.appendChild(tempProduct)
    })
    productsSection.innerHTML += `<a href="" id="lazyLoading" class="border-2 px-3 py-1" id="menLink">LOAD MORE</a>`
})
}
womenLink.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("CategoryOpt").removeAttribute("selected")
    document.getElementById("womensClothing").selected = "true"
    categorySelectOptionUpdate()
})
menLink.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("CategoryOpt").removeAttribute("selected")
    document.getElementById("mensClothing").selected = "true"
    categorySelectOptionUpdate()
})

categorySelectOption.addEventListener("change",() => {
    categorySelectOptionUpdate()
})

function categorySelectOptionUpdate(){
    productsSection.innerHTML = ""
fetch('https://fakestoreapi.com/products')
.then(x => x.json())
.then(y =>{
    y.map((val) => {
        if(val.category == categorySelectOption.value){
            let tempProduct = document.createElement("div")
            tempProduct.classList.add("product", "w-1/2", "md:w-1/3", "lg:w-[300px]", "h-[400px]", "text-neutral-800", "flex", "items-center", "flex-wrap")
            tempProduct.innerHTML = `<figure class="h-[290px] overflow-hidden">
                                        <img class="image" src="${val.image}" alt="">
                                    </figure>
                                    <h2 class="title w-full">${val.title}</h2>
                                    <h3 class="price font-bold w-full">£${val.price}</h3>
                                    <h5 class="category hidden lg:block w-full">${val.category}</h5>`
            productsSection.appendChild(tempProduct)    
        }
    })
})
}
searchInput.addEventListener("input", () => {
    if(searchInput.value==""){
        getData()
    }
    productsSection.innerHTML = ""
    fetch('https://fakestoreapi.com/products')
    .then(x => x.json())
    .then(y =>{
        y.map((val) => {
            if(val.title.toLowerCase().includes(searchInput.value)){
                console.log("find")
                let tempProduct = document.createElement("div")
                tempProduct.classList.add("product", "mb-20", "w-1/2", "md:w-1/3", "lg:w-[300px]", "h-[400px]", "text-neutral-800", "flex", "items-center", "flex-wrap")
                tempProduct.innerHTML = `<figure class="h-[290px] overflow-hidden">
                                            <img class="image" src="${val.image}" alt="">
                                        </figure>
                                        <h2 class="title w-full text-[15px]">${val.title}</h2>
                                        <h3 class="price font-bold w-full">£${val.price}</h3>
                                        <h5 class="category border-[1px] hidden border-[#a8a8a8a8] text-[#5f5f5f] text-[12px] font-semibold px-1 lg:block">${val.category}</h5>`
                productsSection.appendChild(tempProduct)
            }
        })
    })    
})