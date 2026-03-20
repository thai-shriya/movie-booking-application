# MOVIE BOOKING APPLICATION

## AUTHENTICATE USER
    - recevied jwt token from server
    - for subsequent requests, jwt verify logic needs to be added 
    
## ROLE BASED ACCESS LOGIC

 - User types 
        - Admin
        - Customer
        - Client

 - All users can search and get all theaters and movies

 - Only admin and customer can add/delete/update theaters and movies

 ## DATABASE SCHEMA UPDATIONS
  - Add Theaters, shows tables with one to many 
  - Update realtionship between theaters, shows and movies
    - Theater to show - one to many
    - movie to show - one to many
    - theater to movie - many to many

