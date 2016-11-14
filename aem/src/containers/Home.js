import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHome, fetchRefresh } from '../actions/index';
import Refresh from '../containers/refresh';

export default class Home extends Component {
  componentWillMount() {
    this.props.fetchHome();
    this.props.fetchRefresh();
  }

  renderHTML() {
    const { danger } = this.props;

    if (!this.props.danger || this.props.danger.length === 0) {
      return (
        <div className="noHome">
          <p>Loading HTML&hellip;</p>
        </div>
      );
    }

    return (
      <div dangerouslySetInnerHTML={{ __html: danger }} />
    );
  }

  renderRefresh() {
    const { refresh } = this.props;
    if (!this.props.danger || this.props.danger.length === 0) {
      return (
        <div className="noHome">
          <p>Loading Refresh&hellip;</p>
        </div>
      );
    }

    return (
      <Refresh refresh={refresh} />
    );
  }

  render() {
    return (
      <div className="home">
        {this.renderHTML()}
        {this.renderRefresh()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    danger: state.home.danger,
    refresh: state.home.refresh,
  };
}

module.exports = connect(mapStateToProps, { fetchHome, fetchRefresh })(Home);
