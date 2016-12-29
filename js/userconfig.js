/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around - coordinates courtesy of http://boundingbox.klokantech.com/
	mapFocus : [-37.8323125, 145.0663515],
	south : -37.88,
	west : 144.99,
	north : -37.76,
	east : 145.11,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoicGhpbGFtIiwiYSI6ImNpbmk1OGI1MDB3dmt1a20zeDZ5ejRnemsifQ.jfEJAMTg8tCqE2KI2tuAzQ',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'philam',
	cartoDBinsertfunction : 'insert_bikeways_data',
	walkthroughWelcome: "<p>This webmap allows you to view data collected by the <a href='http://example.com' target='_blank'>Example Bicycle Group</a> on biking in Melbourne.</p><p>It also allows you to submit input on where biking infrastructure can be improved by drawing on the map! The map is restricted to Melbourne where we concentrate our advocacy.</p>"
};