### Content Access Policy [demo version]

#### Purpose
This document contains all the necessary information about controlling access to Code Blog content.
This document should be read by everyone who works on the Code Blog.

#### Authentication
Before proceeding with the use of the API, it is necessary to create a new account via the <strong>POST /user</strong> route, and then verify the email of the new account via the <strong>POST /user/verifica_email/:token</strong> route.

With the account created and verified, use the <strong>POST /user/login</strong> login route to get an access token via the Authorization header in the response. Use this header in other requests to authenticate with the API and proceed to control access to the content.

#### Blog content control
- On the blog, we have the position of <strong>assinante</strong>. The person with the position of subscriber should only be able to read the blog posts, the posts of anyone.
- In addition to the position of subscriber, we also have the position of <strong>editor</strong>. The person with the position of editor can register new posts and manage them.
- Finally, we have the role of <strong>admin</strong>. The admin role is the role for the people who will manage the users and posts on our blog.
