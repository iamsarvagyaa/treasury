// terraform: Configurable Web Server

// Here, we will look variables in terraform.
// And also we will create a script to deploy a configurable web server

// here: example of an input variable that checks the value you pass is a number 

# variable "number_example" {
#   description = "example of a number variable in terraform"
#   type        = number
#   default     = 78
# }

// here: example of an input variable that checks the value is a list

# variable "list_example" {
#   description = "example of a list in terraform"
#   type        = list(any)
#   default     = ["a", "b", "c", "d", "e", "f"]
# }

// here: example of an input variable that requires all the items in the list to be a numbers

# variable "list_numeric_example" {
#   description = "example of a numeric list"
#   type        = list(number)
#   default     = [1, 2]
# }

// here: example of a map that requires all values to be string.

# variable "map_example" {
#   description = "example of a map"
#   type        = map(string)
#   default = {
#     key1 = "value1"
#     key2 = "value2"
#     key3 = "value3"
#   }
# }
