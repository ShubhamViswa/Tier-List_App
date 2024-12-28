
let currentDraggedItem;

const tierInput = document.getElementById("tier");
const submitBtn = document.getElementById("submit");
const itemUrl = document.getElementById("image-item");
const submitBtn1 = document.getElementById("submit1")
// const itemContainers = document.getElementsByClassName("item-container");

// const tierLists = document.querySelectorAll(".tier-list");
const hexColors = [
    "#ff7f7f", "#ffbf7f", "#ffff7f", "#bfff7f", "#7fff7f",
    "#7fffff", "#7fbfff", "#7f7fff", "#bf7fff", "#ff7fff",
    "#ff9f9f", "#ffaf7f", "#ffdf7f", "#afff7f", "#7fffbf",
    "#7fdfff", "#7f9fff", "#af7fff", "#ff7faf", "#ff7fdf"
  ];

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

    const randomColor = hexColors[Math.floor(Math.random() * hexColors.length)]

    heading.style.backgroundColor = randomColor;

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
        // event.target.id = "draggedItem";
        currentDraggedItem = event.target.parentNode;
    })

    item.addEventListener("dblclick", (event) => {
        // event.preventDefault();
        // console.log("Shubham")
        const parentNode = event.target.parentNode;
        console.log(parentNode);

        const nonTierSection = document.getElementById("non-tier-section");
        nonTierSection.appendChild(parentNode);
    })
}

function setUpDropZoneInTierList(tierList){
     tierList.addEventListener("drop", (event) => {
        event.preventDefault();
     })

     tierList.addEventListener("dragover", (event)=>{
        // event.preventDefault();
        // console.log("dragged over a drop zone");
        console.log(event.target.value);
        event.target.appendChild(currentDraggedItem);
     })
}
