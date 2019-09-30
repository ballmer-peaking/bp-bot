[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

## Tools
- VSCode
    - CosmosDB Extension
    - Azure Functions Extension
- Nodejs/NPM
- Azure CLI

## Deployment:

**Dev**
Create the resource group:
```
az group create --name bp-bot-dev --location "westus"
```

Resources
```
az group deployment create --resource-group bp-bot-dev --template-file "$HOME/azuredeploy.json --parameter "azuredeploy.dev.json"
```

**Test**
Create the resource group:
```
az group create --name bp-bot-test --location "westus"
```

Dev Resources
```
az group deployment create --resource-group bp-bot-test --template-file "$HOME/azuredeploy.json" --parameter "azuredeploy.test.json"
```

**Prod**
Create the resource group:
```
az group create --name bp-bot-prod --location "westus"
```

Dev Resources
```
az group deployment create --resource-group bp-bot-prod --template-file "$HOME/azuredeploy.json" --parameter "azuredeploy.prod.json"
```
