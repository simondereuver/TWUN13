#!/bin/bash

# Set STORAGE_ACCESS_KEY
STORAGE_ACCESS_KEY=$(az storage account keys list --account-name edittime --resource-group edittime --query [0].value -o tsv)
gh secret set -R McFluffen/TSFN-14 STORAGE_ACCESS_KEY --body "$STORAGE_ACCESS_KEY"

# Set CONTAINER_REGISTRY_PASSWORD
CONTAINER_REGISTRY_PASSWORD=$(az acr credential show -n edittime --query passwords[0].value -o tsv)
gh secret set -R McFluffen/TSFN-14 CONTAINER_REGISTRY_PASSWORD --body "$CONTAINER_REGISTRY_PASSWORD"

# Set KUBE_CONFIG
KUBE_CONFIG=$(certutil -encode "$HOME/.kube/config" - | grep -v "^" | grep -v "CERTIFICATE")
gh secret set -R McFluffen/TSFN-14 KUBE_CONFIG --body "$KUBE_CONFIG"
