import React, { PureComponent } from "react";

import moment from "moment";

class TableData extends PureComponent {
  state = {
    userData: [],
    mobileNo: "",
  };
  componentDidMount() {
    this.setState({ userData: this.props.data });
  }

  handleChange = (e) => {
    this.setState({ mobileNo: e.target.value });
  };

  handleSearch = () => {
    const filterData = this.props.data.filter(
      (data) => data.mobile === this.state.mobileNo
    );
    this.setState({ userData: filterData });
    if (this.state.mobileNo === "") {
      this.setState({ userData: this.props.data });
    }
  };

  render() {
    const { userData } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <div className="d-flex">
              <input
                style={{ width: "40%" }}
                type="text"
                className="form-control"
                //id="formGroupExampleInput"
                placeholder="Search by mobile number"
                value={this.state.mobileNo}
                onChange={this.handleChange}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        {userData && userData.length === 0 ? (
          <div className="NoRecord">No Record Found</div>
        ) : (
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">2-Factor Status</th>
                  <th scope="col">Maker</th>
                  <th scope="col">Approval Status</th>
                  <th scope="col">Comments</th>
                  <th scope="col">User Status</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Modified At</th>
                  <th scope="col">Action Type</th>
                </tr>
              </thead>
              <tbody>
                {userData &&
                  userData
                    .slice(this.props.offset, this.props.limit)
                    .map((data, idx) => (
                      <tr key={data.id}>
                        <td>{idx + 1}</td>
                        <th scope="row">{data.username}</th>
                        <td>{data.mobile}</td>
                        <td>{data.twoFactorStatus}</td>
                        <td>{data.maker}</td>
                        <td>{data.approvalStatus}</td>
                        <td>{data.comments}</td>
                        <td>{data.userStatus}</td>
                        <td>{data.fullName}</td>
                        <td>
                          {moment(data.dateTimeCreated).format(
                            "DD/MM/YYYY h:mm a"
                          )}
                        </td>
                        <td>
                          {moment(data.dateTimeModified).format(
                            "DD/MM/YYYY h:mm a"
                          )}
                        </td>
                        <td>{data.actionType}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default TableData;
