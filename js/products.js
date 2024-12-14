document.querySelector(".username").textContent = JSON.parse(localStorage.getItem("user")).username;

let elCategory1 = document.querySelector(".category-1")
let elCategory2 = document.querySelector(".category-2")

elCategory1.addEventListener("click", () => {
    elCategory1.className = "category-1 text-[35px] text-[#009938] leading-[40.64px] pb-[8px] font-bold border-b-[3px] cursor-pointer border-[#009938]"
    elCategory2.className = "category-2 text-[35px] text-[#AA5A66] leading-[40.64px] pb-[8px] font-bold border-b-[3px] cursor-pointer border-transparent"
})
elCategory2.addEventListener("click", () => {
    elCategory1.className = "category-1 text-[35px] text-[#AA5A66] leading-[40.64px] pb-[8px] font-bold border-b-[3px] cursor-pointer border-transparent"
    elCategory2.className = "category-2  text-[35px] text-[#009938] leading-[40.64px] pb-[8px] font-bold border-b-[3px] cursor-pointer border-[#009938]"
})