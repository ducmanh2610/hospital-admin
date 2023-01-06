import { Employee, Roles } from "./";


export interface User {
    id?: string,
    username?: string,
    password?: string,
    status?: boolean,
    dateImported?: Date,
    dateModified?: Date,
    employee?: Employee,
    roles?: Roles
}