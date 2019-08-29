import { put, takeEvery, call} from "redux-saga/effects";
import {parceJsonFile} from "../../actionsComponents/actProfile"

export function* saveImage(): IterableIterator<any>{
    yield takeEvery('DO_SAVE_PHOTO', function*(saveImg:any){
        try{
            const data = yield call(() => {//=> query to J-serv
                return fetch(`http://localhost:3000/users/${saveImg.saveImg.id}`)
                        .then(res => res.json())
                }
            );
            yield call(() => {//=> query to J-serv => add User
                fetch(`http://localhost:3000/users/${saveImg.saveImg.id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(parceJsonFile(data, saveImg.saveImg.img))
                })
            })
            
            let localStoreObj:any = localStorage.getItem('user')//work with local Store
            let parseLocalStoreObg:any = JSON.parse(localStoreObj)
            let{
                doLogin,
                loginSuccess,
                email,
                password,
                idUser,
                admin,
                imageProfile
            } = parseLocalStoreObg
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify({
                doLogin: doLogin,
                loginSuccess: loginSuccess,
                email: email,
                password: password,
                idUser: idUser,
                admin: admin,
                imageProfile: saveImg.saveImg.img
            }))//work with local Store
            yield put({type: 'SAVE_PHOTO', saveImg})
        }catch(error){}
        
        
       
    })
}
 
   
