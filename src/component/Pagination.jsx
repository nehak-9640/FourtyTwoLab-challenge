import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import TableData from "./TableData";

class PaginationData extends PureComponent {
  state = {
    todoData: [],
    currentPageNumber: 1,
    pageCount: "",
  };

  componentDidMount() {
    this.setState({ todoData: this.props.data }, () => {
      console.log("this.props.data", this.props.data);
      this.handleData(
        this.state.todoData,
        this.state.currentPageNumber,
        this.state.perPageCount
      );
    });
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.data.length / this.props.recordsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    this.setState({ pageCount: pageNumbers });
  }

  handleData = (data, currentPageNumber) => {
    console.log("data", data);
    const indexOfLastTodo = currentPageNumber * this.props.recordsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - this.props.recordsPerPage;

    this.props.handleUpdateOffsetAndLimit({
      offset: indexOfFirstTodo,
      limit: indexOfLastTodo,
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {/* <li className="page-item">
                <button className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li> */}
              {this.state.pageCount &&
                this.state.pageCount.map((count) => (
                  <li className="page-item" key={Math.random(count + 1)}>
                    <button
                      className="page-link"
                      onClick={() =>
                        this.handleData(this.state.todoData, +count)
                      }
                    >
                      {count}
                    </button>
                  </li>
                ))}
              {/* <li className="page-item">
                <button className="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default PaginationData;
