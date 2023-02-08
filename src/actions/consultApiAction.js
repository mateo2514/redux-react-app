import clientAxio from "../config/axios";
import { BEGIN_CONSULT_API, CONSULT_API_ERROR, CONSULT_API_SUCCESS } from "../types";

  export function consultApiAction () {
        return async ( dispatch ) => {
            dispatch(beginConsultaApi());
            console.log("Desde el action");
            try {
                const results = await clientAxio.get("v1/condiciones-atmosfericas");
                console.log(results.data.results);
                dispatch(cosultApiSuccess(results.data.results));
            } catch(  error ) {
                console.log( error );
                dispatch(consultApiError(error));
            }
        }
  };

  const beginConsultaApi = () => ({
       type: BEGIN_CONSULT_API,
       payload: true
  });


  const cosultApiSuccess = ( results ) => ({
    type: CONSULT_API_SUCCESS,
    payload: results
  });

  const consultApiError = ( error ) => ({
    type: CONSULT_API_ERROR,
    payload: error
  })