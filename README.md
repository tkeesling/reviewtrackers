# ReviewTrackers Code Challenge

Design and implement an application that lists reviews and allows a user to select a review to see more details.

One can find the hosted project [here](http://www.tylerkeesling.com).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

First, we must install the npm packages. In the root directory, run

```
$ npm install
```

Then we can run application with

```
$ npm run start
```

## Built With

- [Create React App](https://github.com/facebook/create-react-app) - The web framework used
- [Reach Router](https://reach.tech/router) - For routing
- [Styled Components](https://www.styled-components.com/) - CSS in JS framework
- [CircleCI](https://circleci.com/) - Continuous Integration and delivery platform
- [AWS S3](https://aws.amazon.com/s3/) - For static website hosting
- [AWS Route53](https://aws.amazon.com/route53/) - DNS hosting

## Thoughts/Comments

### Using CRA

I chose to use CRA to get the project up and running quickly. I don't have a updated React app template on-hand so I thought this would suffice for a code challenge.

### Using Styled Components

Keeping up with the times, Styled Components are all the rage nowadays. I've used CSS modules in the past.

### No Class Components

I built this project using only functional components and the React Hooks API as that is the direction the React team is taking us.

### State Management

For such a small application, I haven't included a global state management solution, although I may add some using the Context API to recreate a "redux" like solution. I used the `useState` hooks in this project to maintain state when needed. I also utilize local storage and the `useEffect` hook as a pseudo caching tool to recreate some semblance of an API call. In the past, I have used redux as my main tool for state management.
