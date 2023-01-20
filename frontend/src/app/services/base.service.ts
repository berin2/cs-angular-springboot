/**
 * Single class where API routes are defined.
 */
export abstract class BaseService {
  public static API:string = "/api";
  public static NO_AUTH_ROUTES = `${BaseService.API}/permitall`;
  public static AUTH_ROUTES: string = `${BaseService.API}/auth`;
  public static ON_MOUNT: string = `${BaseService.AUTH_ROUTES}/onmount`;

  public static LOGIN: string = `${BaseService.NO_AUTH_ROUTES}/login`;
  public static REGISTER: string = `${BaseService.NO_AUTH_ROUTES}/register`;

  public static LOGOUT: string = `${BaseService.AUTH_ROUTES}/logout`;
  public static PROJECTS: string = `${BaseService.AUTH_ROUTES}/project`;
  public static PROJECTS_ALL: string = `${BaseService.PROJECTS}/all`;
}
