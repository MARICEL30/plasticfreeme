# plasticfreeme
A directory of refill plastic free shops in the UK. 
Two API's were used for this project.

. Firslty, I used Sheety service to turn the Google sheet into an api. 
So, I collected all the refill shops in the UK on a Google sheet. 
Then converted the Google sheet into an api and called it with a fetch function. 
The rows were generated dynamicaly withvanilla Javascript, once the data from the api has been collected.

.Secondally, a Google Maps api was used to place the refill shops in a map. 
In order to use the Google maps APi we must generate a token and a project ID.
Once this has been created the function to call the map was initionalized.

.Lastly, the shops latitude and longitude was collected on an array of objects. 
Hence, all the diferent shops are visible on the map.

