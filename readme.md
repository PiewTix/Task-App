




# Description 

Technical test for Tekst.
Total time: 02h10min + 10-15min readme
I don't take the time to write this file into account.

Technologies used:

- **Backend:** Node.js
- **Frontend**: html+css + bootstrapv5

Front-end makes API calls to backend. No dynamic rendering in server-side method was used (such as template engines). To me, this is the cleanest method as it seperates the development of the front and back-end.

# Progress

In this section, I shortly want to discuess my progress 

1. Quickly making architecture. I made an EER diagram:

![Alt text](/img/eer.png raw=true "EER")

3. Setting up the back-end (Node.js with Typescript)
4. Deciding to use JSON file instead of database, based on the EER-diagram (bcs of time-limit)
5. Making html pages with bootstrap (used ChatGPT for that), this process was done interleaved when new features were coded
6. Adding Controller and the appropriate routes -> making REST API with CRUD operations
7. Testing API with Postman (because I had errors):
   ![Alt text](/img/todo.png raw=true "Postman")
8. Prioritizing the most important features and finishing my work
   
   
# Remarks

- No time left to implement: 
	- Deadline (with timestamp). I knew this would be a lot of "prutswerk" so I skipped this part.
	- User authentication: didn't prioritize this feature for the MVP
	- Forgot to display "type" of Task (work/personal) in the list.
	- Delete button not implemented
	  
I am aware of the fact that the way how I store the info (JSON) and manipulate it (adding/changing) is VERY inefficient. Though, this was the only way for me to focus on the most important part, which is being able to show an MVP to the client with the most important features. 
The MVP is meant as a prototype and to gather valuable feedback from the client. Me using more efficient algorithms in the back-end wouldn't change anything about it, only increment my time.