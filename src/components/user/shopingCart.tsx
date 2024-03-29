import React from 'react';
import { connect } from 'react-redux';
import { getState, countTotalPrice, buttonDelete, buttonAdd, buttonMult, countTotalBooks } from '../../actionsComponents/actUserHome';

interface stateShopingCart{
    selectBooksArr: []
}
class shopingCart extends React.Component<any>{
    state:stateShopingCart={
        selectBooksArr: []
    }
    componentDidMount(){
        this.setState({selectBooksArr: getState()})
    }
    render(){
        let selectBooksArr = this.state.selectBooksArr;
        this.props.countBooks(countTotalBooks(selectBooksArr))
        if(selectBooksArr.length !== 0){ 
            return (
                <div style={{
                    width: 'fit-content',
                    margin: '40px auto'
                }}>
                 
                    {selectBooksArr.map((element:any, i:number)=>{
                        return(
                            <div key={i} style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
                                <button id={`delet${element.id}`} style={{marginRight: '20px'}} onClick={(e)=>{
                                    buttonDelete(e, selectBooksArr)
                                    this.setState({selectBooksArr: getState()})
                                }}>X</button> 
                                <button id={`pl${element.id}`} style={{marginRight: '20px'}} onClick={(e)=>{
                                    buttonAdd(e, selectBooksArr)
                                    this.setState({selectBooksArr: getState()})
                                }}>+</button>
                                <img style={{
                                    display: 'inline-block',
                                    width: '50px',
                                    height: 'auto',
                                    marginRight: '20px'
                                }}src={element.choosePhoto} alt=""/>
                                <button id={`mn${element.id}`} style={{marginRight: '20px'}} onClick={(e)=>{
                                    buttonMult(e, selectBooksArr)
                                    this.setState({selectBooksArr: getState()})
                                }}>-</button>

                                <span style={{
                                    marginRight: '20px',
                                    border: 'solid',
                                    padding: '5px'
                                }}>{`Колличество: ${element.totalCount}`}</span>

                                <span style={{
                                    marginRight: '20px',
                                    border: 'solid',
                                    padding: '5px'
                                    }}>{`Цена: ${parseInt(element.price) * element.totalCount}`}</span>
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
        }
    })
)(shopingCart);