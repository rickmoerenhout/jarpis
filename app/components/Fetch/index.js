import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filtered: [],
    };
  }

  handleChange = event => {
    this.setState({
      filtered: this.state.data.filter(data =>
        data.title.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    });
  };

  fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
      );
    const json = await response.json();
      this.setState({ data: json });
    }
    catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const checkFiltered = this.state.filtered;

    return (
        <div>
        <p>
          <Link to={`/`}>Link to homepage</Link>
        </p>
          <form>
            <input type="text" onChange={this.handleChange}></input>
          </form>
          <ul>
            {!checkFiltered.length ? (
            ? this.state.data.map(data => (
                <li key={data.id}>
                  {data.id} => {data.title}
            ))
              ))
            : this.state.filtered.map(data => (
                <li key={data.id}>
                  {data.id} => {data.title}
                </li>
              ))}
          </ul>
      </div>
    );
  }
}
export default Fetch;
