export default function wichWin(player: string, ai: string) {
    if (player === ai) 
        return 2

    if ((player === 'rock' && ai === 'scissors') ||
        (player === 'scissors' && ai === 'leaf') ||
        (player === 'leaf' && ai === 'rock')
    ) {
        return 1
    }
    
    return 0
}