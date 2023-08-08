var products =document.getElementById("products");
const all=document.getElementById("all");
var clickdata=document.getElementById("clickdata");
var cancel=document.getElementById("cancel-btn");
const arr=[
    {
        Imgsrc:"https://m.media-amazon.com/images/I/41r48BjZ1JL._AC_UY327_FMwebp_QL65_.jpg",
        Category:"headset",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UY327_FMwebp_QL65_.jpg",
        Category:"headset",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/61LlQRdDZ2L._AC_UY327_FMwebp_QL65_.jpg",
        Category:"headset",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/61kmCas5OCL._AC_UL480_FMwebp_QL65_.jpg",
        Category:"bag",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/91PZUhSoOVL._AC_UL480_FMwebp_QL65_.jpg",
        Category:"bag",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/81vNR2RGUSL._AC_UL480_FMwebp_QL65_.jpg",
        Category:"bag",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/81z0v8pHjnL._AC_UL480_FMwebp_QL65_.jpg",
        Category:"watch",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/51K7AFBrdQL._AC_UL480_FMwebp_QL65_.jpg",
        Category:"watch",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/713m0cORTBL._AC_UL480_FMwebp_QL65_.jpg",
        Category:"watch",
        catgry:"all"
    },
    {
        Imgsrc:"https://m.media-amazon.com/images/I/61kmCas5OCL._AC_UL480_FMwebp_QL65_.jpg",
        Category:"bag",
        catgry:"all"
    },
    
    
];

function allcat(){
    all.style.backgroundColor="blue";
    all.style.color="white";




const productsContainer = document.getElementById("products-container");


const produtsdata = `
<div class="row justify-content-between g-3 mx-auto">
    ${arr.map((val, i) => {
        return (
            `<div class="col">
                <div class="card  " style="width: 100%;">
                    <img src=${val.Imgsrc} class="card-img-top cardimg mx-auto " onclick="makeImg(${i})"  alt="...">
                </div>
            </div>`
        )
    }).join('')}
</div>`;
productsContainer.innerHTML = produtsdata;
}
// ---------------------------------------------------------------------

allcat();


function selectCategory(categorys) {
    all.style.backgroundColor="white";
    all.style.color="blue";   

    const productsContainer = document.getElementById("products-container");
    const filteredProducts = arr.filter(product => product.Category ==categorys);
    
    const productsData = `
        <div class="row justify-content-between g-3 ">
            ${filteredProducts.map(product  => `
                <div class="col ">
                    <div class="card  " style="width: 100%;">
                        <img    id="cardimg"src=${product.Imgsrc} class="card-img-top cardimg mx-auto" alt="...">
                    </div>
                </div>
            `).join('')}
        </div>`;
       
        
    

        
    productsContainer.innerHTML = productsData;

    const buttons=document.querySelectorAll(".click-btn");
    buttons.forEach((button)=>{
        if(button.innerHTML==categorys){
            button.classList.add("active")

        }
        else{
            button.classList.remove("active");

        }
        
    })
  

}

function makeImg(inx){
    
  const fil=  arr.filter((val,i)=>{
        return inx==i
    });
    const datas=`
    ${fil.map((val)=>{
        return `
        <div class="cd-row" id="cd-row">
            <p>category:${val.Category}</p>
            <img  class="cd-img" src=${val.Imgsrc}>
            <div class="cancel-btn" id="cancel-btn" onclick="closecan()"><i class="fa-solid fa-xmark"></i></div>
        </div>`
    })}`;

    clickdata.innerHTML=datas;
    clickdata.style.display="block";
    
    


}


function closecan(){
    console.log("hello")
    var clickdata=document.getElementById("clickdata");
    clickdata.style.display="none";

}

