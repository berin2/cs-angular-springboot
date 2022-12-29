/**
 * LoginDto is used to log the user in by providing the username,password, and used to structure the data
 * sent to the backend.
 */
export class LoginDto{
  constructor(public username:string,public password:string) {}
}
