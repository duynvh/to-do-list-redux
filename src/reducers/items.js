import * as types from '../constants/ActionTypes';
import * as config from '../constants/Config';
import { remove, reject } from 'lodash';
const uuidv4 = require('uuid/v4');
let defaultState = [
    { id: "A1", name: "Coding", level: 0 },
    { id: "A2", name: "Football", level: 1 },
    { id: "A3", name: "Hangout", level: 2 },
];
let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STOGARE));
defaultState = (tasks !== null && tasks.length > 0 ) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    let id = null;
    switch (action.type) {
        case types.DELETE_ITEM:
            id = action.id;
            state = remove(state, (item) => {
                return item.id === id
            });
            localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(state));
            return [...state];
        case types.SUBMIT_FORM:
            id = null;
            let { item } = action;
            if(item.id !== '') {
                state = reject(state, {id: item.id});
                id = item.id;
            }
            else {
                id = uuidv4();
            }

            state.push({
                id: id,
                name: item.name,
                level: +item.level
            });

            localStorage.setItem(config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default items;