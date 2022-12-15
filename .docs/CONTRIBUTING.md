# Marvel contributing guide

Hi we are so exited that you are going to contribute to this amazing project, make sure to take a moment a read the following guides:

## Pull request guidelines 

## Development Setup

### Committing changes 

Commit message must follow the [commit message convention]() so we can add in the feature CI/CD process

## Commonly use NPM Scripts

```bash
# run the project in local environment
$ npm run start

# run unit testing
$ npm run test:unit

# run the full test suite, including unit/e2e/type checking
npm test
```

the `test` script will run 

- ESlint 
- Unit testing with coverage
- e2e testing  

Make sure to have this pass successfully before submitting a Pull Request.

## Project structure

- **`src`**: contains the source code of the app, written in ReactJS.

  - **`assets`**: here we store our general styles and media files

  - **`modules`**: contains our apps 

    Each folder inside `modules` must reflect a business domain with the following folders:

    - **`components`** Put here your business components.
    
    Components can be atoms or molecules that can be part of a business domain, if you use see that 
    the component is a part of the global scope try to put it on the `src/modules/core/components/...`
    review the topic of [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)

    - **`pages`** Use this folder for your main business Pages

    Pages are those UI that merge multiple views but doesn't have business logic,
    and are the direct connection with your routes. Generally this components are not inheritable, 
    and should be used as the final view to the user. 

    - **`services`** Use this folder to create code that 
    
    Response for services process, as mappers, connections with other services.


