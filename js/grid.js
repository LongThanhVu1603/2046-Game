
//Set number of row and column in game
const Grid_size = 3
const Cell_size = 20 
const Cell_gap = 2

export default class Grid{
    constructor(gridElement){
        gridElement.style.setProperty("--grid-size", Grid_size)
        gridElement.style.setProperty("--cell-size", `${Cell_size}vmin`)
        gridElement.style.setProperty("--cell-gap", `${Cell_gap}vmin`)
        createCellElements(gridElement)
    }
}

//Then delete HTML we add cells by JS (change Grid_size)
function createCellElements(gridElement) {
    const cells = []

    for (let i = 0; i < Grid_size * Grid_size; i++){
        const cell = document.createElement('div')
        cell.classList.add("cell")
        cells.push(cell)
        gridElement.append(cell)
    }
    return cells
}