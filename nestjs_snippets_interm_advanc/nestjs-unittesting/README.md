> 🧪 AIM- Unit Testing in Nestjs

- test each file individually
- mock any dependency that each file has

> Steps (for setting up unit tests in nestjs)

1. set up test dir (to isolate the buisness code and tests)

- test folder inside src->users that have all the tests related to users entity , similarly different entity could have a test folder.
- inside this test folder their is a test file for each i.e users.controller, users.repository,users.service as suffix spec.ts

2. set up test for user.controller.ts

- mock the userService dependency that is a dependency used in user.controller to test the controller for users

- ref: user.controller.spec.ts , with jest(that comes pre-bundled with nestjs)