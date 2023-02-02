import { User, Level } from "./"

export interface Employee {
    position?: Number,
    id?: string,
    firstName?: string,
    lastName?: string,
    description?: string,
    status?: boolean,
    address?: boolean,
    dateImported?: Date,
    dateModified?: Date,
    user?: User,
    level?: Level
}