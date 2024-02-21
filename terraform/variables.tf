# Sets global variables for this Terraform project.

variable "app_name" {
  default = "edittime"
}

variable "location" {
  default = "westeurope"
}

variable "kubernetes_version" {
  default = "1.27.7"
}

output "app_name" {
  value = var.app_name
}

variable "os_command" {
  description = "Command to execute based on the operating system"
}

locals {
  is_windows = can(regex("^Win", var.os))
}

# Define the command based on the operating system
locals {
  os_command_linux = "bash Github_Secrets_linux.sh"
  os_command_windows = "powershell.exe -ExecutionPolicy Bypass -File Github_Secrets_Win.ps1"
}

# Use the appropriate command based on the operating system
locals {
  os_command = local.is_windows ? local.os_command_windows : local.os_command_linux
}