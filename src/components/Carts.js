import React from  'react';
class Carts extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <div>
                    <div className='cartdiv'><img className='cartimg' src={this.props.src}></img><h1 className='bg3h1'>{this.props.h1}</h1><p className='bg3p'>{this.props.p}</p><a className='bg3a'>{this.props.a}</a><br></br><button className='bg3btn'>{this.props.btn}</button></div>

                </div>
            </>
        )
    }
}
export default Carts 