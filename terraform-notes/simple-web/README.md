# Simple Web

```hcl

// terraform: Simple Web Server

// A simple terraform script
// to provision an EC2 instance &
// runs a simple web server on port 8080

provider "aws" {
  region = "ap-south-1"
}

resource "aws_security_group" "instance" {
  name = "sg-example"

  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "server" {
  ami                    = "ami-0756a1c858554433e"
  instance_type          = "t2.micro"
  availability_zone      = "ap-south-1c"
  vpc_security_group_ids = [aws_security_group.instance.id]

  user_data = <<-EOF
              #!/bin/bash
              echo "Hello Terraform!" > index.html
              nohup busybox http -f -p 8080 &
              EOF

  tags = {
    Name = "simple-web"
  }
}

```
