
// This tells you that by default, enums get values as 0 , 1, 2...

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
console.log(Direction.Down)
