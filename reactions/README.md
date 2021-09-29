# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Requirements

The following setup is required to run the project:

### `pubnub account`

Sign up at [https://admin.pubnub.com](pubnub) to get configuration keys

### `pubnub.config.json`

Create a file in `src` folder named pubnub.config.json, and add the following configuration:

```
{
  "publishKey": "<your_publishKey>",
  "subscribeKey": "<your_subscribeKey>",
  "secretKey": "<your_secretKey>"
}
```
