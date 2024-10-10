let popup = document.querySelector(".popup-box")
let createbtn = document.getElementById("createbtn")

createbtn.addEventListener("click", function () {
    popup.style.display = "block"
})

let cancelpopup = document.getElementById("cancel")
cancelpopup.addEventListener("click", function () {
    popup.style.display = "none"
})

let container = document.querySelector(".container")
let addb = document.getElementById("addb")
let title = document.getElementById("title")
let notes = document.getElementById("notes")

addb.addEventListener("click", function () {
    let div = document.createElement("div")
    div.setAttribute("class", "container")
    div.innerHTML = `<h2>${title.value}</h2>
    <p>${notes.value}</p>
    <button onclick="deletebtn">Delete</button>`
    container.append(div)
    popup.style.display = "none"
})

function deletebtn(event) {
    event.target.parentElement.remove()
}