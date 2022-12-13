export const returnCorrectEnding = (q: number) => {
    if (q === 11 || q === 12 || q === 13) return "Персонажей"
    const stringQArr = q.toString().split('');
    const lastNumber = Number(stringQArr[stringQArr.length - 1]);
    switch (lastNumber) {
        case 1: {
            return "Персонаж"
        }
        case 2: {
            return "Персонажа"
        }
        case 3: {
            return "Персонажа"
        }
        default: {
            return "Персонажей"
        }
    }
}