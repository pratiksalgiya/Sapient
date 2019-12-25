import React from 'react';
import { connect } from 'react-redux';
import { getData, filterDataByName, sortData, nextPageData, prevPageData } from './actions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userEnteredData: '',
    }
  }

  componentDidMount() {
    this.props.getData();
  }


  handleSort = (event) => {
    this.props.sortData(event.target.value);
  }

  handleChange = (event) => {
    this.setState({ userEnteredData: event.target.value })
  }

  handleClick = () => {
    const userEnteredData = this.state.userEnteredData
    if (userEnteredData !== '') {
      this.props.filterDataByName(userEnteredData)
    }
    else {
      this.props.getData();
    }
  }

  handleNextClick = () => {
    if (this.props.dataInfo.next !== "") {
      this.props.nextPageData(this.props.dataInfo.next);
    }
  }

  handlePrevClick = () => {
    if (this.props.dataInfo.prev !== "") {
      this.props.prevPageData(this.props.dataInfo.prev);
    }
  }


  render() {
    return (
      <div>
        <div className="padding-top">
          <label >Search by Name</label>
          <input type="text" name="Search by Name" onChange={this.handleChange}
          />
          <button onClick={this.handleClick} className="button-color margin-between">Search</button>
          <label>Sort By Id
        <select onChange={this.handleSort}>
              <option value="Ascending">Ascending</option>
              <option value="Decending">Decending</option>
            </select>
          </label>
          <button className="pagination padding-right" disabled={this.props.dataInfo.prev === ""} onClick={this.handlePrevClick}>Previous</button>
          <button className="pagination" disabled={this.props.dataInfo.next === ""} onClick={this.handleNextClick}>Next</button>
        </div>
        <div className="card-container">{this.props.data[0] && this.props.data.map((ele) => {
          return (
            <div className="column">
              <img className="max-width" src={ele.image} />
              <div className="overlay-card">
                <div>{ele.name}</div>
                <div>id: {ele.id}</div>
              </div>
              <div className="card-details">
                <div className="label-color">STATUS</div>
                <div className="data-color">{ele.status}</div>
                <div className="label-color">SPECIES</div>
                <div className="data-color">{ele.epecies}</div>
                <div className="label-color">GENDER</div>
                <div className="data-color">{ele.gender}</div>
                <div className="label-color">ORIGIN</div>
                <div className="data-color">{ele.origin.name}</div>
                <div className="label-color">LAST LOCATION</div>
                <div className="data-color">{ele.location.name}</div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  data: state.reducer.filteredData,
  dataInfo: state.reducer.dataInfo

})
const mapDispatchToProps = (dispatch) => ({
  getData: () => { console.log("dispatch Action"); dispatch(getData()) },
  filterDataByName: (filteredStr) => { console.log("dispatch Action"); dispatch(filterDataByName(filteredStr)) },
  sortData: (sortOrder) => { dispatch(sortData(sortOrder)) },
  nextPageData: (url) => { dispatch(nextPageData(url)) },
  prevPageData: (url) => { dispatch(prevPageData(url)) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



