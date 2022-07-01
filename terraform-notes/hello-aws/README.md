# Hello AWS

Provision a single server in AWS with terraform.

- So, first of all install `terraform` in your system and then we can move forward to work on it.
- Here, we will look at the basics of terraform and we will learn more about later about the terraform.
- Terraform code is written in the `HashiCord Configuration Language (HCL)`. It's a declarative language that means this will describe how you want to configure your infrastructure.
- Terraform can capable of many cloud platforms and can configure your infrastructure via `terraform providers`. It supports `Google Cloud, AWS, Azure, DigitalOcean, Cloudflare` and many more providers on the go!

> Now, we will look and understand the basics via code.

```terraform

// terraform: Hello AWS

// A simple terraform script,
// to provision an EC2 instance.

// note: this is just a dummy script!

provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "testing" {
  ami               = "ami-0756a1c858554433e"
  availability_zone = "ap-south-1b"
  instance_type     = "t2.micro"

  tags = {
    "Name" = "test-1"
  }
}

```

- The first step is to configure the provider and here we are going to use `AWS` cloud platform. So, the terraform provider of AWS is simply `AWS`. Now, we will configure the provider.

```terraform

provider "aws" {
    region = "ap-south-1"
}

```

- This tells the terraform provider to use the `AWS provider` and select a region as `ap-south-1b`. So, we can deploy an infrasturcture in that region.
- For each providers there are many different resources are there like: if we want to provision an EC2 instance so, we can use `aws_instance` resource. Like this, there are many other resources like databases, load balancers and many more.

```terraform

resource "aws_instance" "testing" {
  ami               = "ami-0756a1c858554433e"
  availability_zone = "ap-south-1b"
  instance_type     = "t2.micro"

  tags = {
    Name = "test-1"
  }
}

```

- Above we created a `aws_instance` resource named as `testing` and the configurations are like: we wanna use `ami = <ami_id>` to assign an image to the terraform, then we choose an `availability_zone` and then we opted for `instance_type`. In last we gave a tag or instance name. That's it

> So, yes this is our simple terraform script to provision the single EC2 instance in AWS.

Now, there are few command line instructions to start deployment of infrastructure via terraform.

- `terraform init` :
- `terraform plan` :
- `terraform apply` :
