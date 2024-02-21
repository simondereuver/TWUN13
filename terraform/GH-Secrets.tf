# GH-Secrets.tf
variable "os" {
  default = "windows"
}

resource "null_resource" "run_script" {
  depends_on = [
    azurerm_kubernetes_cluster.main,
    azurerm_role_assignment.main,
    azurerm_storage_container.main,
    azurerm_container_registry.main
  ]

  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = var.os == "windows" ? local.os_command_windows : local.os_command_linux
  }
}

locals {
  os_command_linux = "bash Github_Secrets_linux.sh"
  os_command_windows = "powershell.exe -ExecutionPolicy Bypass -File Github_Secrets_Win.ps1"
}
