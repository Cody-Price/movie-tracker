# Movie Tracker 

Movie Tracker is an application built using the [Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction) in order to help it's personalized users browse, search for, as well as favorite/unfavorite any movie they come across.

This project was assigned to be completed in less than 5 days requiring communication between myself and two other team members. It was our first time utilizing a back end database and server to store and retrieve information.

### Demo
<a href="https://imgflip.com/gif/2yqafm"><img src="https://i.imgflip.com/2yqafm.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/2yqe70"><img src="https://i.imgflip.com/2yqe70.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/2yqf6c"><img src="https://i.imgflip.com/2yqf6c.gif" title="made at imgflip.com"/></a>

### Prerequisites

This application asumes that you have the following installed on your machine:

- [node](https://www.npmjs.com/get-npm)
- [npm](https://www.npmjs.com/get-npm)
- [PostgreSQL](http://www.postgresqltutorial.com/install-postgresql/)

### Setup

1. Fork this repository by clicking on the "Fork" button on the top-right of this page.

2. Open your terminal and navigate to the working directory (for instructions on how to navigate through your terminal see [here](https://ccrma.stanford.edu/guides/planetccrma/terminal.html)) you want your new directory to be located, and enter the following command:
`git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/movie-tracker`

3. Get into your new local copy of the Movie Tracker directory:
`cd movie-tracker`

4. And then add an `upstream` remote that points to the main repo:
`git remote add upstream https://github.com/Cody-Price/movie-tracker`

5. Pull in the latest version of master from upstream (ie: the main repo):
`git pull upstream master`

7. Install dependencies:
`npm install`

### To run as Developer

1. While in your terminal, navigate to a separate directory to download the Back End of the application (do not store the Back End of the application in the Front End directory) and enter the following command:
`git clone https://github.com/turingschool-examples/movie-tracker backend`

2. Navigate into the backend directory:
`cd backend`

3. Install dependencies:
`npm install`

4. Start server (the Back End server will run in localhost:3000 by default):
`npm start`

5. Navigate to the movie tracker directory and enter the following command:
`npm start`

6. Your selected default browser should appear and prompt you to open in localhost:3001, reply `Y` to start the Front End logic.

### Testing

1. Enter the following command while within the movie-tracker directory:
`npm test`

### Deployment

The Front End of this application is currently deployed via [TravisCI](https://travis-ci.org/) to [Heroku](https://www.heroku.com/) [Here](http://movie-tracker-cody.herokuapp.com/)

The Back End of this application is in progress of being deployed

### Built With

- [Create React App](https://github.com/facebook/create-react-app) - Common React Project Boilerplate
- [React](https://reactjs.org/) - Library/Framework
- [Redux](https://redux.js.org/) - State Container
- [Router](https://github.com/ReactTraining/react-router) - Declarative Routing
- [Redux-Thunk Middleware](https://github.com/reduxjs/redux-thunk) - Asynchronous Actions for Redux State Container
- [Jest](https://jestjs.io/) - Javascript testing framework that works in conjunction with React
- [Enzyme](https://github.com/airbnb/enzyme) - JavaScript Testing utility for React that makes it easier to test React Components' output

<p id="contributing"></p>

### Contributing

1. Comment on a given issue you would like to undertake.

2. Checkout a new branch on your local machine (based on `upstream/master`)

3. Utilize rebase work flow (for Rebase workflow questions please reference at: `https://git-scm.com/docs/git-rebase`)

4. Push up changes to your forked repo branch and make necessary PR into forked repo's master

5. Request the Pull Request to the original repo following the PR template

6. Include a brief commit message that details the changes you have made

### Authors

- [Cody Price](https://github.com/cody-price) - Logic & Design
- [Cole Vanacore](https://github.com/colev1) - Logic & Design
- [Kylie Stanley](https://github.com/kyliestanley) - Logic & Design

### License

This project requires no license.

### Acknowledgments

I would like to thank Christie Lynam for her excellent help with understanding state containers and asynchronous actions, she is a fantastic teacher!
