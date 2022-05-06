function closeBanner(){
    const banner = document.querySelector(".banner-container");
    const blurryBack = document.querySelector(".blurry");
    banner.style.display = "none";
    blurryBack.style.filter = "none";

}