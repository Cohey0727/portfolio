import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

class Main extends React.Component {
  state = {};
  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {}
  static getDerivedStateFromProps(props, state) {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render = () => {
    return <div>Hello</div>;
  };
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch, props) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
export default enhancer(Main);
