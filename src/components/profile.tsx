import React from 'react';

export class Profile extends React.Component<any>{
    state:any={
        valueChangePhoto: "",
    }
    valueChangePhoto(e:any){
        this.setState({valueChangePhoto: e.target.value})
    }
    savePhotoProfile(){
        let qwe = document.getElementById('choosePhoto')
        console.log(qwe)
    }
     render(){
        console.log(this.state)
        return(
            <div>
                <div className="item">
                    <div className="container-Photo">
                        <img src={this.props.imageProfile} alt="photo-profile"/>
                    </div>
                    <div className="container-button">
                        <label htmlFor="choosePhoto"><input  onChange={(e)=>{this.valueChangePhoto(e)}}id="choosePhoto" type="file"/></label>
                        <button onClick={()=>{this.savePhotoProfile()}}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}
