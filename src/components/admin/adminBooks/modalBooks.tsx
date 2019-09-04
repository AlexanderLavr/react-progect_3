import React from 'react';
import '../../../style/modalAdminAddBocks.css';
import Modal from '@material-ui/core/Modal';




export class AdminModalBooks extends React.Component<any,any>{

    state:any = {
        title: this.props.title,
        price: this.props.price,
        description: this.props.description,
        amount: this.props.amount,
        choosePhoto: this.props.choosePhoto
    }   
  
    valueChangePhoto(e:any){
        let img:any = document.querySelector('#ptotoOfBook');
        const toBase64 = (file:any) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        async function Main(){
            const file:any = e.target.files[0];
            return await toBase64(file)
        }
        Main().then(res =>{
            this.setState({choosePhoto: res})
            img.src = res;
        })
    }
    changeInp=(e:any)=>{
        this.setState({[e.target.placeholder]:e.target.value})
    }
    changeTextArea=(e:any)=>{
        this.setState({description: e.currentTarget.children[0].value})
    }
    render(){    
        return(
            <Modal open={this.props.openAdminModalBooks} className="modal-adminAddBoks">
                <div  className="modal-container">
                <h2 id="simple-modal-title">{this.props.labelOfModal}</h2>
                <div>
                    <div className="holder-inputs">
                        <input placeholder="title" onChange={(e)=>{this.changeInp(e)}} value={this.state.title} /> 
                        <input placeholder="price" onChange={(e)=>{this.changeInp(e)}}  value={this.state.price}/>
                        <input placeholder="amount" onChange={(e)=>{this.changeInp(e)}}  value={this.state.amount}/>
                    </div>
                    <div className="holder-choose-bookPhoto">
                        <input type="file" onChange={(e)=>{this.valueChangePhoto(e)}}/>
                        <img src={this.state.choosePhoto} id="ptotoOfBook" />
                    </div>
                    <div className="holder-descriptions" onChange={(e)=>{this.changeTextArea(e)}}>
                        <textarea defaultValue={this.state.description} ></textarea>
                    </div>   
                </div>
                <button className="save-edit" onClick={()=>{
                    if(this.props.labelOfModal === 'Add Book'){
                        return this.props.saveNewBook(this.state)
                    }else{
                        return this.props.editBook(this.state, this.props.idBooks)
                    }
                    // setTimeout(()=>{this.props.closeModalAddBooks()}, 1000)
                    }}>save</button>
                <button className="close-modal" onClick={()=>{this.props.closeModalAddBooks()}}>close</button>
                </div>
            </Modal>
        )
    }   
}
