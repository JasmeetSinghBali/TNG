// 📝 mock UsersService just like the user.service.ts in the root of users so that jest can pick it up
export const UsersService = jest.fn().mockReturnValue({
    // returns the method that we want to mock
    getUserById: jest.fn().mockReturnValue()
})