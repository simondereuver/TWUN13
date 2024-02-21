# Set STORAGE_ACCESS_KEY
$STORAGE_ACCESS_KEY = az storage account keys list --account-name edittime --resource-group edittime --query [0].value -o tsv
gh secret set -R McFluffen/TSFN-14 STORAGE_ACCESS_KEY --body $STORAGE_ACCESS_KEY

# Set CONTAINER_REGISTRY_PASSWORD
$CONTAINER_REGISTRY_PASSWORD = az acr credential show -n edittime --query passwords[0].value -o tsv
gh secret set -R McFluffen/TSFN-14 CONTAINER_REGISTRY_PASSWORD --body $CONTAINER_REGISTRY_PASSWORD

# Updatning config file
Copy-Item "$env:USERPROFILE\.kube\config" "$env:USERPROFILE\.kube\config.bak" -Recurse
Remove-Item "$env:USERPROFILE\.kube\config"
az aks get-credentials --name edittime --resource-group edittime
kubectl config current-context

# Set KUBE_CONFIG
$KUBE_CONFIG = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((Get-Content -Path "$env:USERPROFILE\.kube\config" -Raw)))
gh secret set -R McFluffen/TSFN-14 KUBE_CONFIG --body $KUBE_CONFIG
