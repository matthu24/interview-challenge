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
      <div style={{backgroundColor:color}} className='swatch-item'>

        &nbsp;

      </div>
    )

  }
}

export default ColorsShow
