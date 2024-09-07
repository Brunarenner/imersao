function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa") .value

    if(!campoPesquisa){
        section.innerHTML = "<p>🤷‍♀️Nada Foi Encontrado🤷‍♀️</p>"
        return
    }
  campoPesquisa = campoPesquisa.toLowerCase()
  
let resultados = "";
let titulo = "";
let descrição = "";
let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descrição = dado.descrição.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) ||descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descrição-meta">${dado.descrição}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
      `;
    }
}
if (!resultados){
    resultados = "<p>Nada Foi Encontrado</p>"

}

section.innerHTML = resultados;
}
