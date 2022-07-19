# Terraform Basics Training Course

To install terraform in your operating system:

```shell
git clone https://github.com/hashicorp/terraform.git
cd clone && go install
```

## Introduction

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

## Terraform Basics

As we previously discuss that terraform uses HashiCorp Configuration Language (HCL) declarative language. We can create a file `helloworld.tf` like this in any text-editor. Make sure the extension is `*.tf`.

So, `Resource` in terraform is like an object that terraform manages. It could be a file, services or instances. Let's understand HCL syntax:

```
<block> <block_type> <block_name> {
  key1 = "value1"
  key2 = "value2"
}
```

### Hello World

Let's understand as an example **Hello World**. We are creating a file name helloworld.txt with content `Hello World`.

```hcl
resource "local_file" "helloworld" {
  filename = "/root/helloworld.txt"
  content = "Hello World!"
}
```

So, **resource** is a block name, **local_file** is a block type and **helloworld** is resource name. In block type we have local_file, here **local** is provider and **file** is resource. After that, resource block is enclosed with curly brackets. Below, we have arguments as **filename and content** that have individual values.

> Please look at [Hello World](./hello-world/helloworld.tf) example here.

Terraform provisioning consists of four steps:

- create and write the terraform configuration file.

  ```hcl
  resource "local_file" "helloworld" {
    filename = "/root/helloworld.txt"
    content = "Hello World!"
  }
  ```

- run `terraform init` command to initiate the terraform project.

  ```shell

  hello-world › terraform init

  Initializing the backend...

  Initializing provider plugins...
  - Finding latest version of hashicorp/local...
  - Installing hashicorp/local v2.2.3...
  - Installed hashicorp/local v2.2.3 (signed by HashiCorp)

  Terraform has created a lock file .terraform.lock.hcl to record the provider
  selections it made above. Include this file in your version control repository
  so that Terraform can guarantee to make the same selections by default when
  you run "terraform init" in the future.

  Terraform has been successfully initialized!

  You may now begin working with Terraform. Try running "terraform plan" to see
  any changes that are required for your infrastructure. All Terraform commands
  should now work.

  If you ever set or change modules or backend configuration for Terraform,
  rerun this command to reinitialize your working directory. If you forget, other
  commands will detect it and remind you to do so if necessary.

  ```

- run `terraform plan` command to review the execution plan.

  ```shell

  hello-world › terraform plan

  Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
    + create

  Terraform will perform the following actions:

    # local_file.helloworld will be created
    + resource "local_file" "helloworld" {
        + content              = "Hello World!"
        + directory_permission = "0777"
        + file_permission      = "0777"
        + filename             = "./helloworld.txt"
        + id                   = (known after apply)
      }

  Plan: 1 to add, 0 to change, 0 to destroy.

  Note: You didn't use the -out option to save this plan, so Terraform can't guarantee to take exactly these actions if you run "terraform apply" now.

  ```

- at last run `terraform apply` command to apply the provisioning.

  ```shell

  hello-world › terraform apply

  Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
    + create

  Terraform will perform the following actions:

    # local_file.helloworld will be created
    + resource "local_file" "helloworld" {
        + content              = "Hello World!"
        + directory_permission = "0777"
        + file_permission      = "0777"
        + filename             = "./helloworld.txt"
        + id                   = (known after apply)
      }

  Plan: 1 to add, 0 to change, 0 to destroy.

  Do you want to perform these actions?
    Terraform will perform the actions described above.
    Only 'yes' will be accepted to approve.

    Enter a value: yes

  local_file.helloworld: Creating...
  local_file.helloworld: Creation complete after 0s [id=2ef7bde608ce5404e97d5f042f95f89f1c232871]

  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

  ```

- We can also run `terraform show` command to view the details of configuration.

  ```shell
  hello-world › terraform show
  # local_file.helloworld:
  resource "local_file" "helloworld" {
      content              = "Hello World!"
      directory_permission = "0777"
      file_permission      = "0777"
      filename             = "./helloworld.txt"
      id                   = "2ef7bde608ce5404e97d5f042f95f89f1c232871"
  }
  ```

- If we update the `main.tf`, we need to rerun the `terraform apply` command to provisioned config.
- Or, if we want to destroy the created file, we have to run `terraform destroy` command.

### Using Terraform Providers

Let's look providers in more detailed way.

- When we type `terraform init` command, terraform create a directory hierarchy like this:

  ```

  project_dir
  ├── **.terraform**
  │   └── providers
  │       └── registry.terraform.io
  │           └── hashicorp
  │               └── local
  │                   └── 2.2.3
  │                       └── darwin_arm64
  │                           └── terraform-provider-local_v2.2.3_x5
  ├── **.terraform.lock.hcl**
  └── main.tf

  ```

- In above hierarchy, `terraform init` command created one directory named `.terraform` and a file named `.terraform.lock.hcl`. So, why terraform created these files and directories? : terraform stores providers informations there.
- By default terraform install latest version of providers.

### Configuration Directory

- We can create many configuration files like `cat.tf`, `local.tf`. When we execute the `terraform init|plan|apply` command, terraform provision all config files at once.
- We can also create a single configuration file with many providers or resources.
- But, suggested naming conventions are:
  - **main.tf** : main configuration file contains providers and all resources.
  - **variables.tf** : contains variable declarations
  - **outputs.tf** : contains outputs from resources
  - **provider.tf** : contains provider definitions
