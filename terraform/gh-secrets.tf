# gh-secrets.tf
variable "os" {
  default = "windows"
}

resource "null_resource" "run_script" {
  depends_on = [
    azurerm_kubernetes_cluster.main,
    azurerm_role_assignment.main,
    azurerm_storage_container.main,
    azurerm_container_registry.main,
    azurerm_storage_account.main
  ]

  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = var.os == "windows" ? local.os_command_windows : local.os_command_linux
  }
}

locals {
  os_command_linux = "bash githubsecrets_linux.sh"
  os_command_windows = "powershell.exe -ExecutionPolicy Bypass -File githubsecrets_win.ps1"
}
