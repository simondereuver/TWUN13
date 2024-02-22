#!/bin/bash

# Set STORAGE_ACCESS_KEY
#STORAGE_ACCESS_KEY=$(az storage account keys list --account-name edittime --resource-group edittime --query '[0].value' -o tsv)
#gh secret set -R McFluffen/TSFN-14 STORAGE_ACCESS_KEY --body "$STORAGE_ACCESS_KEY"

# Set CONTAINER_REGISTRY_PASSWORD
#CONTAINER_REGISTRY_PASSWORD=$(az acr credential show -n edittime --query passwords[0].value -o tsv)
#gh secret set -R McFluffen/TSFN-14 CONTAINER_REGISTRY_PASSWORD --body "$CONTAINER_REGISTRY_PASSWORD"

# Updating config file
#cp "$HOME/.kube/config" "$HOME/.kube/config.bak"
#rm "$HOME/.kube/config"
#az aks get-credentials --name edittime --resource-group edittime
#kubectl config current-context

# Set KUBE_CONFIG
#KUBE_CONFIG=$(certutil -encode "$HOME/.kube/config" - | grep -v '^' | grep -v 'CERTIFICATE' | tr -d '\n')
#gh secret set -R McFluffen/TSFN-14 KUBE_CONFIG --body "$KUBE_CONFIG"


#Sajmon cheatcodes:
export APP_NAME="edittime"

export CONTAINER_REGISTRY_LOGIN_SERVER=$(az acr show -n "$APP_NAME" --query loginServer -o tsv)
#echo "$CONTAINER_REGISTRY_LOGIN_SERVER"

export CONTAINER_REGISTRY_USERNAME=$(az acr credential show -n "$APP_NAME" --query username -o tsv)
#echo "$CONTAINER_REGISTRY_USERNAME"

export CONTAINER_REGISTRY_PASSWORD=$(az acr credential show -n "$APP_NAME" --query passwords[0].value -o tsv)
#echo "$CONTAINER_REGISTRY_PASSWORD"

az aks get-credentials --name "$APP_NAME" --resource-group "$APP_NAME"
#kubectl config current-context

export KUBE_CONFIG=$(cat ~/.kube/config | base64 -w 0)
#echo "$KUBE_CONFIG"

gh secret set CONTAINER_REGISTRY_LOGIN_SERVER --body "$CONTAINER_REGISTRY_LOGIN_SERVER"
gh secret set CONTAINER_REGISTRY_USERNAME --body "$CONTAINER_REGISTRY_USERNAME"
gh secret set CONTAINER_REGISTRY_PASSWORD --body "$CONTAINER_REGISTRY_PASSWORD"
gh secret set KUBE_CONFIG --body "$KUBE_CONFIG"

#gh workflow run eventmscicd.yml --ref feature-hpa #replace eventmscicd.yml with workflow file you want to run and feature-hpa with branch you want to run it from