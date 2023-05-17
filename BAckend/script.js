let container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => reload(data))


function reload(arr) {
    for (let item of arr) {
        let basic = document.createElement('div')
        let div = document.createElement('div')
        let img = document.createElement('img')
        let h2 = document.createElement('h1')
        div.classList.add('active')
        img.classList.add('size')
        h2.classList.add('sss')

        h2.innerHTML = item.title
        img.src = item.url

        container.append(basic)
        basic.append(div)
        div.append(h2,img)
    }
}