import api from "./axios_defaults";
import { Get_All_Places, Get_Place_Info, Get_Error } from "./action_types";

export const getAllPlaces = () => async (dispatch) => {
    try {
        let res = await api.get("/places/get-all");
        dispatch({
            type: Get_All_Places,
            payload: res
        });
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error},
            message: `error message ${error}`
        })
    }
}

export const getPlaceInfo = (place_id) => async (dispatch) => {
    try {
        let res = await api.get("/get-place-info", place_id);
        dispatch({
            type: Get_Place_Info,
            payload: res
        });
    } catch (error) {
        dispatch({
            type: Get_Error,
            payload: {error},
            message: `error message ${error}`
        })
    }
}