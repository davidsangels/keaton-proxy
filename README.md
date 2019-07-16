Keaton Proxy

To get your first service here:

In the original service client files, make sure to take note of what the div id you are rendering your react is on. Place a div with this same id onto index.html in your public folder.

You also need to create an express server on a different port than your original service. 
In this service, use http-proxy as shown (you will have to npm install http-proxy). This library allows you to redirect http requests from one server to another. This way, you can leave all of the requests onto 3000 and then redirect them to their respective services (3001 for bookings, for example). 

Next, you will need this line: 
script src='http://localhost:3001/bundle.js'></script>
after your div with the id from the react component. This will bring in the bundle.js file from the service and allow you to have your entire service react code.

Next, add a second div (reviews) to your index.html. Do the same thing with whatever port your other service is running on (you will have to clone down the other service and make sure it's running on a different port). You will also have to run the database seed documents in order to get the right database on your computer. 