<h1 align="center">PLG Launchbase API</h1>

<h2 align="center">
API for SpaceX's launches data.
</h2>

<h3 align="center">
The goal was to create an API to consume the SpaceX API and return launches data.
</h3>

<h4 align="center">
  <i>
    As we don't need to persist data this backend is pretty much a presentation layer over the SpaceX API.
    So it gets only the needed resources to populate the frontend and organize routes.
  </i>
</h4>

## Usage

### GET previous launch:
```http
GET https://plg-launchbase-backend.herokuapp.com/api/previous
```

```json
{
  "id": "6161d2006db1a92bfba85356",
  "success": true,
  "details": null,
  "name": "CRS-24",
  "date": "2021-08-29T07:14:00.000Z"
}
```

### GET next launch:
```http
GET https://plg-launchbase-backend.herokuapp.com/api/next
```

```json
{
  "id": "6161c7d26db1a92bfba85346",
  "success": null,
  "details": null,
  "name": "Starlink 2-2 (v1.5)",
  "date": "2021-10-01T00:00:00.000Z"
}
```

### GET past launches (returns an array of launches):
```http
GET https://plg-launchbase-backend.herokuapp.com/api/past
```

```json
[
  {
    "id": "5eb87cd9ffd86e000604b32a",
    "success": false,
    "details": "Engine failure at 33 seconds and loss of vehicle",
    "name": "FalconSat",
    "date": "2006-03-24T22:30:00.000Z"
  },
  {
    "id": "5eb87cdaffd86e000604b32b",
    "success": false,
    "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "name": "DemoSat",
    "date": "2007-03-21T01:10:00.000Z"
  },
  ...
]
```

### GET upcoming launches (returns an array of launches):
```http
GET https://plg-launchbase-backend.herokuapp.com/api/upcoming
```

```json
[
  {
    "id": "6161c7d26db1a92bfba85346",
    "success": null,
    "details": null,
    "name": "Starlink 2-2 (v1.5)",
    "date": "2021-10-01T00:00:00.000Z"
  },
  {
    "id": "5fe3b15eb3467846b324216d",
    "success": null,
    "details": null,
    "name": "Crew-3",
    "date": "2021-10-30T06:43:00.000Z"
  },
  ...
]
```

<h5 align="center">
Disclaimer: The API/backend is deployed at Heroku so the request may take a while depending on the time and/or idleness of the app (as using the free tier).
</h5>
<h6 align="center">
Also, the next and previous data is based on the SpaceX API datetime, so it may not be so accurate as it depends on the API update (this logic may be implemented here in the future in order to get more accurate data).
</h6>
