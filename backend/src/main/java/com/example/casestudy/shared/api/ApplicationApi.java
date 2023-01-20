package com.example.casestudy.shared.api;

/**
 * Defines constants for api routes.
 */
public abstract class ApplicationApi {

    public static final Integer APP_PAGE_SIZE = 10;

    public static final String API_ROOT = "/api";
    public static final String PERMIT_ALL_ROUTES =  API_ROOT + "/permitall";
    public static final String AUTH_ROUTES = API_ROOT + "/auth";

    public static final String LOGIN = PERMIT_ALL_ROUTES + "/login";
    public static final String REGISTER = PERMIT_ALL_ROUTES + "/register";

    public static final String LOGOUT = AUTH_ROUTES + "/logout";
    public static final String ON_MOUNT = AUTH_ROUTES + "/onmount";
    public static final String PROJECTS = AUTH_ROUTES + "/project";
    public static final String PROJECTS_PDF = PROJECTS + "/pdf";
    public static final String PROJECTS_ALL = PROJECTS + "/all";
}
