import leaf from '@/public/leaf.svg'
import rock from '@/public/rock.svg'
import scissors from '@/public/scissors.svg'
import dynamite from '@/public/dynamite.svg'

export const choices = {
    'leaf': {
        name: 'leaf',
        color: '#FF3636',
        image: leaf,
        win: ['rock']
    },
    'rock': {
        name: 'rock',
        color: '#FFC436',
        image: rock,
        win: ['scissors']
    },
    'scissors': {
        name: 'scissors',
        color: '#2DBE44',
        image: scissors,
        win: ['leaf'],
    },
    'dynamite': {
        name: 'dynamite',
        color: '#000',
        image: dynamite,
        win: ['leaf', 'rock', 'scissors']
    }
}

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