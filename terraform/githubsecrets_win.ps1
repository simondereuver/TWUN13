$APP_NAME = "edittime"

# Set CONTAINER_REGISTRY_LOGIN_SERVER
$CONTAINER_REGISTRY_LOGIN_SERVER= az acr show -n "$APP_NAME" --query loginServer -o tsv
gh secret set -R McFluffen/TSFN-14 CONTAINER_REGISTRY_LOGIN_SERVER --body "$CONTAINER_REGISTRY_LOGIN_SERVER"

# Set CONTAINER_REGISTRY_USERNAME
$CONTAINER_REGISTRY_USERNAME= az acr credential show -n "$APP_NAME" --query username -o tsv
gh secret set -R McFluffen/TSFN-14 CONTAINER_REGISTRY_USERNAME --body "$CONTAINER_REGISTRY_USERNAME"

# Set STORAGE_ACCESS_KEY
$STORAGE_ACCESS_KEY = az storage account keys list --account-name $APP_NAME --resource-group $APP_NAME --query [0].value -o tsv
gh secret set -R McFluffen/TSFN-14 STORAGE_ACCESS_KEY --body $STORAGE_ACCESS_KEY

# Set CONTAINER_REGISTRY_PASSWORD
$CONTAINER_REGISTRY_PASSWORD = az acr credential show -n $APP_NAME --query passwords[0].value -o tsv
gh secret set -R McFluffen/TSFN-14 CONTAINER_REGISTRY_PASSWORD --body $CONTAINER_REGISTRY_PASSWORD

# Updatning config file
Copy-Item "$env:USERPROFILE\.kube\config" "$env:USERPROFILE\.kube\config.bak" -Recurse
Remove-Item "$env:USERPROFILE\.kube\config"
az aks get-credentials --name $APP_NAME --resource-group $APP_NAME
kubectl config current-context

# Set KUBE_CONFIG
$KUBE_CONFIG = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((Get-Content -Path "$env:USERPROFILE\.kube\config" -Raw)))
gh secret set -R McFluffen/TSFN-14 KUBE_CONFIG --body $KUBE_CONFIG
