import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'
import dynamite from '@/public/dynamite.svg'

/* 
To add a game element:

import the image like this 'import [imageName] from [urlImage]'.

And add your new element to the 'choices' variable like this 

'[elemName]': {
    name: [elemName],
    color: [borderColorButton],
    image: [image],
    win: [table containing all the other elements against which it can win]
},
*/

export const choices = {
    'rock': {
        name: 'rock',
        color: '#FF3636',
        image: rock,
        win: ['scissors']
    },
    'leaf': {
        name: 'leaf',
        color: '#FFC436',
        image: leaf,
        win: ['rock']
    },
    'scissors': {
        name: 'scissors',
        color: '#2DBE44',
        image: scissors,
        win: ['leaf'],
    },
    // 'dynamite': {
    //     name: 'dynamite',
    //     color: '#000',
    //     image: dynamite,
    //     win: ['leaf', 'rock', 'scissors']
    // }
}

/*
    check which wins

    return 0 if the user lose
    return 1 if the user win
    return 2 if equal
*/
export function wichWin(player: string, ai: string) {
    if (player === ai) 
        return 2

    if (player in choices && ai in choices) {
        const playerItem = choices[player as keyof typeof choices]
        const aiItem = choices[ai as keyof typeof choices]
        
        if (playerItem.win.includes(aiItem.name)){
            return 1
        }
    }

    return 0
}