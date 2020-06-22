## Introweek frontend

### Tech
- React
- React Router
- Material UI
- Formik
- Typescript

### Setup
- Copy `.env.sample` into `.env`
- Update settings to correct values

### Folder structure
- api

   Contains files for connecting to backend systems etc. These are split per domain and only contain "fetching" logic
- assets

   Static assest like logos
- components

   Reusable components used by multiple pages/layout files
- layout

   Components for structuring pages
- pages

   The actual "routes" visible in the client. 
- services

   Business logic wrappers that make use of the api clients and could contain things like formatters.
- theme

   Setup for styling
- utils

   Utility files that are used throught the repo