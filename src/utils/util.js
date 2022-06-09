export const gridSort = (card) => {
    let findCol = (card) => {
        if (card[0] === "A") return 1;
        if (card[0] === "K") return 13;
        if (card[0] === "Q") return 12;
        if (card[0] === "J") return 11;
        if (card[0] === "0") return 10;
        return Number(card[0])}
    let findRow = (card) => {
        if (card[1] === "S") return 1;
        if (card[1] === "H") return 2;
        if (card[1] === "C") return 3;
        if (card[1] === "D") return 4;
        return 5
    }
    return {row: findRow(card),
        col: findCol(card),
    };
}

  