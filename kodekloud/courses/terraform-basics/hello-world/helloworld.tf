// Hello World
// this will create a file named "helloworld.txt" with content "Hello World!"
resource "local_file" "helloworld" {
  filename = "./helloworld.txt"
  content  = "Hello World!"
}
