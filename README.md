# integration_testing

**INTEGRATION TESTING EXERCISE**

Use `jest` and `node`, but do not use Express. You may start in a new repository or build off your previous work. Your submission must have a README detailing how to use your software.

Submit your work by pushing it to GitHub before deadline. Late work may be reviewed but will not pass. To submit your work, e-mail me with a link to a version of your code you want to be reviewed.

Feel free to ask me for help or clarification on anything.


**BUILD A WEB CALCULATOR SERVICE**

Integrate your calculator into a node server, making a web service. The following are example requests your service should work with:

EX 1: GET /calculator/?q='1 + 1', 200 OK 2
EX 2: GET /calculator/?q='2 - 1 * 3', 200 OK -1

For simplicity, this calculator reads from left to right and does not need to support operator precedence (you may do this as a bonus if you choose). Your service should work with the following operators: `+`, `-`, `*`, and `/`. It should work with floating point or integer values.

Integration tests should be written using `jest` and `supertest`. The latter helps you make API calls in your tests.


NOTES FOR DISCUSSION

- Why might we want to avoid writing integration tests?
- Are end-to-end tests a kind of integration test?