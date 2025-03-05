let options = document.querySelector(".options");
let selected = document.querySelector(".selected");
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
    document.querySelector(".fa-bars").style.display = "none"
}
function closeBar(){
    document.querySelector(".links").style.display = "none"
    document.querySelector(".fa-bars").style.display = "initial"
}
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