const pathfind = require('../pathfind/pathfind');

describe('pathfind', () => {
    test('should return the minimum distance between the starting and destination points - map 5 x 5', () => {
        const map = [
            [true, true, true, true, true],
            [true, false, false, false, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true]
        ];

        const P = [0, 1];
        const Q = [3, 2];

        expect(pathfind(map, P, Q)).toBe(6);
    });

    test('should return the minimum distance between the starting and destination points - irregular map map 5 x 6', () => {
        const map = [
            [true, true, true, true, true],
            [true, false, false, false, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
        ];

        const P = [0, 1];
        const Q = [5, 2];

        expect(pathfind(map, P, Q)).toBe(8);
    });

    test('should return the minimum distance between the starting and destination points - map 6 x 6', () => {
        const map = [
            [false, true, true, true, true, true],
            [true, false, false, false, true, true],
            [true, false, false, false, true, false],
            [true, true, true, true, true, false],
            [false, false, false, true, false, false],
            [true, true, true, true, true, true]
        ];

        const P = [0, 1];
        const Q = [5, 5];

        expect(pathfind(map, P, Q)).toBe(11);
    });

    test('should return -1 if there is no path - map 5 x 5', () => {
        const map = [
            [true, true, true, true, true],
            [true, false, false, false, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, false]
        ];

        const P = [0, 1];
        const Q = [4, 4];

        expect(pathfind(map, P, Q)).toBe(-1);
    });

    test('should return -1 if there is no path - map 6 x 6', () => {
        const map = [
            [false, true, true, true, true, true],
            [true, false, false, false, true, true],
            [true, false, false, false, true, false],
            [true, true, true, true, true, false],
            [false, false, false, true, false, false],
            [true, true, true, true, true, false]
        ];

        const P = [0, 1];
        const Q = [5, 5];

        expect(pathfind(map, P, Q)).toBe(-1);
    });
    
    test('should return -1 once the starting point "P" is in a false field', () => {
        const map = [
            [false, true, true, true, true, true],
            [true, false, false, false, true, true],
            [true, false, false, false, true, false],
            [true, true, true, true, true, false],
            [false, false, false, true, false, false],
            [true, true, true, true, true, true]
        ];

        const P = [0, 0];
        const Q = [5, 5];

        expect(pathfind(map, P, Q)).toBe(-1);
    });

    test('should return -1 once the ending point "Q" is in a false field', () => {
        const map = [
            [true, true, true, true, true, true],
            [true, false, false, false, true, true],
            [true, false, false, false, true, false],
            [true, true, true, true, true, false],
            [false, false, false, true, false, false],
            [true, true, true, true, true, false]
        ];

        const P = [0, 0];
        const Q = [5, 5];

        expect(pathfind(map, P, Q)).toBe(-1);
    });

    test('should return -1 once the starting "P" and ending point "Q" are in a false fields', () => {
        const map = [
            [false, true, true, true, true, true],
            [true, false, false, false, true, true],
            [true, false, false, false, true, false],
            [true, true, true, true, true, false],
            [false, false, false, true, false, false],
            [true, true, true, true, true, false]
        ];

        const P = [0, 0];
        const Q = [5, 5];

        expect(pathfind(map, P, Q)).toBe(-1);
    });


});