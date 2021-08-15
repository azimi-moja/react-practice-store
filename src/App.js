import React from 'react';
import Layout from './components/Layout/Layout';
import Shopping from './containers/Shopping';

class App extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <Shopping />
        </Layout>
      </div>
    );
  }
}

export default App;
