// values

// Go have many value types:
// strings, integers, floats, boleans, etc.

package main

import "fmt"

func main() {
	fmt.Println("go" + "lang") // here both are strings
	fmt.Println("1+1 =", 1+1)
	fmt.Println("8.0/3.0 =", 8.0/3.0) // here we've floats
	fmt.Println(true && false)        // this will print false
	fmt.Println(true || false)        // this will print true
	fmt.Println(!true)                // this will print false
}
