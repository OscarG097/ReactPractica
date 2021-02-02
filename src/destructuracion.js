import { useImperativeHandle } from "react";


const user1 = {
    name: 'Oscar Gimenez',
    username: 'Juance',
    country: 'Argentina',
    social:{
        instagram: 'https://insta...',
        twitch: 'https://twitch...'
    }
}

const saluda = (user) => {
    const {name, social} = user
    const {twitch} = social

    console.log(
        `Hola, yo soy ${name}, strimeo en ${twitch}`
    )
}

saluda (user1)