// terraform: Configurable Web Server

// Here, we will look variables in terraform.
// And also we will create a script to deploy a configurable web server

// here: example of an input variable that checks the value you pass is a number 

# variable "number_example" {
#   description = "example of a number variable in terraform"
#   type        = number
#   default     = 78
# }

variable "list_example" {
  description = "example of a list in terraform"
  type        = list(any)
  default     = ["a", "b", "c", "d", "e", "f"]
}
