class Bootstrapper {

    init() {
        //let categoriesSelect = (<HTMLSelectElement>document.getElementById('RecipeCategory'));
        alert("Congrats! I'm up!");
    }

}

window.onload = () => {
    var bootstrapper = new Bootstrapper();
    var mmu = new MMU();
    mmu.ListenForFiles();
    bootstrapper.init();
};