import React from 'react';
import MediaCard from './userCarts';

export class UserHome extends React.Component<any>{

    
    render(){
        
        if(Object.keys(this.props.serverBooks).length !== 0){
            return ( 
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {this.props.serverBooks.map((elem:any, i:number)=>{
                    return <MediaCard
                        key={i}
                        id={elem.id}
                        title={elem.title}
                        image={elem.choosePhoto}
                        description={elem.description}
                    />
                })}
            </div>)
        }else{
            return(
                <div></div>
            )
        }
        
    }
    componentDidMount(){
        this.props.queryServer()
    }
}

