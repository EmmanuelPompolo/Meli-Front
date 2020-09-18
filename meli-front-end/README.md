# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Structure

## assets
public files to be published with the build-prod

## scss
All de scss structure I use the 7-1 pattern: 7 folders, 1 file. Basically, you have all your partials stuffed into 7 different folders, and a single file at the root level (main.scss) which imports them all to be compiled into a CSS stylesheet.

## app /core
Providers for the singleton services you load when the application starts.

## app /layout
The layout folder contains everything that takes part in laying out the site like header, footer, side menu.

##app /pages
Different pages of our site, each page has its own module this is to be able to use the advantages of the Lazy Loading pattern

## app /shared
Components, directives, and pipes that we can use everywhere
