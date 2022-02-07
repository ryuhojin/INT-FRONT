export interface UserInterface {
    userId: string;
    email: string;
    password?: string;
    name: string;
    introduction?: string;
    gitUrl?: string;
    webSiteUrl?: string;
    pictureUrl?: string;
    point?: number;
    popularity?: number;
}