## Files and Folder

This is the project structure that you will get upon the download:
```
notus-angular
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── browserslist
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── karma.conf.js
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── cards
│   │   │   │   ├── card-bar-chart
│   │   │   │   │   ├── card-bar-chart.component.html
│   │   │   │   │   └── card-bar-chart.component.ts
│   │   │   │   ├── card-line-chart
│   │   │   │   │   ├── card-line-chart.component.html
│   │   │   │   │   └── card-line-chart.component.ts
│   │   │   │   ├── card-page-visits
│   │   │   │   │   ├── card-page-visits.component.html
│   │   │   │   │   └── card-page-visits.component.ts
│   │   │   │   ├── card-profile
│   │   │   │   │   ├── card-profile.component.html
│   │   │   │   │   └── card-profile.component.ts
│   │   │   │   ├── card-settings
│   │   │   │   │   ├── card-settings.component.html
│   │   │   │   │   └── card-settings.component.ts
│   │   │   │   ├── card-social-traffic
│   │   │   │   │   ├── card-social-traffic.component.html
│   │   │   │   │   └── card-social-traffic.component.ts
│   │   │   │   ├── card-stats
│   │   │   │   │   ├── card-stats.component.html
│   │   │   │   │   └── card-stats.component.ts
│   │   │   │   └── card-table
│   │   │   │       ├── card-table.component.html
│   │   │   │       └── card-table.component.ts
│   │   │   ├── dropdowns
│   │   │   │   ├── index-dropdown
│   │   │   │   │   ├── index-dropdown.component.html
│   │   │   │   │   └── index-dropdown.component.ts
│   │   │   │   ├── notification-dropdown
│   │   │   │   │   ├── notification-dropdown.component.html
│   │   │   │   │   └── notification-dropdown.component.ts
│   │   │   │   ├── pages-dropdown
│   │   │   │   │   ├── pages-dropdown.component.html
│   │   │   │   │   └── pages-dropdown.component.ts
│   │   │   │   ├── table-dropdown
│   │   │   │   │   ├── table-dropdown.component.html
│   │   │   │   │   └── table-dropdown.component.ts
│   │   │   │   └── user-dropdown
│   │   │   │       ├── user-dropdown.component.html
│   │   │   │       └── user-dropdown.component.ts
│   │   │   ├── footers
│   │   │   │   ├── footer
│   │   │   │   │   ├── footer.component.html
│   │   │   │   │   └── footer.component.ts
│   │   │   │   ├── footer-admin
│   │   │   │   │   ├── footer-admin.component.html
│   │   │   │   │   └── footer-admin.component.ts
│   │   │   │   └── footer-small
│   │   │   │       ├── footer-small.component.html
│   │   │   │       └── footer-small.component.ts
│   │   │   ├── headers
│   │   │   │   └── header-stats
│   │   │   │       ├── header-stats.component.html
│   │   │   │       └── header-stats.component.ts
│   │   │   ├── maps
│   │   │   │   └── map-example
│   │   │   │       ├── map-example.component.html
│   │   │   │       └── map-example.component.ts
│   │   │   ├── navbars
│   │   │   │   ├── admin-navbar
│   │   │   │   │   ├── admin-navbar.component.html
│   │   │   │   │   └── admin-navbar.component.ts
│   │   │   │   ├── auth-navbar
│   │   │   │   │   ├── auth-navbar.component.html
│   │   │   │   │   └── auth-navbar.component.ts
│   │   │   │   └── index-navbar
│   │   │   │       ├── index-navbar.component.html
│   │   │   │       └── index-navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.html
│   │   │       └── sidebar.component.ts
│   │   ├── layouts
│   │   │   ├── admin
│   │   │   │   ├── admin.component.html
│   │   │   │   └── admin.component.ts
│   │   │   └── auth
│   │   │       ├── auth.component.html
│   │   │       └── auth.component.ts
│   │   └── views
│   │       ├── admin
│   │       │   ├── dashboard
│   │       │   │   ├── dashboard.component.html
│   │       │   │   └── dashboard.component.ts
│   │       │   ├── maps
│   │       │   │   ├── maps.component.html
│   │       │   │   └── maps.component.ts
│   │       │   ├── settings
│   │       │   │   ├── settings.component.html
│   │       │   │   └── settings.component.ts
│   │       │   └── tables
│   │       │       ├── tables.component.html
│   │       │       └── tables.component.ts
│   │       ├── auth
│   │       │   ├── login
│   │       │   │   ├── login.component.html
│   │       │   │   └── login.component.ts
│   │       │   └── register
│   │       │       ├── register.component.html
│   │       │       └── register.component.ts
│   │       ├── index
│   │       │   ├── index.component.html
│   │       │   └── index.component.ts
│   │       ├── landing
│   │       │   ├── landing.component.html
│   │       │   └── landing.component.ts
│   │       └── profile
│   │           ├── profile.component.html
│   │           └── profile.component.ts
│   ├── assets
│   │   ├── img
│   │   │   ├── github.svg
│   │   │   └── google.svg
│   │   └── styles
│   │       ├── index.css
│   │       └── tailwind.css
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

