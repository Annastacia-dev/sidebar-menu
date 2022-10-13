const menuToggle = document.querySelector('.menu-toggle'); // get the menu toggle element

const navigation = document.querySelector('.navigation'); // get the navigation element

const listItems = document.querySelectorAll('.list-item'); // get all the list items

menuToggle.onclick = () => {
  navigation.classList.toggle('open'); // toggle the class 'open' on the navigation element
}

listItems.forEach(item => { 
    item.onclick = () => {
        listItems.forEach(item => {
            item.classList.remove('active'); // remove the class 'active' from all list items
            item.classList.add('open'); // remove the class 'open' from all list items
        } )
    }
})

