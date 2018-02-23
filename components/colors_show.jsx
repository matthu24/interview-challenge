import React from 'react';


class ColorsShow extends React.Component{
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   const swatchItem = document.querySelectorALL('.swatch-item');
  //   swatchItem.style.color = 'red';
  // }

  render(){
    let color = '#' + this.props.color;
    return(
      <div className='swatch-bundle'>
        <div style={{backgroundColor:color}} className='swatch-item'>



        </div>
        <div className='swatch-name'>
          {color}
        </div>
      </div>

    )

  }
}

export default ColorsShow
