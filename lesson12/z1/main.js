fetch(`https://mountain-app-js.herokuapp.com/cards`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(el => {
            let image = document.body.appendChild(document.createElement('img'))
            image.setAttribute('src', el.itemImg)
        });
    })