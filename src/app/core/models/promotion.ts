import { Business } from "./user-profile.model";

export interface Promotion {
    id?: number;
    title?: string,
    startDate?: string,
    endDate?: string,
    description?: string,
    discount?: Float32Array,
    business_id?: Business
}