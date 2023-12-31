/*
    Retrieves all elements in the localStorage that correspond to a match

    Return an array with all data
*/

export function getGoodStorage() {
    const allStorage = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) || ""
        if (key.includes('match-'))
            allStorage.push(
                {
                    key: key,
                    value: localStorage.getItem(key)
                }
            )
    }

    return allStorage
}