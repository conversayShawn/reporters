# Mocha Reporters 

Since Cypress is built on top of Mocha, any [reporter option available via Mocha](https://mochajs.org/#reporters) can be used.

In each branch of this repo, I will test different commonly used plugins and provide resources I found helpful.

## Installation
```
## clone this repo to a local directory
git clone https://github.com/<your-username>/reporters.git

## cd into the cloned repo
cd reporters/

## install the node_modules
npm install
```

## [Cypress-Mochawesome-Reporter](https://github.com/LironEr/cypress-mochawesome-reporter)
*branch: [cypressMochawesomeReporter](https://github.com/conversaShawn/reporters/tree/cypressMochawesomeReporter)*

### Run command:
`npx cypress run --reporter cypress-mochawesome-reporter`
### Default directory:
> None

### Note:
For additional output, a custom reporter is recommended

### Final thoughts:
Pros:
- Merges multiple specs in to single index.html
- Can run multiple specs without needing additional plugins or tools (as separate .json files per spec)

Cons:
- Installation a little more difficult than others reporters