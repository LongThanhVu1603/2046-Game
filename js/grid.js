
//Set number of row and column in game
const Grid_size = 4
const Cell_size = 20 
const Cell_gap = 2

export default class Grid {
    constructor(gridElement){
        gridElement.style.setProperty("--grid-size", Grid_size)
        gridElement.style.setProperty("--cell-size", `${Cell_size} vmin`)
        gridElement.style.setProperty("--cell-gap", `${Cell_gap} vmin`)
        createCellElements(gridElement)
    }
}

