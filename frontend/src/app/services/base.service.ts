/**
 * Single class where API routes are defined.
 */
export abstract class BaseService {
  public static API:string = "/api";
  public static NO_AUTH_ROUTES = `${BaseService.API}/permitall`;
  public static AUTH_ROUTES: string = `${BaseService.API}/auth`;

  public static LOGIN: string = `${BaseService.NO_AUTH_ROUTES}/login`;
  public static REGISTER: string = `${BaseService.NO_AUTH_ROUTES}/register`;

}
