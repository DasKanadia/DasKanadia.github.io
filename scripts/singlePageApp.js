addEventListener("DOMContentLoaded", async (event) =>{
    async function makeListeners(){
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
});

/**
 * 
 * @param {} event the click or simulated click
 * 
 * This function switches page views.
 */
   
function pageSwitch(event){
    console.log(event);

    pages.forEach(function(page) {
    
    if(event.target.classList.contains("button")){
    if (((page.dataset.id === event.target.id)&& (page.classList.contains("hide"))) ||(page.dataset.id != event.target.id)&& (!page.classList.contains("hide"))) {
        page.classList.toggle("hide");}}
    });
}