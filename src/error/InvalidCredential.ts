export class InvalidCredential extends Error {
  constructor() {
    super('Credenciais inválidas')
  }
}
