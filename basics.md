// this week consist of the few concept that every backend engineer needed to learn to make the system always run !

suppose our system fell wrong get some error and it burst out so our user will get effected for such a big companies it might loss millions or billions so what we could know if this happen and we might know it earlier ! now here is the tools and software came into the picture 

how we could built system that help prevent this 

- bruteforce approach 
    read the application message from the either browser or the terminal, extract the logs/error/messages from there and then keep notified in the document. 
    once you have these errors you could store them in the realtime dbs and write some end code which do something with these errors and messages
    for example - let you have todo server and you write syntactic sugar code which got crashed due to high traffic then what will happen that a log file of these errors get created you extracted and save in realDB and host it fetching continuosly and showing the user for it . and write some code to send message if some condition meet for worst things and similar for the graphs and all  


1) lets try to logs the output of the request in the terminal 
2) then expose an endpoints where the prometheus could listen 
3) 