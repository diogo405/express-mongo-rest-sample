# express-mongo-rest-sample
A sample REST API using Node.js (Express) + MongoDB. It has all CRUD operations for a user entity ({"name": "Ayrton Senna"}).

## Architecture
The entry point is app.js which init the routes and the server. A request to the API has the flow "route -> service -> database". 

E.g. GET /user  
request -> userRoutes -> userService -> Mongodb.

All responses are wrapped in the ApiResponse class (id, success, payload, error). And all errors wrapped in the ApiError class.

Lastly, there's a exception handler to deal with uncaught errors (routes/hanler.js).
