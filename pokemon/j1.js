

async function fetchData(){
    try{
        const name1=document.getElementById("name1").value;
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name1}`);
        if(!response.ok){
            throw new error("could not fetch");
        }
        else{
            const data=await response.json();
            const img1=data.sprites.front_default;
            const img11=document.createElement("img");
            img11.src=img1;
            img11.classList.add("img11");
            const card=document.getElementById("card");
            card.innerHTML='';
            card.appendChild(img11);
        }
    }
    catch(error){
        console.error(error);
    }
}