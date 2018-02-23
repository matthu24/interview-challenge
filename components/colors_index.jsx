import React from 'react';
import ColorsItem from './colors_item';

class ColorsIndex extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let colorArray = [];
    for (var i = 0; i < 12; i++) {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      colorArray.push(randomColor);
    }
    return(
      <div className='index1'>
        <div className='index1-components'>
          <ul className='swatch-list1'>
            {
              colorArray.map((color,idx) => (
                <ColorsItem key={idx} id={idx} color={color}/>
              ))
            }
          </ul>
          <div className='paginate'>1 2 3 4</div>
        </div>


      </div>
    )
  }
}

export default ColorsIndex;
