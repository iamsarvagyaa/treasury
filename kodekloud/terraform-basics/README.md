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
