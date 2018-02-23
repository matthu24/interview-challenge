import React from 'react';
import { connect } from 'react-redux';
import ColorsItem from './colors_item';

const mapStateToProps = (state,{color,id}) => ({
  color,
  id
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorsItem);
