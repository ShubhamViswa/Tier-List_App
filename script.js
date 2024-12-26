const tierInput = document.getElementById("tier");
const submitBtn = document.getElementById("submit");
const itemUrl = document.getElementById("tier-image");
const submitBtn1 = document.getElementById("submit1")

submitBtn.addEventListener("click", (event) => {
    console.log("button is clicked")
    event.preventDefault();
    // const target = event.target;
    createTierList(tierInput.value);
    tierInput.value = "";
})

submitBtn1.addEventListener("click", (event) => {
    event.preventDefault();
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
    // newtierlistItem.textContent = 

    newTierList.appendChild(heading);
    newTierList.appendChild(newtierlistItem);

    const tierSection = document.getElementById("tier-list-section");
    tierSection.appendChild(newTierList);
}

function createURLimage(itemURL){
    const newItem = document.createElement("div");
    newItem.classList.add("item-container");

    const imageItem = document.createElement("img");
    imageItem.src = itemURL;

    newItem.appendChild(imageItem);

    const nonTierSection = document.getElementById("non-tier-section");

    nonTierSection.appendChild(newItem);
}