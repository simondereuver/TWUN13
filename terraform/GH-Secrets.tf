# GH-Secrets.tf

resource "null_resource" "run_script" {
  depends_on = [
    "${path.module}storage-container.tf"
    "${path.module}storage-account.tf"
    "${path.module}container-registry.tf"
    "${path.module}kubernetes-cluster.tf"
    "${path.module}resource-group.tf"
  ]

  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "Github_Secrets_Script" {
    command = var.os_command
  }
}