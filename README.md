# ChatCenter

A web socket communication research environment

Websites are always communicating, whether it be with a 
DNS server or your own Host Server.

The beauty of it is that we can also communicate with each other over 
these types of platforms.

ChatCenter is a study project on web-communication
and socket.io .

# AdminPanel

AdminPanel testing environment.
This is a project to study how websites utilize adminPanels 
and how We can manipulate a client-side websites elements with
simple CRUD rules.

# Pre-requisites

Run a xampp *Apache + MySQL* servers 

You will need to create your own DataBase on
localhost/phpmyadmin or just create MySQL script
and change config/database.js to your database.

*NOTICE:* _This is not for production use,_ 
password and name encryption is not yet implemented.

# Available Scripts

Root directory is `/ChatCenter`

To run **localhost** just run command:

`npm start` OR `node server.js`

Localhost will listen at localhost:3000

# Sitemap

+ `/`           <- Index|Home page
+ `/twowaychat` <- Two way chat-room
+ ...

# Plans & Implementations

| MODE      	| INFO                                                                  	| FEATURES                                  	| STATUS 	|
|-----------	|-----------------------------------------------------------------------	|-------------------------------------------	|--------	|
| 2-way     	| A simple 2 way stranger chat                                          	| Intrests/Tags; Strangers(No Custom Names) 	|        	|
| Role      	| Also a chat but allowes custom names,  could be merged with 2-way     	| Intrests/Tags; Custom Names               	|        	|
| Discourse 	| 1 User gets to assign a topic and read what the other 2 discuss about 	| Question; 3-way; Roles                    	|        	|
| 4-way     	| A 4-way user chat                                                     	| Intrests/Tags; Roles                      	|        	|
| Voice     	| Chat utilizing microphones                                            	| Microphones; Sound                        	|        	|
| Cam       	| WebCam chat                                                           	| WebCam; Simulators                        	|        	|
| Plaza     	| A Vizual chatCenter                                                   	| This is overkill dude                     	|        	|
| Open World	| Open, regular, anyone can join chat                                   	| Usernames; Maybe rooms                    	|        	|



# Architecture

**How can we push features to the project nice and easy?**

Consider this:
 We will have an index page in which the client 
 can nice and easy choose where they wish to go.
 
 lets assume this is our Index Fronted Page:
 
 <pre>
  Title 
    some description
  
  Feature1
    property_1
  
  Feature2
    property_1 
    property_2
 </pre>

We start with a simple straight forward introduction, and
then follow-up with our features.

Now _features can come and go_, thus we need
a system where each feature is encapsulated in it's own
little **pod** 

Each pod is then required from the `server.js` and later
inside the `route/index.js` we can route the paths.

**What would the MVC structure look like?**

I think I'll be deviating away from the classical `MVC` structure.

To best visualize what the structure would looklike ill use folders:

<pre>
ChatCenter
|-- server.js
|-- views
|   |-- feature1.html
|   |-- feature2.html
|-- models
|   |-- config
|       |-- database.js
|-- public
|   |-- assets
|   |-- css
|   |-- js
|-- controllers
    |-- admin
</pre>

I need to figure out where we can put the feature logic or the essential **pod**.



















