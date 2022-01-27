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

## [mochawesomeMerge](https://github.com/antontelesh/mochawesome-merge)
*branch: [mochawesomeMerge](https://github.com/conversaShawn/reporters/tree/mochawesomeMerge)*
### Run command:
`npx cypress run --reporter mochawesome` followed by
`npx mochawesome-merge cypress/report/mochawesome-report/*.json > cypress/report/output.json`
### Default directory:
> cypress/report/mochawesome-report

### Note:
To run both scripts sequentially, use the following command
> `npm run merge`

### Final thoughts:
Pros:
- Combines multiple reports into single report 

Cons:
- Can be confusing to install