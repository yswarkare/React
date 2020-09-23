import { Get_All_Places, Get_Place_Info, Get_Error } from "../actions/action_types";
import locationsState from "../state/locations_state";

const locationReducer = ( state = locationsState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case Get_All_Places:
            console.log(action.payload);
            stateCopy.allPlaces = action.payload.data.allPlaces;
            console.log(stateCopy);
            return stateCopy;

        case Get_Place_Info:
            console.log(action.payoad);
            stateCopy.placeInfo = action.payload.data.placeInfo;
            console.log(stateCopy);
            return stateCopy;

        case Get_Error:
            console.log(action.payoad);
            console.log(stateCopy);
            return stateCopy;

        default:
            return stateCopy;
    }
}

export default locationReducer;