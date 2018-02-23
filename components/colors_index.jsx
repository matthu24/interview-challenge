import React from 'react';
import ColorsShow from './colors_show';

class ColorsIndex extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let colorArray = [];
    for (var i = 0; i < 16; i++) {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      colorArray.push(randomColor);
    }
    return(
      <div className='index1'>
        <ul className='swatch-list1'>
          {
            colorArray.map((color,idx) => (
              <ColorsShow color={color}/>
            ))
          }
        </ul>
        <div>1 2 3 4</div>

      </div>
    )
  }
}

export default ColorsIndex;
