import { Showtime } from "./showtime.model";
import { Customer } from "./user-profile.model";

export interface Ticket {
    id?: number;
    customer?: Customer;
    showtime?: Showtime;
    numberSeats?: number;
    totalPrice?: number;
}