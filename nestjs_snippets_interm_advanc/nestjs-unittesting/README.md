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

3. set up mock/fake userService for the user.service.ts that will have all the methods but will return dummy values which can be inspected. ref: **DUNDERmocksDUNDER** folder in the users folder

4. make sure the mocks folder is adjacent to the file u are mocking and also the file name of the mock and the real one is the same to help jest to identify the mocking along with double dunder prefix and suffix "mock" folder name should be the exact same name for jest identifying this.

5. setting up stub folder for sample/mock data to perform unit testing

**NOTE- it always better to export stub as function return value not as an object as if this object is used in lot of spaces then if someone is able to mutate this then all the code that uses this will have unexpected result as object are pass by refference.**

6.  write unit test for each of the function inside user.controller.ts in a GIVEN_WHEN_THEN fashion where given and when block refers to the setup code and then do tests in then block

                    yarn test users.controller.spec.ts

7.  testing the repository users.repository.spec.ts

- since the user.repository is using injection for injecting the userModel it has to be mocked to be tested as the injected userModel is a depend and must be mocked.

- setup abstact mock repository just like normal abstract repository that way the abstract repository can be reused in different tests while mocking.

                    database
                        - test
                            - support
                                * mock.model.ts
