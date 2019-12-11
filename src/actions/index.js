// import { dispatch } from "rxjs/internal/observable/range";
// import streamsApi from '../apis/streams'
// export const signout = () => async (dispatch,getState) => {
//     const response = await  window.gapi.load('client: auth2', ()=>{
//        window.gapi.client.init({clientId:  '756226031587-2c5n9aucscd3hcalit3nprejkft1td8t.apps.googleusercontent.com',
//        scope:'email'})
      
//        return dispatch({type: 'FETCH_SIGN_IN', payload: response})
      
//     })
// }


export const signIn = userId =>{
    return {
        type: 'SIGN_IN',
        payload:userId
    }
}


export const signOut = () =>{
    return {
        type: 'SIGN_OUT'
    }
}

