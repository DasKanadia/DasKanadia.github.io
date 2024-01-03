/* add your code here */

document.addEventListener("DOMContentLoaded", () => {
    const paintingsData = JSON.parse(content);
    const paintingList = document.querySelector("#paintings ul");
    const titlePainting = document.querySelector('#title');
    const artistPainting = document.querySelector('#artist');

    const descriptionPainting = document.querySelector('#description');

    for (let details of paintingsData){
        //console.log(details);
        const liContents = document.createElement("li");
        const paintingImg = document.createElement("img");

        paintingImg.src = `./images/small/${details.id}.jpg`;
        paintingImg.dataset.id = details.id;

        liContents.appendChild(paintingImg);
        paintingList.appendChild(liContents);
    }

    paintingList.addEventListener("click", (e) => {
        //console.log(e.target);
        
        if((e.target && e.target.nodeName) == "IMG"){
            let dataStruct = ``;

            for (let data of paintingsData){
                if (data.id == e.target.dataset.id){
                    dataStruct = data;
                    //console.log(dataStruct);
                }
            }
            //console.log(paintingsData);

            titlePainting.textContent = `${dataStruct.title}`;
            artistPainting.textContent = `By ${dataStruct.artist}`;
            
            let detailsPainting = document.querySelector('figure');
            detailsPainting.innerHTML = "";
            //console.log(detailsPainting);      
   
            const paintingLarge = document.createElement('img');
            paintingLarge.src = `./images/large/${e.target.dataset.id}.jpg`;
            paintingLarge.dataset.id = details.id;

            detailsPainting.appendChild(paintingLarge);

            for (let desc of dataStruct.features){
                let boxElement = document.createElement('div');
                boxElement.className = 'box';
                boxElement.style.position = 'absolute';
                boxElement.style.top = `${desc.upperLeft[1]}px`;
                boxElement.style.left = `${desc.upperLeft[0]}px`;
                boxElement.style.width = `${(desc.lowerRight[0] - desc.upperLeft[0])}px`;
                boxElement.style.height = `${(desc.lowerRight[1] - desc.upperLeft[1])}px`;
                //console.log('X1: ' + desc.lowerRight[0] + ', X2: ' + desc.upperLeft[0] + ' = ' + (desc.lowerRight[0] - desc.upperLeft[0]));
                //console.log('Y1: ' + desc.lowerRight[1] + ', Y2: ' + desc.upperLeft[1] + ' = ' + (desc.lowerRight[1] - desc.upperLeft[1]));
                //console.log(boxElement);

                boxElement.addEventListener("mouseover", function(e) {
                    document.querySelector("#description").textContent = desc.description;
                })
    
                boxElement.addEventListener("mouseout", function(e) {
                    document.querySelector("#description").textContent = "";
                }) 

                detailsPainting.appendChild(boxElement);
            }

        } else {console.log(`Error on click`);}
    });


    descriptionPainting.addEventListener("click", (e) => {
        //console.log(e.target);
        if((e.target && e.target.nodeName) == "BOX"){
            let dataStruct = ``;

            for (let data of paintingsData){
                if (data.id == e.target.dataset.id){
                    dataStruct = data;
                    //console.log(dataStruct);
                }
            }
            //console.log(paintingsData);
            
            let detailsPainting = document.querySelector('#details figure');
            detailsPainting.innerHTML = "";
            //console.log(detailsPainting);      
   
            const paintingLarge = document.createElement("img");
            paintingLarge.src = `./images/large/${e.target.dataset.id}.jpg`;
            paintingLarge.dataset.id = details.id;

            detailsPainting.appendChild(paintingLarge);



        } else {console.log(`Error on click`);}
    });



/*
When a new painting is clicked, you will also need to loop through the 
features array for that painting and display rectangles on top of the painting. 
Each feature has the upper-left and lower-right coordinates for the feature. 
Each rectangle will be a <div> element that you programmatically construct 
and append to the <figure>. You will need to assign it the class box (the CSS 
for this class has been provided) and set the position, left, top, width, and 
height properties. The respective values for these properties will be absolute, 
the upper-left x value from features array element, the upper-left y value 
from features array element, while the width and height are calculated by 
subtracting the lower-right x,y from upper-left x,y. Note: the left, top, width, 
and height properties must include the px unit when assigning the value.*/

})