# For'm

#### For'm is a forum Single Page App that consumes my [forum-api](https://github.com/KTichmann/forum-api).

## Current Functionality/Features:

### User Signup/Login

Users can sign up to the platform with a unique username and a password. After signing up, they can then log in and gain access to make posts, and comments, as well as add and remove likes. On the backend, users are authenticated using JWT.

### Posts, Comments, and Likes

Logged-in users can post content, which will show up on the home page. Posts consist of a title and a message (both required). The posts are then displayed using markdown, which allows for images, and basic styling. Comments are treated as plain text. Users can also edit and delete posts/comments they have made. Each user can like a post/comment once. They can also remove their like.

### Chat

When logged in, users can access a chat application which allows them to send messages to other logged in users in real-time. This section of the site is built using websockets, and embedded onto the page.
