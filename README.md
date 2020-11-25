# graph-member-of-redirect

## Summary

Web Part that connects to MS Graph API to retrieve the current user's memberOf data and redirect to another page accordingly.
In addition to a class created for handling query parameters using "URLSearchParams".


## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)


## Prerequisites

> Graph API permissons allow after deployment.


## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

- Connection to Graph API client
- Redirection
- Page Query parameters class 

## References

- [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
- [Get URL Parameters with JavaScript](https://www.sitepoint.com/get-url-parameters-with-javascript/)
- [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [Issues](https://github.com/microsoft/TypeScript/issues/38139)

## Commands

- gulp package-solution
- gulp serve --nobrowser
- gulp bundle --ship
- gulp package-solution --ship

