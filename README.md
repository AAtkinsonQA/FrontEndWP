# Workout Planner Timetable

## Contents
* [Brief](#brief)
   * [Requirements](#requirements)
   * [My Approach](#my-approach)
* [Project Planning](#project-planning)
* [Risk Assessment](#risk-assessment)
* [Database](#database)
* [Back end](#back-end)
* [Testing](#testing)
* [Front End Design](#front-end-design)
* [Future Improvements](#future-improvements)
* [Authors](#authors)

## Brief
Overall objective:
"To create a CRUD application with utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training."

Core Modules: Databases, Java SE, Spring Boot, Front-End Development.

### Requirements

In addition to what has been set out in the brief, I am also required to include the following:
* An agile scrum jira board
* Clear documentation of the design phase, app architecture and risk assessment
* A java-based functional application that follows best practices and design principles
* Test suites for the application, which will include automated tests for validation of the application
* Meet an acceptable level of test coverage in backend and provide consistent reports and evidence.
* Code integrated into a Version Control System and deployed to a cloud-based virtual machine (GCP)

### My Approach
To achieve this, I have decided to produce a simple exercise timetable app that allows the user to do the following:
* Create exercises and assign them to a day of the week on the timetable with the following attributes:
   * *Name* of the exercise
   * *Length* of the exercise in minutes
   * *Number* of sets
* Select exercises which have been completed with a checkbox
* Delete exercises
* Update exercise attributes
* View the updated timetable instantly after any exercises have been created, updated or deleted
* Refer to a database of exercises and store the attributes of their exercises

## Project Planning

A Jira, agile-scrum board was used to track the progress of the project (pictured below). You can find the link to this board here: https://aatkinson.atlassian.net/jira/software/projects/WOP/boards/2/roadmap

![Jira Roadmap](https://i.imgur.com/VXdmhKq.png)
![Jira Board](https://i.imgur.com/Z97X0EL.png)

The board has been designed such that elements of the project move from left to right from their point of conception to being finished and fully implemented. Each card has an epic associated with it according to which section of the project it pertains. These epics are:
* *Write Planning Documentation*
* *Create A Functional Application*
* *Apply Thorough Testing*
* *Integrated Code In Several Environments*
* *Present Project*

## Risk Assessment

The risk assessment for this project can be found in the screenshot below: 

![Risk Assessment](https://i.imgur.com/HN5OW8Y.png)

## Database

For my database I used an SQL server hosted by the Google Cloud Platform. A cloud database allows the user to save their timetables for later use. 

I found SQL useful for managing my data in a table and using the commands to access certain data. For my MVP I used an h2 console however, this deleted the data when it stopped running so wouldn’t be viable for a finished product. GCP gave me this option but took much longer to get running so If I wanted to use my project as a product for customers, I would keep the cloud server up as much as possible and provide warning messages for scheduled times when it has to be taken down for maintenance.

I used the postman application to test my database before my front-end was ready. This was useful for testing back-end functions and getting instant feedback with helpful error messages.

## Back end

The back end of the application is coded in java in the SpringBoot text editor and follows best practices and design principles.

My code follows the OOP principles which fall within the scope of my project. Object orientated programming was intuitive for this project as the user will be interacting with exercises on a timetable. Therefore an exercise class was created and assigned the defining attributes with getters and setters to follow the encapsulation principle. 

The spring text editor was effective in allowing me to create database functionality like a controller with minimal lines of code. I was able to specify the HTTP status codes using response entities in my controller. I could also write my CRUD functionality in a service file (following SOLID principles) and specify which attributes of my class were affected by certain methods. For example when the update method is called it is not able to modify the database ID of the exercise as this would cause my application to break.

## Testing

The testing of my application involved Integration tests for overall performance and Unit tests for individual components of the application. I used a mixture of JUnit, SpringBoot and Mockito.

[Testing files](https://i.imgur.com/STO1I8i.png)

### Unit Tests

Unit tests are performed by running each accessible function in isolation to one another, allowing for logic checks in order to highlight if any new additions or changes to old code will break or disrupt already working features. This is possible because of Mockito, which essentially replicates return types for functions requiring external data, therefore any logic will still be applied, but you are testing whether or not things would function and return with expected values. A total of 4 unit tests were performed, all returning successful.

### Integration Tests

Integration tests are real tests run on an isolated, pre-determined version of the database, so that all requests and access to the database can be verified and tested for faults. A total of 4 integration tests were performed, all returning successful.

#### In total

10 JUnit tests were run, which returned a total code coverage of 98.3%

[Test Coverage](https://i.imgur.com/wfBpl4I.png)

## Front End Design

The front-end of the app is built with HTML, CSS and JavaScript and has an integrated API. It is largely functional and stable.

The application and pairing website is not publicly available and is only accessible from my IP address. However, I designed the application with general use in mind so anyone can use it to create their own timetable.

VSC was smooth and efficient. I was able to create my HTML file very fast with the autocomplete functionality. I used bootstrap with CSS to tidy up the aesthetics. JavaScript event listeners allowed me to append functions such as ‘delete’ to my exercises and respond to different types of user input e.g. ‘click’. I made use of the fetch function to transfer user data as a JSON to my back-end and catch any errors. HTML and CSS required more research than I expected which was useful to learn as I can judge those tasks better next time with an appropriate number of story points.

Originally my exercises were printed without any day associated for my MVP. However, utilising ‘if’ statements and the ‘forEach’ function I could create an enumerated variable in my back-end called ‘DayOfWeek’ and print the exercises on the specific day of the week. After using python previously I found JS accessible and intuitive. If I wanted to add a new feature the versatility of the language gave me no barriers.

My front end didn’t get as much attention as my back end in this project so if I had more time, I would make the website look prettier for customers.

## Future Improvements

##### There are a number of improvements I would like to implement:

* In future, I would like to have a log-in feature which allows individual users to save their personal timetables. This would expand my number of SQL tables and  make the application more industry viable.
* I would like to incorporate other OOP principles such as abstraction to expand my application’s functionality e.g. timetable class. 

I would like to give the user more features so that they can:
* Search for a particular exercise from a database of premade recommendations
* Create several weeks instead of being limited to one week
* Easily move exercises between days so new ones don't have to be created

## Authors
Albert Atkinson
