function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/israel-light.jpeg")
    img.setAttribute("alt", "de oclim escuro")
  } else {
    img.setAttribute("src", "./assets/israel.jpeg")
    img.setAttribute("alt", "nerd")
  }
}
