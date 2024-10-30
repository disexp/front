import { Film } from "./film.model";
import { Promotion } from "./promotion";
import { Business } from "./user-profile.model";

export interface Showtime{
    id?: number;  
    date?: string;
    time?: string;
    price?: number;
    film?: Film;
    Business_id?: Business;
    Promotion_id?: Promotion;
}

