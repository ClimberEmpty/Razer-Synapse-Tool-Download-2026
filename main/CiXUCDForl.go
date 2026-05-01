package main
import "fmt"
func main() {
n := 10
for i := 0; i < n; i++ {
fmt.Println(fibonacci(i))
}
}
func fibonacci(n int) int {
if n <= 0 {
return 0
}
if n == 1 {
return 1
}
return fibonacci(n-1) + fibonacci(n-2)
}
func iterativeFibonacci(n int) int {
if n <= 0 {
return 0
}
if n == 1 {
return 1
}
a, b := 0, 1
for i := 2; i <= n; i++ {
next := a + b
a = b
b = next
}
return b
}
func printIterativeFibonacci(n int) {
for i := 0; i < n; i++ {
fmt.Println(iterativeFibonacci(i))
}
}
func mainIterative() {
n := 10
printIterativeFibonacci(n)
}
