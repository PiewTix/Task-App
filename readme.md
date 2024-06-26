

# Installation

1. Navigate to */code*

2. `npm install`

3. `npm run`


# Description 


Total time spent: 02h10min


Technologies used:

- **Backend:** Node.js
- **Frontend**: html+css + bootstrapv5

Front-end makes API calls to backend. No dynamic rendering in server-side method was used (such as template engines). To me, this is the cleanest method as it seperates the development of the front and back-end.

# Progress

In this section, I shortly want to discuess my progress 

1. Quickly making architecture. I made an EER diagram:

![Image Alt text](/img/eer.png)

3. Setting up the back-end (Node.js with Typescript)
4. Deciding to use JSON file instead of database, based on the EER-diagram (bcs of time-limit)
5. Making html pages with bootstrap (used ChatGPT for that), this process was done interleaved when new features were coded
6. Adding Controller and the appropriate routes -> making REST API with CRUD operations
7. Testing API with Postman (because I had errors):
  ![Image Alt text](/img/todo.png)

8. Prioritizing the most important features and finishing my work
   
   
# Remarks

- No time left to implement: 
	- Deadline (with timestamp). I knew this would be a lot of fiddling so I skipped this part.
	- User authentication: didn't prioritize this feature for the MVP
	- Forgot to display "type" of Task (work/personal) in the list.
	- Delete button not implemented
	  
I am aware of the fact that the way how I store the info (JSON) and manipulate it (adding/changing) is VERY inefficient. Though, this was the only way for me to focus on the most important part, which is being able to show an MVP to the client with the most important features. 
The MVP is meant as a prototype and to gather valuable feedback from the client. Me using more efficient algorithms in the back-end wouldn't change anything about it, only increment my time.
