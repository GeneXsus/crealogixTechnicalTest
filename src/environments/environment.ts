// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	maxSaved: 4, // maximum number of saved searches
	films : "https://swapi.dev/api/films/",
	people : "https://swapi.dev/api/people/",
	planets : "https://swapi.dev/api/planets/",
	species : "https://swapi.dev/api/species/",
	starships : "https://swapi.dev/api/starships/",
	vehicles : "https://swapi.dev/api/vehicles/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
