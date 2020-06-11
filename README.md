# project-1

![Project 1 Logo](https://raw.githubusercontent.com/KittM/project-1/master/logo%20k.png)


The Project 1 app was developed to help people create inspirational memes and quotes. 

## CSS / Bootstrap

Project 1 is styled with Bootstrap and custom CCS thanks to our very dedicated team member, John. He designed our logo and inspired us to add a fun effect to the cursor. 

CSS is also required to overlay inspirational quotes on them images. In the future we plan on adding a download button. 

## Cropper.js

We discovered Cropper.js which is a js library that can be installed into your script and edit photos online. We struggle with the functionality of this library because we don't have the ability to storage images files to a server. However we've incorporated the crop function to our photo editor page which will allow users to resize thier favorite photos. 


![Cropper Example](https://raw.githubusercontent.com/KittM/project-1/master/cropperexample.png)

## API
We utilized API's from [https://unsplash.com/developers](https://unsplash.com/developers) to query photos from Unsplash and [https://kanye.rest/](https://kanye.rest/) to generate quotes. Both API's are called with ajax. 

We utilize js libraries to dynamically add images queried based on the input search team in the nav-bar and a selected button found near the top of the page. 

Clicking on an image triggers a modal to open and the image to expand. In the future, we would like to overlay photo editing capabilities to the modal and display image metadata such as location, photographer, camera, and editing software.

Simultaneously we search for an inspirational quote and dynamically add it to the header of each image when the modal opens. 



## Firebase

Users can sign up on our page and create an account on Project 1. The credentials stored on Google's Firebase. In the future, we'd like to add custom user accounts and track download history. 

![Firebase Example](https://raw.githubusercontent.com/KittM/project-1/master/firebaseexample.png)

## Coming soon....

 - Advanced Editing capabilities.
 - Metadata for stock images.
 - Download button.
 - Social share buttons. 
 - Download history.


## What we learned

 - Don't commit to master.
 - Research your API options early.
 - Devote more time to Javascript than styling.
 - Paid storage would make storing data easier. 


