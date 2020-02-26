import selectedTickerReducer from './../../src/reducers/selected-ticket-reducer';

describe ("selectedTicketReducer", () => {
    test('Should return default dtate if no action type is recognized', () => {
        expect(selectedTickerReducer({}, {type:null})).toEqual({});
    });
    test("Shoul record which ticket has been selected by user", () => {
        expect(selectedTickerReducer({}, {type: "SELECT_TICKET", ticketId: 1})).toEqual(1);
    })
})