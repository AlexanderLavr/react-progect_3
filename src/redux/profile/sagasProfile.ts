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
           
            yield put({type: 'SAVE_PHOTO', saveImg})
        }catch(error){}
        
        
       
    })
}
 
   
