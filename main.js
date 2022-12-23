let youTubeBaza = [
    { 
        src:"https://www.youtube.com/embed/EZDqGnabo4I", 
        title:"Том и Джерри | Классический мультфильм",
    },
    {
        src:"https://www.youtube.com/embed/ER8a11uRF3M", 
        title:"YouTube video player",  
    },
    { 
        src:"https://www.youtube.com/embed/t0Q2otsqC4I", 
        title:"YouTube video player", 
    },
    { 
        src:"https://www.youtube.com/embed/5oH9Nr3bKfw", 
        title:"YouTube video player", 
    },
    { 
        src:"https://www.youtube.com/embed/-M_MOIFxK-8", 
        title:"YouTube video player",
    },
    { 
        src:"https://www.youtube.com/embed/IEM9Q2fdHA0", 
        title:"YouTube video player",
    },
]

let allYouTubeBaza = youTubeBaza.slice(0, 3)
let allElement = document.querySelector(".allElement")
let indexi = 2
let allYouTubeBazaIndex

reRender(allYouTubeBaza)

function addVideo(){
    let titleName = document.querySelector(".titleName").value
    let srcAdres = document.querySelector(".srcAdres").value 
    youTubeBaza.unshift ({
        src:srcAdres,
        title:titleName,
    })
    reRender(youTubeBaza)
}

function reRender(newYouTubeBaza){
    allElement.innerHTML = ""
    newYouTubeBaza.map((item, index) =>{
        let bName = document.createElement("b")
        bName.setAttribute("class", "bAllName mt-2")
        bName.innerText = item.title

        let iframe = document.createElement("iframe")
        iframe.src = item.src

        let col = document.createElement("div")
        col.classList.add("col-4")

        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")

        let editButton = document.createElement("button")
        editButton.innerText = "Edite"
        editButton.setAttribute("class", "btn btn-success mt-2")
        editButton.setAttribute("onclick", `editButton(${index})`)

        let delButton = document.createElement("button")
        delButton.innerText = "Delete"
        delButton.setAttribute("class", "btn btn-danger mt-2")
        delButton.setAttribute("onclick", `deleteButton(${index})`)

        card.appendChild(iframe)
        card.appendChild(bName)
        card.appendChild(delButton)
        card.appendChild(editButton)
        
        col.appendChild(card)
        
        allElement.appendChild(col)

        document.querySelector(".titleName").value = ""
        document.querySelector(".srcAdres").value = ""
    })
}

function loadMore() {
    for(let i = indexi + 1; i < indexi + 4; i ++){
        if(youTubeBaza[i] != undefined) allYouTubeBaza.push(youTubeBaza[i])
    }
    if(youTubeBaza.length === allYouTubeBaza.length){
        document.querySelector(".load-more").classList.add("d-none")
    }
    indexi = indexi + 3
    reRender(allYouTubeBaza)
}

function editButton(index) { 
    allYouTubeBazaIndex = index
    document.querySelector(".titleName").value = allYouTubeBaza[index].title
    document.querySelector(".srcAdres").value = allYouTubeBaza[index].src
}

function editVideo(){
    let titleName = document.querySelector(".titleName").value
    let srcAdres = document.querySelector(".srcAdres").value

    allYouTubeBaza[allYouTubeBazaIndex].title = titleName
    allYouTubeBaza[allYouTubeBazaIndex].src = srcAdres

    reRender(allYouTubeBaza)

    document.querySelector(".titleName").value = ""
    document.querySelector(".srcAdres").value = ""
} 

function deleteButton(index) { 
    allYouTubeBaza.splice(index, 1)
    reRender(allYouTubeBaza)
}

function searchData(keyWord) { 
    let newYouTubeBaza = allYouTubeBaza.filter(item => {
        return item.title.toLowerCase().includes(keyWord.value.toLowerCase())
    }) 
    reRender(newYouTubeBaza)
}