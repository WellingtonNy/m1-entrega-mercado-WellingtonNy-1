//definindo referencias
const listaFrutas  = document.querySelector('#frutaUl')
const listaBebidas = document.querySelector('#bebidasUl')
const listaHigiene = document.querySelector('#higieneUl')


//function principal
function listar(lista) {
    //percorrendo lista
    for (let i = 0; i < lista.length; i++) {
      let produto = lista[i]
      //filtrando e implementando template na interface
      if (produto.category == "Frutas") {
        let template = criarTemplate(produto)
        listaFrutas.appendChild(template)
  
      } else if (produto.category == "Bebidas") {
        let template = criarTemplate(produto)
        listaBebidas.appendChild(template)
  
      } else if (produto.category == "Higiene") {
        let template = criarTemplate(produto)
        listaHigiene.appendChild(template)
      }
    }
  }


//chamando function
listar(products);


// Criando Template
function criarTemplate(produto) {
    //recuperando info do produto
    let title       = produto.title
    let price       = produto.price
    let category    = produto.category
    let image       = produto.image
  

    //criando elementos 
    let tagLi     = document.createElement('li')
    let tagImg    = document.createElement('img')
    let tagDiv    = document.createElement('div')
    let tagH1     = document.createElement('h1')
    let tagH5     = document.createElement('h5')
    let tagStr    = document.createElement('strong')


    //add classes para o css
    tagLi.classList.add('product')
    tagImg.classList.add('product-img')
    tagDiv.classList.add("product-main")
    tagH1.classList.add("product-title")        
    tagH5.classList.add("product-category")
    tagStr.classList.add("product-price")


    //alimentando as tags com informações
    //filtrando image
    if (image == undefined) {
        tagImg.src ="./img/products/no-img.svg"
    } else {
        tagImg.src = image
    }
    tagImg.alt      = title
    tagH1.innerText = title
    tagH5.innerText = category
    tagStr.innerText  = `R$ ${price}`
 

    // montando o template
    tagLi.append(tagImg, tagDiv);
    tagDiv.append(tagH1,tagH5,tagStr)


    //retornando o template
    return tagLi
}