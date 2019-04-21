import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    lastActive: Date;
    created: Date;
    photoUrl: string;
    city: string;
    country: string;
    introduction?: string;
    interests?: string;
    lookingFor?: string;
    photos?: Photo[];
}
