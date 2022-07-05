import { userStub } from "../test/stubs/user.stub";

// 📝 mock UsersService just like the user.service.ts in the root of users so that jest can pick it up
export const UsersService = jest.fn().mockReturnValue({
    // returns the method that we want to mock along with the mock returned data
    // 📝 mock resolved value simulates returns  promises responses just like it is in real user.service.ts
    getUserById: jest.fn().mockResolvedValue(userStub()),
    getUsers: jest.fn().mockResolvedValue([userStub()]),
    createUser: jest.fn().mockResolvedValue(userStub()),
    updateUser: jest.fn().mockResolvedValue(userStub()),
})