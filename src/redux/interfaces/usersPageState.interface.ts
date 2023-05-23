export interface IUsersPageState {
    users: IUser[]
}
export interface IUser {
    id: number,
    avatar_url: string,
    followed: boolean,
    fullName?: string,
    name?: string,
    status: string,
    location: {
        country: string,
        cityName: string
    }
}
