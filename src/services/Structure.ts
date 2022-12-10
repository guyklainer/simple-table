import { atom, selector } from "recoil";
import { User, usersState } from "./Users";

export interface Structure {
    pageSize: number,
    currentPage: number,
    orderBy: keyof User,
    orderDirection: 'DESC' | 'ASC'
}

export const structureState = atom<Structure>({
    key: 'structureState',
    default: {
        pageSize: 10,
        currentPage: 0,
        orderBy: 'id',
        orderDirection: 'ASC'
    },
});

export const usersStructuredState = selector({
    key: 'usersStructuredState',
    get: ({get}) => {
        let users = [...get(usersState)];
        const structure = get(structureState);
        const startPaging = structure.currentPage*structure.pageSize;
        
        users.sort((userA, userB) => {
            let res = 0;
            if(typeof userA[structure.orderBy] === 'string'){
                res = userA[structure.orderBy].toString().localeCompare(userB[structure.orderBy].toString());
            } else {
                res = (userA[structure.orderBy] as number) - (userB[structure.orderBy] as number);
            }

            if(structure.orderDirection === 'DESC'){
                res = res * -1;
            }

            return res;
        });

        return users.slice(startPaging, startPaging + structure.pageSize);
    },
  });