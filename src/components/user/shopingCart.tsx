import React from 'react';
import { connect } from 'react-redux';


import {getState, countTotalPrice, buttonDelete} from '../../actionsComponents/actUserHome';


class shopingCart extends React.Component<any>{
    state:any= {
        qwe: this.props.arrayBookInCart
    }
    render(){//????????????????????????????????????
        console.log(this.props.arrayBookInCart)
        localStorage.getItem(('selectBoock') || '[]')
        let selectBooksArr:any = JSON.parse(localStorage.getItem('selectBoock') || '[]');
        this.props.countBooks(selectBooksArr.length)
        // this.props.setCheckedBooks(selectBooksArr)
        if(selectBooksArr.length !== 0){
            return (
                <div style={{
                    width: 'fit-content',
                    margin: '40px auto'
                }}>
                    {selectBooksArr.map((element:any, i:number)=>{
                        return(
                            <div key={i} style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
                                <button id={`delet${element.id}`} style={{marginRight: '20px'}} onClick={(e)=>buttonDelete(e, selectBooksArr)}>X</button> 
                                <button id={`pl${element.id}`} style={{marginRight: '20px'}}>+</button>
                                <img style={{
                                    display: 'inline-block',
                                    width: '50px',
                                    height: 'auto',
                                    marginRight: '20px'
                                }}src={element.choosePhoto} alt=""/>
                                <button id={`mn${element.id}`} style={{marginRight: '20px'}}>-</button>

                                <span style={{
                                    marginRight: '20px',
                                    border: 'solid',
                                    padding: '5px'
                                }}>{`Колличество: ${element.totalCount}`}</span>

                                <span style={{
                                    marginRight: '20px',
                                    border: 'solid',
                                    padding: '5px'
                                    }}>{`Цена: ${element.price}`}</span>
                            </div>
                        )
                    })}
                    <p>{`Общая стоимость: ${countTotalPrice(selectBooksArr)} грн.`}</p>
                </div>
            )
        }else{
            return (<h1 style={{textAlign: 'center'}}>Ничего не выбранно!</h1>)
        }
    }
    componentDidMount(){
        localStorage.getItem(('selectBoock') || '[]')
        let selectBooksArr:any = JSON.parse(localStorage.getItem('selectBoock') || '[]');
        this.props.setCheckedBooks(selectBooksArr)
    }
}

const mapStateToProps = (state: any) => ({
    selectBook: state.userBooks.selectBook,
    arrayBookInCart: state.userBooks.arrayBookInCart 
});

export default connect(
    mapStateToProps,
    dispatch=>({
        countBooks: (countBooksInCart:number)=>{
            dispatch({type: 'START_ADD_BOOK_TO_CART', countBooksInCart})
        },
        setCheckedBooks: (array:[])=>{
            dispatch({type: 'SET_ARRAY_BOOKS', array})
        }
    })
)(shopingCart);