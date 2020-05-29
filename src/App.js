import React, { PureComponent, Fragment } from "react";

import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { userData } from "./external/userData";

import "./styles.css";
import TableData from "./component/TableData";
import PaginationData from "./component/Pagination";

class App extends PureComponent {
  state = {
    data: [],
    offset: 0,
    limit: 25,
    recordsPerPage: 25,
  };

  componentDidMount() {
    this.setState({ data: userData });
  }

  handleUpdateOffsetAndLimit = ({ offset, limit }) => {
    this.setState({ offset, limit });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h3 className="mt-2">Welcome...!</h3>
        <div className="p-4">
          <TableData
            data={userData}
            offset={this.state.offset}
            limit={this.state.limit}
          />
          <PaginationData
            data={userData}
            recordsPerPage={this.state.recordsPerPage}
            handleUpdateOffsetAndLimit={this.handleUpdateOffsetAndLimit}
          />
        </div>
      </div>
    );
  }
}

export default App;
