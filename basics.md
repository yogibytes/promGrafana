// this week consist of the few concept that every backend engineer needed to learn to make the system always run !

suppose our system fell wrong get some error and it burst out so our user will get effected for such a big companies it might loss millions or billions so what we could know if this happen and we might know it earlier ! now here is the tools and software came into the picture 

how we could built system that help prevent this 

- bruteforce approach 
    read the application message from the either browser or the terminal, extract the logs/error/messages from there and then keep notified in the document. 
    once you have these errors you could store them in the realtime dbs and write some end code which do something with these errors and messages
    for example - let you have todo server and you write syntactic sugar code which got crashed due to high traffic then what will happen that a log file of these errors get created you extracted and save in realDB and host it fetching continuosly and showing the user for it . and write some code to send message if some condition meet for worst things and similar for the graphs and all  


   # what we want to achieve
   a) the number of request hitting to the endpoint get logs 
   b) the total number of the live user could be reflected 
   c) the latency / time to access the website by the different user 

   solution of a is - simply drag the prom-client library which help to increment the nuber of req each time 
                use the client.counter(method ) //define some params and you are good to go 

   solution of b is - similar to a add the gauge method and increment once new user connected and decrement once status code return back 

   c is slighlty tricky -- we'll see tomorrow


   //hey buddies thursday 6:37 28/10

   Goal of the day // by the end of the 8:00 pm 

we have done these things - 
expose the endpoints which logs the 
a) the total number of the requests came up to the server with the status code and route

b) used the gauge things to make sure the total number of the people that are active currently 

c) we understand the concept of the histograms 
different buckets help to categorize the persons hitting the server with the basis of the latency (how much time they took to get the response) 

now what we do -- 
a) create the histogram for the express server 
   make sure that the it exposes to the /metric 
b) once we get the logs on the /metric 
    try to connect it now with the prometheus for the 
    constant pooling and doing bunch of things that the newrelic could do ! potentiall 


so TODOs

1) expose the metric logs to the localhost:3000/metric and then make sure that the requestCounter , gauge(activeUser) and the histogram logs are found on the /metric endpoint 

2) now lets try to use the prometheus and let it to use /metric to get the all the logs and query them on the top of them and let them visualize them !
