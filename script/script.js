const episodes = [
    {
        img: "./assets/images/episodes/episode1.svg",
        title : "When You're Lost in the Darkness",
        description: "In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by a soldier.",
    },
    {
        img: "./assets/images/episodes/episode2.svg",
        title : "Infected",
        description: "In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by a soldier.",
    },
    {
        img: "./assets/images/episodes/episode3.svg",
        title: "Long, Long Time",
        description: "Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },
    {
        img: "./assets/images/episodes/episode4.svg",
        title: "Please Hold to My Hand",
        description: "Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },
    {
        img: "https://image.tmdb.org/t/p/w185/cX2z8FO9lKqZmBBTVF2G2favQRE.jpg",
        title: "5. Endure and Survive",
        description: "Não tem"
    },
    {
        img: "https://image.tmdb.org/t/p/w185/zW9AIy0PVhYfmukqBcUvlvi4mKc.jpg",
        title: "6. Kin",
        description: "N tem",

    },
    {
        img: "https://image.tmdb.org/t/p/w185/oNyC68bnOoVAiJnKVsRNY9YDbl6.jpg",
        title: "7. Left behind",
        description: "N tem",

    },
    {
        img: "https://image.tmdb.org/t/p/w185/6DHQgB85iKMcabcKvC9HSDH3UDo.jpg",
        title: "8. When We are in need",
        description: "N tem",

    },
    {
        img: "https://image.tmdb.org/t/p/w185/qFouIBgN3Jgba7LnuRmkTAohh07.jpg",
        title: "9. Look for the light",
        description: "N tem",
    }
    
    

]

//acessar a lista de produtos atraves da DOM

const list = document.querySelector(".episodes-list");


//1. criar funçao p percorre todos episodios

//2. func abaixo recebe dado da array
function addCard (data){
    for( let i = 0 ; i < data.length ; i++ ){
         
        //4.criar func que renderize episodio a episodio
        renderCard (data[i]);
    }

}

// 3.chama a funçao
addCard (episodes);

function renderCard (episodio) {

    const listItem = document.createElement("li");
    listItem.classList.add("card");

    listItem.innerHTML = `
    <img
     src="${episodio.img}"
     alt="${episodio.title}"
     />
    <div class="card-text">
        <h4>"${episodio.title}"</h4>
        <p>
        ${episodio.description}
        </p>
    </div>
    `;

    list.appendChild(listItem);

}