/**
 * Finds the shortest path between two points on a map.
 *
 * @param {boolean[][]} A - The map represented by a boolean matrix, where 'true' indicates a free cell and 'false' indicates a blocked cell.
 * @param {number[]} P - The coordinates of the starting point, represented as an array [row, col].
 * @param {number[]} Q - The coordinates of the destination point, represented as an array [row, col].
 * @returns {number} The minimum distance between the starting and destination points, or -1 if there is no path.
 */
function pathfind(A, P, Q) {
    // Get the number of rows and columns
    const rows = A.length;
    const cols = A[0].length;

    // Check if the starting point is a valid cell
    if (!A[P[0]][P[1]]) {
        return -1; // Invalid starting point
    }

    // Keep track of visited cells
    const queue = [];

    const visited = new Array(rows);
    for (let i = 0; i < rows; i++) {
        visited[i] = new Array(cols).fill(false);
    }

    // Define the possible directions to move
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    /**
     * Checks if a given cell is valid and not visited.
     *
     * @param {number} row - The row index of the cell.
     * @param {number} col - The column index of the cell.
     * @returns {boolean} True if the cell is valid and not visited, false otherwise.
     */
    const isValid = (row, col) => {
        return row >= 0 && row < rows && col >= 0 && col < cols && A[row][col] && !visited[row][col];
    };

    /**
     * Explores the neighbors of a given cell and updates the visited cells.
     *
     * @param {number} row - The row index of the cell.
     * @param {number} col - The column index of the cell.
     * @param {number} dist - The distance from the starting point to the current cell.
     * @returns {number} The minimum distance between the starting and destination points, or -1 if there is no path.
     */
    const exploreNeighbors = (row, col, dist) => {
        visited[row][col] = true;

        if (row === Q[0] && col === Q[1]) {
            return dist;
        }

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (isValid(newRow, newCol)) {
                queue.push([newRow, newCol, dist + 1]);
            }
        }

        return -1; // Path not found
    };

    queue.push([...P, 0]);

    while (queue.length > 0) {
        const [row, col, dist] = queue.shift();

        const result = exploreNeighbors(row, col, dist);
        if (result !== -1) {
            return result;
        }
    }

    return -1; // Path not found
}

// Test case
const map = [
    [true, true, true, true, true, true],
    [true, false, false, false, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
];

const P = [0, 1];
const Q = [3, 2];

console.log(pathfind(map, P, Q)); // Output: 6


module.exports = pathfind;