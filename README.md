# Grimoire
Grimoire is a CRUD application centered around authorization of a user in order to access
the main functionality of the application. The theme behind this app mimics a forum where 
users can create different boards, the actual video game or franchise itself, and topics on
the board, those being the characters themselves.

# Showcase


(/public/images/homepage.png)

Getting started, you are met with the landing page of the application. From here, you can
navigate to the individual boards and view the full topics posted to the forum.

(/public/images/login-screen.png)

If the anonymous user wants to create boards and topics as well, they must log in.
The user will sign in using their google account via OAuth.

(/public/images/logged-in.png)

(/public/images/board-shot.png)

Once the user is logged in with their Google account, the navigation will append an additional
feature, adding boards, as an option, as well as their account avatarm to let the user know
that they are currently logged in.

(/public/images/topics-logged-in.png)

Users will be able to view all topics currently related to a specific board, including the name of the 
topic(character) and amount of comments featured on the topic. They will also be able to add more topics 
if logged in. topics/comments belonging to a specific user will give them the ability to edit.delete it.
These options only appear for that user during the session and only for the ones that created.

(/public/images/post.png)

Clicking a specific topic will render it on a new page in full detail. Any comments that belong to the topic
will appear at the bottom of the post. These comments will also render the avatar of the user who created it and will also render
edit/delete buttons depending on whether the user created it or not, similiar to topics.

# Technologies Used
- Node.js
- Express.js
- Mongo DB

[Take at the app here](https://grimoire-character-forum.herokuapp.com/)

# Improvements
1. Resuable CSS.