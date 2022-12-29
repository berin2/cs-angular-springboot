import {LoginDto} from "./login-dto";

/**
 * RegisterDto is used to register the user in by providing the username,password,and used to structure the data
 * sent to the backend. */
export class RegisterDto extends LoginDto{
  constructor( username:string, password:string, public email:string) {
    super(username,password);
  }
}
