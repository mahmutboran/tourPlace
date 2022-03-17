import {  data} from "../data.js";
let row = document.querySelector(".row")

data.forEach(e => {
    row.innerHTML+=`
    <div class="col-lg-4 col-md-4 col-sm-6 ">
    <div class="card bg-dark text-white p-2 position-relative w-100 h-75" >
        <div class="card-body py-2 px-0">
            <h5 class="card-title text-uppercase">${e.title}</h5>
        </div>

        <img src="${e.image}" class="card-img-top w-100 h-75 " alt="..." >
        <div class="overlay p-0 m-0 ">

            <p class="card-text p-1 w-100 ">${e.desc}</p>
        </div>
    </div>
</div>
    
    `
}); 