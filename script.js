const containerVideos =  document.querySelector(".videos__container");


async function buscarEMostarVideos() {
    try{
        const busca = await fetch("http://localhost:3000/videos")
        const videos = await busca.json();


        videos.forEach((video) => {
            containerVideos.innerHTML += `
            <li class="videos__item" >
                <iframe src= "${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen> </iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="logo do canal">
                    <h3 class="titulo-video">${video.titulo}"</h3>
                    <p class="titulo-canal">${video.descricao}</p> 
                    <p class="categoria">${video.categoria}</p>
                </div>
            </li>
            `
        })}catch(error) {
           containerVideos.innerHTML = `<p> Houve um errro a carregar os videos:${error}`
    



}}

buscarEMostarVideos()


// Pesquisar

const barraDePesquisa = document.querySelector('.pesquisar__input');
barraDePesquisa.addEventListener('input', filtroPesquisa);

function filtroPesquisa() {
    const videos = document.querySelectorAll('.videos__item');
    let valorFiltro = barraDePesquisa.value.toLowerCase();

    if (valorFiltro !== '') {
        for (let video of videos) {
            let titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

            if (!titulo.includes(valorFiltro)) {
                video.style.display = 'none';
            } else {
                video.style.display = 'block';
            }
        }
    } else {
        for (let video of videos) {
            video.style.display = 'block';
        }
    }
}


const botaocategoria = document.querySelectorAll('.superior__item');

botaocategoria.forEach((botao)=> {
    let nomecategoria = botao.getAttribute('name');
    botao.addEventListener('click', () => filtarrPorcategoria(nomecategoria));
})

function filtarrPorcategoria(filtro) {
    const videos = document.querySelectorAll('.videos__item');
    for(let video of videos) {
        let categoria = video.querySelector('.categoria').textContent.toLocaleLowerCase();
        let valorFiltro = filtro.toLocaleLowerCase()

        if (!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";

        } else {
            video.style.display = "none";

        }
    }
}

