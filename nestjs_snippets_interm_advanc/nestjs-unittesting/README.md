> 🧪 AIM- Unit Testing in Nestjs

- test each file individually
- mock any dependency that each file has

> set up test dir

- test folder inside src->users that have all the tests related to users entity
- inside this test folder their is a test file for each i.e users.controller, users.repository,users.service

> set up test for user.controller.ts

- mock the userService dependency that is a dependency used in user.controller.

- user.controller.spec.ts