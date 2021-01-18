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

- [https://developer.microsoft.com/en-us/graph/graph-explorer] Graph Explorer
- [https://www.sitepoint.com/get-url-parameters-with-javascript/] Get URL Parameters with JavaScript
- [https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams] URLSearchParams
- [https://github.com/microsoft/TypeScript/issues/38139] Issues
- [https://stackoverflow.com/questions/48765756/how-to-filter-group-members-in-microsoft-graph-api] Graph api filter not working fix
- [https://docs.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0] Graph Group Resource Type
- [https://docs.microsoft.com/en-us/graph/api/user-list-memberof?view=graph-rest-1.0&tabs=http#code-try-7] Graph List MemberOf
- [https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aad-tutorial] Consume MS Graph in SPFx


## Commands

- gulp package-solution
- gulp serve --nobrowser
- gulp bundle --ship
- gulp package-solution --ship

