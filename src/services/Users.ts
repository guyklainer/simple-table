import axios from "axios";

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    height: number,
    weight: number,
    email: string,
    age: number
}

export const getUsers: () => Promise<User[]> = async () => {
    const result = await axios(
        'https://dummyjson.com/users',
    );

    return result?.data?.users || [];
}