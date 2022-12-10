import axios from "axios";
import { atom, selector } from "recoil";
import { capitalize } from "../Utils";

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

    return result?.data?.users?.map((user: User) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        height: user.height,
        weight: user.weight,
        age: user.age,
    })) || [];
}

export const usersState = atom<User[]>({
    key: 'usersState',
    default: [],
});

export const userKeysState = selector({
    key: 'userPropsState',
    get: ({get}) => {
        const users = get(usersState);
        return  Object.keys(users[0]).map(key => ({
            value: key, 
            capitalize: capitalize(key),
        }));
    },
  });