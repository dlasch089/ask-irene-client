## Created Components:

ng g s services/spot
ng g s services/selector
ng g s services/auth
ng g s services/filter



ng g c pages/page-user
ng g c pages/page-spot
ng g c pages/page-form
ng g c pages/page-list-all // Needs to be deleted again!
ng g c pages/page-spots
ng g c pages/page-me
ng g c pages/page-home

ng g c components/spot-list
ng g c components/spot-list-detail
ng g c components/user-detail
ng g c components/filter
ng g c components/filter-select
ng g c components/spot-detail
ng g c components/spot-list

ng g c components/map-auto-complete
ng g c components/map-spots

# Auth

ng g guard guards/require-anon
ng g guard guards/require-auth

ng g c pages/page-login
ng g c pages/page-signup

ng g c components/auth-login
ng g c components/auth-signup

## Installed packages

# Google Maps

npm install @agm/core --save

npm install @types/googlemaps --save-dev

npm install @types/googlemaps --save --dev

npm install @agm/core --save

# Material
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations