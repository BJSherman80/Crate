![Crate](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/hero-with-link.png)

# Crate 👕👖📦

#### Get monthly subscription of trendy clothes and accessories.
- **API** built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly
- **Mobile** (Android and iOS) Native App build with React Native
- Written in ES6+ using Babel + Webpack
- Designed using Adobe Experience Design. Preview it [here](https://xd.adobe.com/view/a662a49f-57e7-4ffd-91bd-080b150b0317/).


## Features
- Modular and easily scalable code structure
- Emphasis on developer experience
- UI components in separate folder which can be swapped for your favorite UI framework easily
- Responsive UI for React Native to support Mobile and Tablet
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API
- File upload feature with GraphQL
- React storybook demonstrating UI components for web
- Server side rendering
- Multi-package setup and dev scripts for an automated dev experiance


## Useful for
- Developers with basic knowledge on React exploring advance React projects
- Developers learning React Native
- Exploring GraphQL
- Scalable project structure and code
- Starter application for Mobile and Web along with SSR
- Multi-package scripts
- Sample project with combination of all above


## Screenshots and GIFs
Click on image to view fullscreen and zoom

### Desktop
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/desktop-all-with-link.png)

![Crate Desktop](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/desktop-all-with-link.png)

### Mobile
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/mobile-all-with-link.png) · [GIF](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/mobile.gif)

![Crate Mobile](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/mobile-all-with-link.png)

### Tablet
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/tablet-all-with-link.png) · [GIF](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/tablet.gif)

![Crate Tablet](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/tablet-all-with-link.png)


## Core Structure
    code
      ├── package.json
      │
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── mobile (Android, iOS)
      │   ├── assets
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## Setup and Running
- Prerequisites
  - Node
  - MySQL (or Postgres / Sqlite / MSSQL)
- Clone repo `git clone git@github.com:atulmy/crate.git crate`
- Switch to `code` directory `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)
  - Modify `/mobile/src/setup/config.json` for API URL (tip: use `ifconfig` to get your local IP address)
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`
  - Mobile: 
    1. Install packages `cd mobile` and `npm install`
    2. Install iOS dependencies `cd mobile/ios` `pod install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
  - Run Mobile `cd mobile` and `npx react-native run-ios` for iOS and `npx react-native run-android` for Android
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
- Test
  - There are tests for the functionality added in this fork; several additional steps are required to run them.
  1. The tests use a different database than development or production; the default name for this additional database is `crate_testing`, and may be created using your preferred database system. 
    - We used PostgreSQL; the steps we used to create the database are as follows:
      * Enter `psql` in your terminal
      * Run `CREATE DATABASE crate_testing;`
      * To check that the database has been created, connect to it with `\c crate_testing`
      * Exit psql by either entering `\q` or `exit`
  2. In order to run the migrations and seeds for the test database, run `NODE_ENV=test npm run db:migrate` and `NODE_ENV=test npm run db:seed`
  3. In your terminal enter `npm run test`. NOTE: These tests are dependent on the seeded data included in the seed files; if the primary key ids become misaligned, the tests (and the seeds) will fail. 

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Update User |`/`| POST | <pre>mutation {<br>   userUpdate(<br>     id: `<int>`<br>     name: `<string>`<br>     email: `<string>`<br>     password: `<string>`<br>     profileImage: `<string>` **# store in public/images?**<br>     streetAddress:`<string>`<br>     city:`<string>`<br>     state:`<string>`<br>     zip:`<string>`<br>     description: `<string>`<br>) {<br>   id<br>   name<br>   email<br>   password<br>   profileImage<br>   streetAddress<br>   city<br>   state<br>   zip<br>   description<br>  }<br>} </pre>| <pre>{<br> "data": {<br>   "user": {<br>     "id": `<int>`,<br>     "name": `<string>`,<br>     "email": `<string>`,<br>     "profileImage": `<string>`,<br>      "streetAddress": `<string>`,<br>      "city": `<string>`,<br>      "state": `<string>`,<br>      "zip": `<string>`,<br>      "description": `<string>`<br>    }<br>  }<br>}</pre>
| Update Deliveries |`/`| POST | <pre> mutation {<br>  deliveryUpdate(<br>    id: `<int>`<br>    deliveryDate: `<datetime>`<br>    ){<br>      id<br>      subscriptionId<br>      deliveryDate<br>     }<br>  }</pre>| <pre>{<br>  "data": {<br>    "delivery": {<br>      "id": `<int>`, <br>      "subscriptionId": `<int>`, <br>      "deliveryDate": `<datetime>`<br>    }<br>  }<br>} </pre>|
| Update Delivery Products |`/`| POST | <pre> mutation {<br>  deliveryProductUpdate(<br>   id: `<int>`<br>   wasReturned: `<boolean>`<br>  ){<br>    id<br>    wasReturned<br>   }<br> }</pre> | <pre>{<br>  "data": {<br>    id: `<int>`<br>    wasReturned: `<boolean>`<br>    deliveryId: `<int>`<br>    productId: `<int>`<br>  }<br>}</pre> |
| Get Delivered Products |`/`| POST | <pre>query{<br>  getDeliveredProducts(<br>  userId: `<int>`<br>)}<br>  id <br>  name<br>  slug<br>  description<br>  type<br>  gender<br>  image<br>  createdAt<br>  updatedAt<br> }<br>}</pre> | <pre> {<br>   "data": {<br>     "products": [<br>       {<br>        id: `<int>`,<br>        name: `<string>`,<br>        slug: `<string>`,<br>        description: `<string>`<br>        type: `<int>`<br>        gender: `<string>`<br>        image: `<string>`<br>        createdAt: `<string>`<br>        updatedAt: `<string>`<br>        },<br>        {<br>        id: `<int>`,<br>        name: `<string>`,<br>        slug: `<string>`,<br>        description: `<string>`<br>        type: `<int>`<br>        gender: `<string>`<br>        image: `<string>`<br>        createdAt: `<string>`<br>        updatedAt: `<string>`<br>        }<br>        ]<br>    }<br>} </pre> |


## Back-End Database Schema
![Screen Shot 2021-02-13 at 3 08 56 PM](https://user-images.githubusercontent.com/61892154/107862941-593a4f80-6e1e-11eb-9de3-d4901bbd7b9b.png)

## New Relationships (FE -> BE Contract)
- A user has many deliveries through subscriptions
- A user has many deliveryProducts through deliveries
- A user has many products through deliveryProducts

## Multi-package automation
- New developers are advised to run through the above 'setup and running' process before reading further.
- Optional multi-package automation for faster setup and easier dev environment initiation.
- No need to cd to sub-folders unless working with mobile or running a production build.
- Once Node, MySQL, repo clone and configuration are setup correctly
    - Switch to `code` directory `cd code`
    - Setup
        - Setup API, Webapp and Mobile with a single command `npm run setup`
    - Development
        - Run API and Webapp `npm start`, browse GraphiQL at http://localhost:8000/ and Webapp at http://localhost:8000/
        - Run API alone `npm start:api`, browse GraphiQL at http://localhost:8000/
        - Run Webapp alone `npm start:web`, browse webapp at http://localhost:3000/


## Resources and Inspirations
- ✍️ Opinionated project architecture for Full-Stack JavaScript Applications - [GitHub](https://github.com/atulmy/fullstack-javascript-architecture)
- 🌈 Simple Fullstack GraphQL Application - [GitHub](https://github.com/atulmy/fullstack-graphql)
- 🌐 Universal react application with server side rendering - [GitHub](https://github.com/atulmy/universal-react)
- Container Components - [Medium Post](https://medium.com/@learnreact/container-components-c0e67432e005)
- Zero to GraphQL in 30 Minutes - [YouTube](https://www.youtube.com/watch?v=UBGzsb2UkeY&list=PLkuiMQfg5DujhOSZ1A8kDl0hKV_ICTjp-)
- Building a GraphQL Server [YouTube Playlist](https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)
- Universal JavaScript Web Applications with React by [Luciano Mammino](https://github.com/lmammino) - [YouTube](https://www.youtube.com/watch?v=0VEwRFP8WtI)
- Building Youtube UI in React Native in 30 Mins - [YouTube](https://www.youtube.com/watch?v=LdKtugH-sb8)
- Building Stellar Mobile UX With React Native - [YouTube](https://www.youtube.com/watch?v=ssXB9RMTpTs)
- Free MySQL hosting https://remotemysql.com


## Why open source a project and not a boilerplate or framework?
- While building a new project with Node, you can basically start scratch, adding libraries and tools as you go on building it further.
- Comparing with any other languague, you usually start with a framework, for example, Laravel (PHP), Django (Python) or Ruby on Rails (Ruby) which includes a ton of features and codebase which you never end up using.
- I've personally found, learning by going through a good project codebase step by step while building your own project helps in ease of understanding and remembering

## Back-End Challenges
* Learning how to work with JS
* Implementing testing with Jest, especially setup and teardown of data in the test database
* Implementing Factory-bot

## Back-End Wins
* Implementing GraphQL Sucessfully
* Navigating through JS/React file tree
* Creating mutations and queries
* Creating a database schema in migration

## Back-End Roadmap
With more time, we would like to enhance Crate by:
* Implementing a debugger
* Adding more testing
* Implementing a query to see all shipped and kept items
* Implement Factory-bot



## Author
- Atul Yadav - [GitHub](https://github.com/atulmy) · [Twitter](https://twitter.com/atulmy)


## Original Contributors
- Ebou Jobe - [GitHub](https://github.com/ebouJ)
- Nenad Radovanovic - [GitHub](https://github.com/nrcloud) · [Twitter](https://twitter.com/publicshone)
- Nicholas Drew - [GitHub](https://github.com/nickdrew)
- Mateus Abdala - [GitHub](https://github.com/mateusabdala)
- Hossein Nedaee - [GitHub](https://github.com/hosseinnedaee)
- Mohammad Afzal - [GitHub](https://github.com/afzalex)
- [YOUR NAME HERE] - Feel free to contribute to the codebase by resolving any open issues, refactoring, adding new features, writing test cases or any other way to make the project better and helpful to the community. Feel free to fork and send pull requests.

## Contributors to this Fork
- Brett Sherman - [Github](https://github.com/BJSherman)
- Cameron Romo - [Github](https://github.com/cameronRomo)
- Eugene Theriault - [Github](https://github.com/ETBassist)
- Jose Lopez - [Github](https://github.com/JoseLopez235)
- Lola Dolinsky -[Github](https://github.com/lo-la-do-li)
- Will Dunlap - [Github](https://github.com/dunlapwv)


## Donate
If you liked this project, you can donate to support it ❤️

[![Donate via PayPal](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/mix/paypal-me-smaller.png)](http://paypal.me/atulmy) [![Become a Patreon](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/mix/patreon.png?v=1)](https://www.patreon.com/atulmy)


## Hire me
Looking for a developer to build your next idea or need a developer to work remotely? Get in touch: [atul.12788@gmail.com](mailto:atul.12788@gmail.com)


## License
Copyright (c) 2018 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
