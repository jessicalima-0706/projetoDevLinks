function toggleMode() {
  const html = document.documentElement
  /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */
  html.classList.toggle("light")
  /* função que substitui e faz exatamente o que todas as linha de códigos fazem no algoritmo acima*/

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver no light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem dark
    img.setAttribute("src", "./assets/avatar-dark.png")
  }

  // substituir o texto da img
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de uma moça, usando óculos escuros e camiseta cinza, fundo da foto é amarelo."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de uma moça, usando óculos de grau e camiseta cinza, fundo da foto é roxo."
    )
  }
}
