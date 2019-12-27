export interface JwtResponseI {
  dataUser: {
    ok: boolean,
    usuario: any,
    rol: number,
    accessToken: string,
    expiresIn: string
  };
}
