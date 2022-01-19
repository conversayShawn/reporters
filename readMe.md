# Mocha Reporters 

Since Cypress is built on top of Mocha, any [reporter option available via Mocha](https://mochajs.org/#reporters) can be used.

In each branch of this repo, I will test different commonly used plugins and provide resources I found helpful.

## Installation
```
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-todomvc.git

## cd into the cloned repo
cd cypress-example-todomvc

## install the node_modules
npm install
```

## [Mochawesome](https://github.com/adamgruber/mochawesome)
*branch: [mochawesome](https://github.com/conversaShawn/reporters/tree/mochawesome)*
### Run command:
`npx cypress run --reporter mochawesome`
### Default directory:
> /mochawesome-report

### Note:
To use additional Mocha reporter options, the option needs to be called prior to `mochawesome` in your run command
> `npx cypress run --reporter nyan mochawesome`

### Final thoughts:
Pros:
- Simple to install
- Can run multiple specs without needing additonal plugins or tools 