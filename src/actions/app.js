/*
** @flow
*/

export const mockSuccess = (response: Object) => ({ type: 'MOCK_SUCCESS', payload: response });
export const mockError = (error: Object) => ({ type: 'MOCK_FAILURE', payload: error });
