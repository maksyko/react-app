import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPosts } from "./actions/posts";
import { createError } from './actions/error';

export class Home extends React.Component {
  componentDidMount() {
    this.props.actions.getPosts();
  }
  componentDidCatch(err, info) {
    this.props.actions.createError(err, info);
  }
  render() {
    return <div>Home component</div>;
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getPosts,
        createError
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
