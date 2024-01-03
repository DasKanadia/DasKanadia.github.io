document.addEventListener("DOMContentLoaded", async (event) =>{
    const paintingList = document.querySelector("#paintings ul");
    const titlePainting = document.querySelector('#title');
    const artistPainting = document.querySelector('#artist');


    const pages = Array.from(document.querySelector("#headerButtons").children);

    
    async function makeListeners(){
        document.querySelector("#headerButtons").addEventListener("click", (event) => pageSwitch(event)); 

        // document.querySelector("#name").addEventListener("click", (event) =>{
        //     onclick = "window.location.href='index.html';"
        // });

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

    
    function pageSwitch(event){
        console.log(event.target);

        pages.forEach((page) => {
            console.log("hit: " + event.target.classList)
            if(event.target.classList.contains("button")){
                if (((page.dataset.id === event.target.id) && (page.classList.contains("hide"))) ||(page.dataset.id != event.target.id)&& (!page.classList.contains("hide"))) {
                    page.classList.toggle("hide");
                    console.log(page.dataset.id);
                }
            }
        });
    }

//     <body>
// <section id="view1">
//   <button id="view2Button">GO TO 2</button>
// </section>
// <section id="view2" class="hidden">
//   <button id="view1Button">GO TO 1</button>
// </section>
// </body>
// .hidden {
//     display: none;
//   }
//   document.getElementById("view1Button").addEventListener("click", changeView);
// document.getElementById("view2Button").addEventListener("click", changeView);

// function changeView(event) {
//   resetView();
//   event.target.classList.remove("hidden");
// }

// function resetView() {
//   document.getElementById("view1").classList.add("hidden");
//   document.getElementById("view2").classList.add("hidden");
// }

// <body>
// <div id="someCoolWrapperForYourStlyesAndHTMLStructure">
//   <section id="view1">
//     <button id="view2Button">GO TO 2</button>
//     <!-- THE REST OF YOUR VIEW GOES HERE -->
//     </section>
//   <section id="view2" class="hidden">
//     <button id="view1Button">GO TO 1</button>
//     <!-- THE REST OF YOUR VIEW GOES HERE -->
//   </section>
// </div>
// </body>



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
   


// // Lab 4 Code Below
// const paintingsData = JSON.parse(content);
//     const paintingList = document.querySelector("#paintings ul");
//     const titlePainting = document.querySelector('#title');
//     const artistPainting = document.querySelector('#artist');

//     const descriptionPainting = document.querySelector('#description');

//     for (let details of paintingsData){
//         //console.log(details);
//         const liContents = document.createElement("li");
//         const paintingImg = document.createElement("img");

//         paintingImg.src = `./images/small/${details.id}.jpg`;
//         paintingImg.dataset.id = details.id;

//         liContents.appendChild(paintingImg);
//         paintingList.appendChild(liContents);
//     }

//     paintingList.addEventListener("click", (e) => {
//         //console.log(e.target);
        
//         if((e.target && e.target.nodeName) == "IMG"){
//             let dataStruct = ``;

//             for (let data of paintingsData){
//                 if (data.id == e.target.dataset.id){
//                     dataStruct = data;
//                     //console.log(dataStruct);
//                 }
//             }
//             //console.log(paintingsData);

//             titlePainting.textContent = `${dataStruct.title}`;
//             artistPainting.textContent = `By ${dataStruct.artist}`;
            
//             let detailsPainting = document.querySelector('figure');
//             detailsPainting.innerHTML = "";
//             //console.log(detailsPainting);      
   
//             const paintingLarge = document.createElement('img');
//             paintingLarge.src = `./images/large/${e.target.dataset.id}.jpg`;
//             paintingLarge.dataset.id = details.id;

//             detailsPainting.appendChild(paintingLarge);

//             for (let desc of dataStruct.features){
//                 let boxElement = document.createElement('div');
//                 boxElement.className = 'box';
//                 boxElement.style.position = 'absolute';
//                 boxElement.style.top = `${desc.upperLeft[1]}px`;
//                 boxElement.style.left = `${desc.upperLeft[0]}px`;
//                 boxElement.style.width = `${(desc.lowerRight[0] - desc.upperLeft[0])}px`;
//                 boxElement.style.height = `${(desc.lowerRight[1] - desc.upperLeft[1])}px`;
//                 //console.log('X1: ' + desc.lowerRight[0] + ', X2: ' + desc.upperLeft[0] + ' = ' + (desc.lowerRight[0] - desc.upperLeft[0]));
//                 //console.log('Y1: ' + desc.lowerRight[1] + ', Y2: ' + desc.upperLeft[1] + ' = ' + (desc.lowerRight[1] - desc.upperLeft[1]));
//                 //console.log(boxElement);

//                 boxElement.addEventListener("mouseover", function(e) {
//                     document.querySelector("#description").textContent = desc.description;
//                 })
    
//                 boxElement.addEventListener("mouseout", function(e) {
//                     document.querySelector("#description").textContent = "";
//                 }) 

//                 detailsPainting.appendChild(boxElement);
//             }

//         } else {console.log(`Error on click`);}
//     });


//     descriptionPainting.addEventListener("click", (e) => {
//         //console.log(e.target);
//         if((e.target && e.target.nodeName) == "BOX"){
//             let dataStruct = ``;

//             for (let data of paintingsData){
//                 if (data.id == e.target.dataset.id){
//                     dataStruct = data;
//                     //console.log(dataStruct);
//                 }
//             }
//             //console.log(paintingsData);
            
//             let detailsPainting = document.querySelector('#details figure');
//             detailsPainting.innerHTML = "";
//             //console.log(detailsPainting);      
   
//             const paintingLarge = document.createElement("img");
//             paintingLarge.src = `./images/large/${e.target.dataset.id}.jpg`;
//             paintingLarge.dataset.id = details.id;

//             detailsPainting.appendChild(paintingLarge);



//         } else {console.log(`Error on click`);}
//     });

// // Lab 5
// document.querySelector(".scheme-group").addEventListener("click", (event) => {
//     if(event.target.tagName === 'BUTTON'){
//        const buttonID = event.target.getAttribute('data-id');

//        for (data of colorData){
//           if (buttonID == data.id){
//              document.querySelector("aside h2").textContent = data.title;
             
//              const fsElement = document.querySelector("fieldset");
//              console.log(fsElement);
//              fsElement.innerHTML = '';    
//              console.log(`Set Display: ${data.title}`);
                       
//              for (colorBlocks of data.scheme){
//                 const colorRow = document.createElement('div');
//                 colorRow.className = "colorRow";

//                 const detailBox = document.createElement('div');
//                 detailBox.className = "detailBox";
//                 detailBox.style = `background-color:${colorBlocks.web}`;
//                 colorRow.appendChild(detailBox);


//                 const hexCode = document.createElement('span');
//                 hexCode.innerHTML = colorBlocks.web;
//                 colorRow.appendChild(hexCode);

//                 const rgb = document.createElement('span');
//                 rgb.innerHTML = `rgb(${colorBlocks.color.red}, ${colorBlocks.color.green}, ${colorBlocks.color.blue})`;
//                 colorRow.appendChild(rgb);

//                 const colorName = document.createElement('label');
//                 colorName.innerHTML = colorBlocks.name;
//                 colorRow.appendChild(colorName);

//                 fsElement.appendChild(colorRow);
//              }
//           }
//        }
          
       
//     }
//  });