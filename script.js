const menu_icon = document.getElementById("menu-icon")
const close_icon = document.getElementById("close-icon")
const div_opacity = document.getElementById("div-opacity")
const navigationLists = document.getElementById("navigation-lists")

menu_icon.addEventListener("click",() => {
  navigationLists.classList.remove("head_navigation-lists--inactive")
  div_opacity.classList.remove("reduce-opacity--inactive")
})

close_icon.addEventListener("click",() => {
  div_opacity.classList.add("reduce-opacity--inactive")
  navigationLists.classList.add("head_navigation-lists--inactive")
})