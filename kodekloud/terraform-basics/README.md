# Terraform Basics Training Course

To install terraform in your operating system:

```shell
git clone https://github.com/hashicorp/terraform.git
cd clone && go install
```

### Introduction

Types of IaC tools:

- Configurations Management
  - Ansible
  - Chef
  - Puppet
  - Saltstack
- Server Templating
  - Docker
  - HashiCorp Packer
  - HashiCorp Vagrant
- Provisioning Iac tool
  - HashiCorp Terraform
  - AWS CloudFormation

Why Terraform?

Because terraform have numerous number of providers. So, what is providers? - Providers are like a library which helps us to provision the infrastructure environment. Below are few providers:

```
Physical Machines, VMWare, AWS, Azure, GCP, BigIP, Cloudflare, DNS, Palo Alto, Infoblox, DataDog, Grafana, Auth0, Wavefront, Sumo Logic, InfluxDB, MongoDB, MySQL, PostgreSQL, VCS and many more...
```

Terraform uses HashiCorp Configuration Language (HCL) declarative language. HCL syntax are way more user friendly and easy to write and understand. I learned this in almost half-an-hour. Respect ++ for HashiCorp :)

### Terraform Basics

As we previously discuss that terraform uses HashiCorp Configuration Language (HCL) declarative language. We can create a file `helloworld.tf` like this in any text-editor. Make sure the extension is `*.tf`.

So, `Resource` in terraform is like an object that terraform manages. It could be a file, services or instances. Let's understand HCL syntax:

```
<block> <block_type> <block_name> {
  key1 = "value1"
  key2 = "value2"
}
```

Let's understand as an example **Hello World**. We are creating a file name helloworld.txt with content `Hello World`.

```hcl
resource "local_file" "helloworld" {
  filename = "/root/helloworld.txt"
  content = "Hello World!"
}
```

So, **resource** is a block name, **local_file** is a block type and **helloworld** is resource name. In block type we have local_file, here **local** is provider and **file** is resource. After that, resource block is enclosed with curly brackets. Below, we have arguments as **filename and content** that have individual values.

Terraform provisioning consists of four steps:

- create and write the terraform configuration file.
- run `terraform init` command to initiate the terraform project.
- run `terraform plan` command to review the execution plan.
- at last run `terraform apply` command to apply the provisioning.
