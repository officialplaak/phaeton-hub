import { getTransactionfees } from '../utils/api/transactionfees';

export const transactionFeesSet = ({
    activePeer, address, limit, offset, filter,
    }) =>
    (dispatch) => {
        getTransactionfees({
        activePeer, address, limit, offset, filter,
        })
        .then((response) => {
            dispatch({
            data: {
                count: parseInt(response.meta.count, 10),
                confirmed: response.data,
                address,
                filter,
            },
            type: actionTypes.transactionsLoaded,
            });
        });
    };
