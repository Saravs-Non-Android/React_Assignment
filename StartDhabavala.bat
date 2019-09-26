start C:\mongodb\bin\mongod --dbpath C:\data\db
start C:\mongodb\bin\mongorestore --db dhabaVala --collection restaurants ./db/restaurants.bson
start C:\mongodb\bin\mongo
%cd%
start nodemon server/server.js