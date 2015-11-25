import React from 'react';
import { connect } from 'react-redux';

import HelloWorld from '../components/HelloWorld';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const App = () => {
  return (
    <main>
      <HelloWorld />
    </main>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
