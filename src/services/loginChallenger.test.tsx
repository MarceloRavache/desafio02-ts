import { loginChallenge } from "./login"

describe('Login Challenger', () => {
    const mockLoginChallenge = jest.fn()
    window.alert = mockLoginChallenge
    it('should retunr a alert of welcome to user', () => {
        loginChallenge()
        expect(mockLoginChallenge).toHaveBeenCalledWith('Seja Bem vindo(a)!')
    })
})