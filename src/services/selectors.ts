import { selector } from "recoil";
import { capitalize } from "../Utils";
import { dataState, searchState, structureState } from "./atoms";

export const filteredDataState = selector({
    key: 'filteredDataState',
    get: ({get}) => {
        const data = get(dataState);
        const search = get(searchState);
        return  data.filter(entity => entity.name.toLowerCase().includes(search));
    },
  });

export const dataKeysState = selector({
    key: 'dataKeysState',
    get: ({get}) => {
        const data = get(dataState);
        return  Object.keys(data[0]).map(key => ({
            value: key, 
            capitalize: capitalize(key),
        }));
    },
  });

  export const dataStructuredState = selector({
    key: 'dataStructuredState',
    get: ({get}) => {
        let data = [...get(filteredDataState)];
        const structure = get(structureState);
        const startPaging = structure.currentPage*structure.pageSize;
        
        data.sort((itemA, itemB) => {
            let res = 0;
            if(typeof itemA[structure.orderBy] === 'string'){
                res = itemA[structure.orderBy].toString().localeCompare(itemB[structure.orderBy].toString());
            } else {
                res = (itemA[structure.orderBy] as number) - (itemB[structure.orderBy] as number);
            }

            if(structure.orderDirection === 'DESC'){
                res = res * -1;
            }

            return res;
        });

        return data.slice(startPaging, startPaging + structure.pageSize);
    },
  });