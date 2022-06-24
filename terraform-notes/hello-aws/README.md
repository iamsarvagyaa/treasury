# Hello AWS

```hcl

// terraform: Hello AWS

// A simple terraform script,
// to provision an EC2 instance

// note: just a dummy script!

provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "testing" {
  ami               = "ami-0756a1c858554433e"
  availability_zone = "ap-south-1b"
  instance_type     = "t2.micro"

  tags = {
    Name = "test-1"
  }
}

```
