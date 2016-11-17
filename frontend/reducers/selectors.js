import { values } from 'lodash';



export const selectPending = ({friends}) => console.log("hey");
export const selectRequesting = ({friends}) => console.log("hey");
export const selectExpenses = expenses => {
    return values(expenses);
};
