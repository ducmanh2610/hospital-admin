import { User, Level } from "./"

export interface Employee {
    position?: Number,
    id?: string,
    name?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    description?: string,
    status?: true,
    address?: null,
    dateImported?: Date,
    dateModified?: Date,
    user?: User,
    level?: Level
}