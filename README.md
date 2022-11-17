
# Meal Planner

#### An application to plan out your weekly meal schedule as well as inspect, create and store recipes.

_________________

### Idea

The idea behind this project is to provide a simple one-page that allows the users to easily plan their weekly meals.
An overview of the week is given and every weekday contains the respective meals.
It also provides a basic local data storage to load and save recipes in form of a json file.
These recipes are 

_________________

### Team

- Matthias Girkinger
- Michael Kössl
- Tobias Wagner

_________________

### Setup

1. Install all dependencies via "npm install"
2. Depending on the used shell, the startDb script (package.json) needs other parameters
   - mac/zsh: PORT=3010 react-scripts start
   - windows/cmd: set PORT=3010 && react-scripts start
3. Run "npm run startDb"
4. Run "npm start"
5. As mentioned above, the used port is 3010 instead of default 3000
6. Port 3000 works as data access layer
7. Run "npm run cypress" to start cypress tests