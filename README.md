# BournemouthBindicator

[![Project Status: Inactive – The project has reached a stable, usable state but is no longer being actively developed; support/maintenance will be provided as time allows.](https://www.repostatus.org/badges/latest/inactive.svg)](https://www.repostatus.org/#inactive)

A small React webapp which gets the next bin collection data from BCP councils API!

## How does it work?

This web app contains a 

```javascript
<Bindicator />
``` 
component which displays an ordered list of which bins are due next, from Recyling, Food Waste and Rubbish. This component fetchs a bin lookup from the bindicator controller in this webapp, which calls BCP councils API using RestSharp.

The component has an interval which will call the api again after an hour delay.

This app also displays the returned data as JSON underneat, using [react-json-view](https://www.npmjs.com/package/react-json-view).

# Development

After cloning the repo, you'll have to setup the secrets file. In Visual Studio 2019, right click the solution and select "Manage User Secrets". This should either setup secret manager or open a secrets.json file.
In this secrets.json file, add this structure
```json
{
  "Lookup": {
    "Uprn": "YOURUPRNHERE"
  }
}
```

You'll have to find the UPRN (unique property reference number) for your address. I did this by using [BCP councils bin collection lookup](https://online.bcpcouncil.gov.uk/services/bindaylookup/), and watching the network in request in dev tools after searching my address.
After this, just run the solution using IIS Express and you should be good to go!

The source for Bindicator is located in **./ClientApp/src**. Within this directory you'll find a ts and js folder, the ts folder is compiled into the js folder, and App.js hooks into the js folder. As long as Home.tsx remains the root this won't need a major restructure. 

To compile the ts, open a terminal and type

```bash
$ cd ./ClientApp/src
$ tsc -w
```

You may have to go into tsconfig.json and change
```json
"compilerOptions": {
  "noEmit": "false"
}
```

This is an issue with the build tooling.
