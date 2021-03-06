var Modernizr = require('./../lib/Modernizr');

/*!
{
  "name": "ServiceWorker API",
  "property": "serviceworker",
  "notes": [{
    "name": "ServiceWorkers Explained",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }]
}
!*/
/* DOC

ServiceWorkers (formerly Navigation Controllers) are a way to persistently cache resources to built apps that work better offline.

*/

  Modernizr.addTest('serviceworker', 'serviceWorker' in navigator);

