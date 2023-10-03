# Senior Front-End Engineer Interview
This sample application is meant to test your knowledge of Angular and CSS. 

In order to keep the interview structured, we will progress in the following order:

- Review requirements and figma designs
- Ensure project is compiling
- Walk through the 3 components, Navigation, Adding a Customer, Listing customers
- Fix app component tests
- Add api credentials to allow us to invoke API requests.
- Add in routing for add customer form.
  - Add functionality, tests.
- Add in routing for listing customers.
  - Add functionality, tests.
- Style based on designs.

### Requirements
* Create a new page located at /customers/add that allows you to add a new customer by first name
  * Clicking the "Add" navigation link should navigate you to this page
  * https://www.figma.com/file/ArxvNEtAdrWgHStXFccN5Z/Example-Mockups?type=design&node-id=1%3A1282&mode=design&t=iUTtPhKdQTqwkPZD-1
* Create a new page located at /customers/list that allows you to view all customers
  * The customers response is paginated, but adding pagination support to the page is not required.
  * Clicking the "List" navigation link should navigate you to this page
  * https://www.figma.com/file/ArxvNEtAdrWgHStXFccN5Z/Example-Mockups?type=design&node-id=2-3534&mode=design

### API Resources
* Add a customer: POST /api/customers
  * https://developer.payjunction.com/hc/en-us/articles/215960998-POST-customers
* Get customers: GET /api/customers
  * https://developer.payjunction.com/hc/en-us/articles/232222208-GET-customers-query-parameters-

## Development

* Run `npm start` to compile code and start server. 

## Running unit tests

* Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `npm run debug` to execute the unit tests (and watch for changes)

