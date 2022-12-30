import { Employee } from "./employee";
import { Patient } from "./patient";

export interface Record {
    recordId?: String,
    title?: String,
    dateImported?: Date,
    dateModified?: Date,
    status?: boolean,
    dieasesDescription?: string,
    patient?: Patient,
    employee?: Employee
}