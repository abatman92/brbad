export const returnCorrectEnding = (q: number) => {
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