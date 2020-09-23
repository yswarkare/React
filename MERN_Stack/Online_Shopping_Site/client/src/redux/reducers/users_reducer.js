import usersState from "../states/users_state";

const usersReducer = (state = usersState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        
        default:
        return stateCopy;
    }
}

export default usersReducer;