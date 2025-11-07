# Mock API for Salesforce Apex Callouts

Simple Node.js/Express mock server to simulate an external API for Salesforce callouts.

## Run locally
```bash
npm install
npm start
```

Server runs on http://localhost:3000/api/mock

## Expose with ngrok
```bash
ngrok http 3000
```

Use the HTTPS URL shown by ngrok as your Salesforce callout endpoint.
