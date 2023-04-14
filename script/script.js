var form = document.querySelector("#formularo")

form.addEventListener("submit", function(event){
    event.preventDefault()

    var nome = document.querySelector("input[name=pesquisaForm]").value
    var url = "https://pokeapi.co/api/v2/pokemon/"+ nome

    console.log (url)

    fetch(url)
        .then(function(response){
            return response.json()
        })

        .then(function(data){
            console.log(data)

            var conteudo = document.querySelector("#conteudo")

            conteudo.innerHTML = "<h3>" + data.name + "</h3>"
            conteudo.innerHTML +="<img src='"+data.sprites.front_default+"' alt='' id='pk-img'>"
            data.types.forEach((tipos) => {
                var nome = tipos.type.name
                conteudo.innerHTML +="<p> Tipo: " + nome + "</p>"
            })
            conteudo.innerHTML += "<p> ID: "+ data.id +"</p>"
            conteudo.innerHTML += "<p> Tamanho: "+(data.height / 10)+"m </p>"  
            conteudo.innerHTML += "<p> Peso: "+(data.weight / 10)+"Kg </p>"

            if (data.id <= 151){
                conteudo.innerHTML += "<p>1º Geração</p>"
            }else if (data.id > 151 && data.id <=251){
                conteudo.innerHTML += "<p>2º Geração</p>"
            }else if (data.id > 251 && data.id <=386){
                conteudo.innerHTML += "<p>3º Geração</p>"
            }else if (data.id > 386 && data.id <=494){
                conteudo.innerHTML += "<p>4º Geração</p>"
            } else if (data.id > 494 && data.id <=649){
                conteudo.innerHTML += "<p>5º Geração</p>"
            }else if (data.id > 649 && data.id <=721){
                conteudo.innerHTML += "<p>6º Geração</p>"
            }else if (data.id > 721 && data.id <=809){
                conteudo.innerHTML += "<p>7º Geração</p>"
            }else if (data.id > 809 && data.id <= 905){
                conteudo.innerHTML += "<p>8º Geração</p>"
            }else{
                conteudo.innerHTML += "<p>9º Geração</p>"
            }
                

        })
})