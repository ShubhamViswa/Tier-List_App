
let currentDraggedItem;

const tierInput = document.getElementById("tier");
const submitBtn = document.getElementById("submit");
const itemUrl = document.getElementById("image-item");
const submitBtn1 = document.getElementById("submit1")
// const itemContainers = document.getElementsByClassName("item-container");

// const tierLists = document.querySelectorAll(".tier-list");

submitBtn.addEventListener("click", (event) => {
    // console.log("button is clicked")
    event.preventDefault();
    // const target = event.target;
    createTierList(tierInput.value);
    tierInput.value = "";
})

submitBtn1.addEventListener("click", (event) => {
    event.preventDefault();
    if(itemUrl.value === ""){
        alert("Please Enter a valid image URL");
        return;
    }
    createURLimage(itemUrl.value);
    itemUrl.value = "";
})

function createTierList(tierlistName){
    
    const newTierList = document.createElement("div");
    newTierList.classList.add("tier-list");

    const heading = document.createElement("h1");
    heading.textContent = tierlistName;

    const newtierlistItem = document.createElement("div");
    newtierlistItem.classList.add("tier-list-item");

    newTierList.appendChild(heading);
    newTierList.appendChild(newtierlistItem);

    const tierSection = document.getElementById("tier-list-section");
    tierSection.appendChild(newTierList);

    setUpDropZoneInTierList(newtierlistItem);
}

function createURLimage(itemURL){
    const newItem = document.createElement("div");
    // newItem.setAttribute("class", "item-container");

    setUpItemContainerForDrag(newItem);

    newItem.classList.add("item-container");
    newItem.setAttribute("draggable", "true");

    const imageItem = document.createElement("img");
    imageItem.src = itemURL;

    newItem.appendChild(imageItem);

    const nonTierSection = document.getElementById("non-tier-section");

    nonTierSection.appendChild(newItem);
}

const itemContainers = document.getElementsByClassName("item-container");

for(const item of itemContainers){
    setUpItemContainerForDrag(item);
}

function setUpItemContainerForDrag(item){
    item.addEventListener("dragstart", (event) => {
        // console.log(event.target.parentNode);
        currentDraggedItem = event.target.parentNode;
    })
}

function setUpDropZoneInTierList(tierList){
     tierList.addEventListener("drop", (event) => {
        event.preventDefault();
     })

     tierList.addEventListener("dragover", (event)=>{
        console.log("dragged over a drop zone");
        event.target.appendChild(currentDraggedItem);
     })
}