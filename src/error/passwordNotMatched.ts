export class PasswordNotMatched extends Error {
  constructor() {
    super('As senhas não correspondem')
  }
}
