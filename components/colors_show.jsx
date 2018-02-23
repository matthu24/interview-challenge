import React from 'react';
import { Link, Route } from 'react-router-dom';


class ColorsShow extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    let color = '#' + this.props.match.params.colorId;
    return(
      <div  className='detail'>
        <div className='detail-components'>
          <div className='detail-swatch' style={{backgroundColor:color}}>

          </div>
          <div className='detail-info'>
            #{this.props.match.params.colorId}

          </div>

          <Link className='back'  to='/'>
            Back
          </Link>
        </div>

      </div>


    )
  }
}

export default ColorsShow
