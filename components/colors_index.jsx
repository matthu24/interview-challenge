import React from 'react';

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
        &nbsp;
        <ul>

        </ul>
      </div>
    )
  }
}

export default ColorsIndex;
