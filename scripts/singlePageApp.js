addEventListener("DOMContentLoaded", (event) =>{
    //const pages = Array.from(document.querySelector("main").children);

    
    async function makeListeners(){
        document.querySelector("#name").addEventListener("click", (event) =>{
            onclick = "window.location.href='index.html';"
        });
        document.querySelector("#headerButtons").addEventListener("click", (event) => pageSwitch(event)); 

        // document.querySelector("#clear").addEventListener("click", (event) =>clear(event));
        // listButtons.addEventListener("click", (event) => filterSearch(event));
        // radioBtns.forEach((radio) => radio.addEventListener("change", (event)=>radioListener(event)));
        // tables.forEach((table)=>  table.addEventListener('click', (event)=>tableListener(event)));
        // tableHeads.forEach((th) => {th.addEventListener('click', (event) => rearrangeTable(event.target))})
        // topLists.forEach((list) => {list.addEventListener('click', (event)  => redirect(event.target))})
        // songViewers.forEach((songViewer) => {songViewer.addEventListener('click', (event) => makeSongView(event.target))});
        // document.querySelector("#credits").addEventListener('mouseover', () => {
        //    document.querySelector("#creditContents").classList.remove("creditPopup");
        //    setTimeout(() => {document.querySelector("#creditContents").classList.add("creditPopup");}, 3600);});}
    }

    makeListeners();

    


});



    // listGallery.addEventListener("click", (e) => {
    //     if (e.target && e.target.nodeName == "LI"){
    //     fetch(url_ex6.replace("7", e.target.value))
    //         .then(response => response.json())
    //         .then(data =>{ 
    //             const listPaintings = document.querySelector('#paintings');
    //             listPaintings.replaceChildren();
    //             for (let d of data){
    //                 let listItem = document.createElement("li");
    //                 listItem.textContent = d.title;
    //                 listPaintings.appendChild(listItem);
    //             }  
    //         })
    //     }
    // });



/**
 * 
 * @param {} event the click or simulated click
 * 
 * This function switches page views.
 */
   
function pageSwitch(event){
    console.log(event.target.textContent);

    pages.forEach(function(page) {
        if(event.target.classList.contains("button")){
        if (((page.dataset.id === event.target.id) && (page.classList.contains("hide"))) ||(page.dataset.id != event.target.id)&& (!page.classList.contains("hide"))) {
            page.classList.toggle("hide");}}
    });
}