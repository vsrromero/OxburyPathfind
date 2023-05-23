# Oxbury Pathfind
[Solution Details](./pathfind/README.md) | [Tests Results](./pathfind/README.md#tests) | [Tests Source Code](./tests/pathfind.test.js) | [Challenge Source Code](./pathfind/pathfind.js) | [Comments](#comments-section)

Imagine representing a grid-shaped game map as a 2-dimensional array. Each value of this array is
boolean `true` or `false` representing whether that part of the map is passable (a floor) or blocked
(a wall).

Write a function that takes such a 2-dimensional array `A` and 2 vectors `P` and `Q`, with `0,0` being the top left corner of the map and returns the distance of the shortest path between those points, respecting the walls in the map.

eg. Given the map (where `.` is passable - `true`, and `#` is blocked - `false`)

```
. P . . .
. # # # .
. . . . .
. . Q . .
. . . . .
```

then `pathfind(A, P, Q)` should return `6`.

_Please avoid using libraries to implement the algorithmic side of this challenge, other libraries (such as PHPUnit or Jest for testing) are welcome._

## What to do

1. Clone/Fork this repo or create your own
2. Implement the function described above in any mainstream language you wish
3. Provide unit tests for your submission
4. Fill in the section(s) below

## Comments Section

<!---
Please fill in the sections below after you complete the challenge.
--->

### What I'm Pleased With

This task was challenging and reminded me of my university days when some exercises took a lot of time but brought satisfaction upon completion. Some even required reading algorithm books to learn how to apply logic rules, as if we were following business rules, where we needed to read, interpret, and apply them.
  
This task brought many problems to solve, research to be done, and several hours staring at a point where I found myself stuck. But after many attempts and errors, I managed to complete it.

### What I Would Have Done With More Time

If I had more time, I would approach this task using other languages such as PHP and Python as well. The reason I chose Node.js was that I assessed the task and understood that for the specific requirements, Node.js would be a more appropriate language, similar to Python or C. From my perspective, this script would be executed as if it were a low-level language rather than, for example, on the web.
  
Additionally, I would create a webpage using PHP, HTML, CSS, and JavaScript, showcasing not only the logic I attempted to apply but also other possible solutions. After all, an algorithm is not unique; it can always be improved or approached differently.



[Top](#oxbury-pathfind) | [Solution Details](./pathfind/README.md) | [Tests Results](./pathfind/README.md#tests) | [Tests Source Code](./tests/pathfind.test.js) | [Challenge Source Code](./pathfind/pathfind.js)
