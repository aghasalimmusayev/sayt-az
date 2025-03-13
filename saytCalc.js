let options = document.querySelector(".options");
let selected = document.querySelector(".selected");
let vebsaytList = document.querySelector(".vebsayt_list");
let domenList = document.querySelector(".domen_list");
let hostingList = document.querySelector(".hosting_list");
let xidmetList = document.querySelector(".xidmet_list");
let sirketList = document.querySelector(".sirket_list");
let pageInp = document.querySelector(".page_inp")
let pageQuality = document.querySelector(".page_quality")
let sehifeQiymet = document.querySelector(".sehife_qiymet")
let staticPages = document.querySelector(".static_pages")
let saytElaveler = document.querySelector(".sayt_elaveler")
let elavelerQiymet = document.querySelector(".elaveler_qiymet")
let elavelerToplam = document.querySelector(".elaveler_toplam")
let axtarisMotoru = document.querySelector(".axtaris_motoru")
let axtarisQiymet = document.querySelector(".axtaris_qiymet")
let seoToplam = document.querySelector(".seo_toplam")
let eTicaret = document.querySelector(".e_ticaret")
let eTicaretQiymet = document.querySelector(".e_ticaret_qiymet")
let eTicaretToplam = document.querySelector(".e_ticaret_toplam")
let logoInp = document.querySelector(".logo_inp")
let logoQiymet = document.querySelector(".logo_qiymet")
let logoToplam = document.querySelector(".logo_toplam")
let cemQiymet = document.querySelector(".cem_qiymet")

vebsaytShow();
domenShow();
hostingShow();
xidmetShow();
sirketShow();
saytElaveInpsShow();
axtarisMotoruShow();
eTicaretShow();

