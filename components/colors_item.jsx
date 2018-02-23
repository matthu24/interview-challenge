import React from 'react';
import { Link, Route } from 'react-router-dom';


class ColorsItem extends React.Component{
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   const swatchItem = document.querySelectorALL('.swatch-item');
  //   swatchItem.style.color = 'red';
  // }

  render(){
    let color = '#' + this.props.color;
    let id = this.props.id;
    return(
      <div className='swatch-bundle'>
        <Link to='/detail'>
          <div style={{backgroundColor:color}} className='swatch-item'></div>
          <div className='swatch-name'>
            {color}
          </div>
        </Link>
      </div>

    )

  }
}

export default ColorsItem
