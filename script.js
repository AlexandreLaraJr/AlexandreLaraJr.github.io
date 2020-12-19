function verificar(){
    var data = new Date()
    var ano = Number(data.getFullYear())
    var fano = Number(document.querySelector('input#txtano').value)
    var res = document.querySelector('div#res')
    var foto = document.querySelector('div#foto')

    if(fano.length == 0 || fano > ano){ // compara para ver se o input esta vazio e se o ano digitado é maior que o ano atual
        window.alert('ERRO: Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 2){ //bebe
                img.setAttribute('src', 'bebeM.png')
            }else if(idade < 11){//crianca
                img.setAttribute('src', 'criancaM.png')
            }else if(idade < 21){//jovem
                img.setAttribute('src', 'jovemM.png')
            }else if(idade < 50){//adulto
                img.setAttribute('src', 'adultoM.png')
            }else{//idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 2){ //bebe
                img.setAttribute('src', 'bebeF.png')
            }else if(idade < 11){//crianca
                img.setAttribute('src', 'criancaF.png')
            }else if(idade < 21){//jovem
                img.setAttribute('src', 'jovemF.png')
            }else if(idade < 50){//adulto
                img.setAttribute('src', 'adultoF.png')
            }else{//idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        foto.innerHTML = ''
        foto.appendChild(img)
    }
    
}