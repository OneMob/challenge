# Task:
1. Fork https://github.com/OneMob/challenge into your GitHub account
2. Pull and checkout a new branch 'task'
3. Implement scenarios below
4. Create PR with the changes against the master branch in **your forked repo (not in https://github.com/OneMob/challenge, it should be https://github.com/username/challenge !!!)** and send us a link. 

Scenario 1:  
Given I am on the home page  
When I select an image file in the form  
And Click on the Upload button  
Then It shows a successful notification message
And Saves the image to the database
And Appends a new row below the form with image data (mimeType and size) and cross button

Scenario 2:
Given I am on the home page
And I uploaded a few images
When I hard refresh the page
Then I see all uploaded images

Scenario 3:  
Given I am on the home page  
And Uploaded some images  
When I click on the cross button in the image row  
Then It hides the row
And Deletes the image from the DB


**Additional info:**
- Keep UI simple
- Image uploading should happen without page reloading
- Use this react app: app/javascript/app
- Any additional improvements to show your skills are welcome

**Evaluation criteria:**
- Clean, readable code
- Following common best practices

**To Install the NPM Packages:**
- Run `npm install` at project root
