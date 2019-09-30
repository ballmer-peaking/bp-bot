[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

## Tools
- VSCode
    - CosmosDB Extension
    - Azure Functions Extension
- Nodejs/NPM
- Azure CLI

## Deployment:

Do this once:
```
az group create --name bp-bot --location "westus"
```

Dev
```
az group deployment create --resource-group bp-bot --template-file "$HOME/azuredeploy.json"
```
