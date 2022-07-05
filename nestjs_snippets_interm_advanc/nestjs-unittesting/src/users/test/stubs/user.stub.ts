import { User } from "src/users/schemas/user.schema";

// dummy user stub data for mocking and testing users section
// 📝 now every time this userStub is created it will be creating a new user object instance so that it is not shared wherever this stub is used i.e for different test cases.
export const userStub = (): User => {
    return {
        userId: '007',
        email: 'alpachino@example.com',
        age: 23,
        favoriteFoods: ['apples','pizza']
    }
}