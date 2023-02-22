# TWITTER-BACKEND-DESIGN : 

## Backend Requirements :

###  This Project is based on monolithic architecture .
###  Motivation : is to get familiar with different Design Patterns.

- Users should be able to create a Post/Tweet
    - Post/Tweet cannot be more than 250 chars
    - Every Post/Tweet will be having support for the image upload.

 
- Any post should be visibe to all the other users who follow the author
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- We can comment on a comment. [Nested Comments]
- We can like any comment also. 
- Retweeting 

- User profiles 
    - Name
    - Follower Count
    - Bio
    - Last 10 tweets of the user

- Pagination on tweets
- User Auth - using passport.js

- Every tweet might be having a hastag 



- tweet and hastag implementation logic 
    - for a tweet , first extract hashtag : service layer 
    - 