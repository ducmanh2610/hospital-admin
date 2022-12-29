import { ToolkitType } from "./toolkit-type";

export interface Toolkit {
    toolId?: string;
    name?: string;
    dateImported?: Date;
    quantity?: Number;
    imageURL?: string;
    description?: string;
    isAvailable?: boolean;
    toolTypeId?: string;
}