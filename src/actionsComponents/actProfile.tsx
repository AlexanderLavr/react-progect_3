import { connect } from 'react-redux';
import { Profile } from '../components/profile';


export const parceJsonFile = (data:any, img:string) =>{
    data.imageProfile = img
    return data
}

export const mapStateToProps = (state: any):{} => ({
    email: state.login.email,
    password: state.password,
    imageProfile: state.login.imageProfile,
    idUser: state.login.idUser
});


export default connect(
    mapStateToProps,
    dispatch=>({
        saveImgProfile: (saveImg:{})=>{
            dispatch({type: 'DO_SAVE_PHOTO', saveImg})
        }
    })
)(Profile);