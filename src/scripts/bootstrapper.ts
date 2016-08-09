class Bootstrapper {

    init() {
        //let categoriesSelect = (<HTMLSelectElement>document.getElementById('RecipeCategory'));
        alert("Congrats! I'm up!");
    }

}

window.onload = () => {
    var bootstrapper = new Bootstrapper();
    bootstrapper.init();
};