options.style.display = "none"
selected.onclick = function(){
    if(options.style.display == "none") options.style.display ="block"
    else options.style.display = "none"
}
document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", function() {
        let selectedImg = document.querySelector(".selected img");
        let selectedValue = this.getAttribute("data-value"); // Seçilən dəyəri götür
        selectedImg.src = this.querySelector("img").src; // Seçilən bayrağı göstər
        selectedImg.setAttribute("data-value", selectedValue); // Seçilən dəyəri saxlamaq üçün
        document.querySelector(".options").style.display = "none";
    });
});
document.addEventListener("click", function(e) {
    if (!document.querySelector(".lang_selection").contains(e.target)) {
        document.querySelector(".options").style.display = "none";
    }
});
function openBar(){
    document.querySelector(".links").style.display = "initial"
    document.querySelector(".right_links").style.display = "initial"
    document.querySelector(".fa-bars").style.display = "none"
    document.querySelector(".fa-xmark").style.display = "initial" // Əlavə edildi
}
function closeBar(){
    document.querySelector(".links").style.display = "none"
    document.querySelector(".right_links").style.display = "none"
    document.querySelector(".fa-bars").style.display = "initial"
    document.querySelector(".fa-xmark").style.display = "none" // Əlavə edildi
}
document.addEventListener("click", function(event){
    const bars = document.querySelector(".fa-bars");
    const xmark = document.querySelector(".fa-xmark");
    const links = document.querySelector(".links");
    const rightLinks = document.querySelector(".right_links");
    
    if (!links.contains(event.target) && 
        !rightLinks.contains(event.target) && 
        !bars.contains(event.target) && 
        !xmark.contains(event.target) &&
        (links.style.display === "initial" || rightLinks.style.display === "initial")) {
        closeBar();
    }
});
document.querySelector(".fa-bars").addEventListener("click", function() {
    openBar();
});
document.querySelector(".fa-xmark").addEventListener("click", function() {
    closeBar();
});
document.querySelectorAll(".navlinks > li").forEach(function(item){
    item.addEventListener("click", function(event){
        event.stopPropagation(); // Klikin sənədə yayılmasının qarşısını al
        let ulTag = this.querySelector("ul");
        ulTag.style.display = ulTag.style.display == "block" ? "none" : "block"
    })
})
document.addEventListener("click", function(event) {
    document.querySelectorAll(".navlinks > li > ul").forEach(function(ul) {
        if (!ul.contains(event.target)) {
            ul.style.display = "none";
        }
    });
});
function vebsaytShow(){
    saytData.navLinks.vebsite.forEach(item => {
        vebsaytList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function domenShow(){
    saytData.navLinks.domen.forEach(item => {
        domenList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function hostingShow(){
    saytData.navLinks.hosting.forEach(item => {
        hostingList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function xidmetShow(){
    saytData.navLinks.xidmetler.forEach(item => {
        let hrefValue = item.name == "Sayt Kalkulyatoru" ? "saytCalc.html" : "#"
        xidmetList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="${hrefValue}" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function sirketShow(){
    saytData.navLinks.sirket.forEach(item => {
        sirketList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}

let pagePrice = 0
let addPrice = 0
let seoPrice = 0
let ePrice = 0
let logoPrice = 0
pageInp.onchange = function(){
    pagePrice = `${pageInp.value * pageQuality.value}`
    sehifeQiymet.innerHTML = `${pageInp.value} səhifə / ₼ ${pagePrice}`
    staticPages.innerHTML = `₼ ${pagePrice}`
    toplamSaytQiymeti();
}
pageQuality.onchange = function(){
    pageInp.onchange();
    staticPages.innerHTML = `₼ ${pagePrice}`
    toplamSaytQiymeti();
}
function saytElaveInpsShow(){
    saytData.eleveler.forEach(element => {
        saytElaveler.innerHTML += 
            `<label class="relative xl:items-center gap-2 flex cursor-pointer justify-between">
                <div class="w-3/4"><span class="text-sm font-medium text-gray-900">${element.name}</span></div>
                <div><input class="saytElave_input sr-only peer" type="checkbox" name="${element.name}" value="${element.price}">
                    <div
                        class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white
                          after:content-['']  after:absolute z-10 after:top-0.5  after:right-[22px] after:bg-white after:border-gray-300 
                          after:border after:rounded-full after:h-5  after:w-5 after:transition-all duration-300 
                          after:duration-300 peer-checked:bg-[#A271F2]">
                    </div>
                </div>
            </label>`
    })
}
let saytElaveInputlari = document.querySelectorAll(".saytElave_input");
saytElaveInputlari.forEach(input => {
    input.addEventListener('change', elaveleriTopla);
});
function elaveleriTopla(){
    saytElaveInputlari.forEach(input => {
        if (input.checked) {
            addPrice += parseInt(input.value);
        }
    });
    elavelerQiymet.innerHTML = `₼ ${addPrice}`;
    elavelerToplam.innerHTML = `₼ ${addPrice}`
    toplamSaytQiymeti();
}
function axtarisMotoruShow(){
    saytData.SEO.forEach(element => {
        axtarisMotoru.innerHTML += 
            `<label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="${element.price}" class="axtaris_checkbox sr-only peer"/>
                <div
                    class="relative w-5 h-5 border border-gray-300 rounded-lg bg-white peer-checked:bg-[#A271F2]
                        peer-checked:border-[#A271F2] after:content-[''] after:absolute after:left-1/2 after:top-1/2 
                        after:h-[10px] after:w-[5px] after:border-r-2 after:border-b-2  after:border-white after:rotate-45
                        after:opacity-0 after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:opacity-100 transition-all">
                </div>
                <span class="ml-2 text-gray-700 text-lg">${element.name}</span>
            </label>`        
    })
}
let axtarisCheckboxlar = document.querySelectorAll(".axtaris_checkbox");
axtarisCheckboxlar.forEach(checkbox => {
    checkbox.addEventListener("change", axtarisHesabla);
})
function axtarisHesabla(){
    axtarisCheckboxlar.forEach(checkbox => {
        if (checkbox.checked) {
            seoPrice += parseInt(checkbox.value);
        }
    });
    axtarisQiymet.innerHTML = `₼ ${seoPrice}`;
    seoToplam.innerHTML = `₼ ${seoPrice}`
    toplamSaytQiymeti();
}
function eTicaretShow(){
    saytData.e_ticaret.forEach(element => {
        eTicaret.innerHTML += 
            `<label class="relative xl:items-center gap-2 flex cursor-pointer justify-between">
                <div class="w-3/4"><span class="text-sm font-medium text-gray-900">${element.name}</span></div>
                <div><input class="e_ticaret_input sr-only peer" type="checkbox" name="${element.name}" value="${element.price}">
                    <div
                        class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white  after:content-['']  after:absolute  after:top-0.5  after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5  after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-[#A271F2]">
                    </div>
                </div>
            </label>`
    })
}
let eTicaretInputlar = document.querySelectorAll(".e_ticaret_input");
eTicaretInputlar.forEach(input => {
    input.addEventListener('change', eTicaretTopla);
});
function eTicaretTopla(){
    eTicaretInputlar.forEach(input => {
        if (input.checked) {
            ePrice += parseInt(input.value);
        }
    });
    eTicaretQiymet.innerHTML = `₼ ${ePrice}`;
    eTicaretToplam.innerHTML = `₼ ${ePrice}`
    toplamSaytQiymeti();
}
logoInp.onchange = function(){
    logoPrice = `₼ ${logoInp.value}`
    logoQiymet.innerHTML = logoPrice
    logoToplam.innerHTML = logoPrice
    toplamSaytQiymeti();
}
function toplamSaytQiymeti(){
    let toplam = Math.floor(pagePrice) + Math.floor(addPrice) + Math.floor(seoPrice) + Math.floor(ePrice) + Math.floor(logoPrice)
    toplam <= 450 ? cemQiymet.innerHTML = "₼ 450" : cemQiymet.innerHTML = `₼ ${toplam}`
}