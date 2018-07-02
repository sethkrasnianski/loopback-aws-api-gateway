# Using Claudia.js to deploy LoopBack API servers

This LoopBack API server was created using the `lb` generator. It uses the premade Note API.

## Requirements

- Node v8.11.3
- Yarn v1.7.0
- LoopBack CLI v4.2.0
- Configure [claudia](https://claudiajs.com/tutorials/installing.html#configuring-access-credentials) AWS access credentials

## Deploying

The `package.json` provides commands to facilitate the  within the `scripts` object.

```sh
$ yarn run generate-proxy # Generates the proxy server's lambda handler
$ yarn run deploy         # Deploys the handler to AWS Lambda and AWS API Gateway
$ yarn run update         # Updates the deployed code after a change has been made to the API server
$ yarn run destroy        # Destroy the deployed application (prompts for confirmation)
```
