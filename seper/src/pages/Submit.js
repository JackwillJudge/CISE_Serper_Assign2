import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import "./Pages.css";

class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      source: "",
      published_year: "",
      doi: "",
      claim: "",
      evidence_level: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      published_year: this.state.published_year,
      doi: this.state.doi,
      claim: this.state.claim,
      evidence_level: this.state.evidence_level,
    };

    axios
    .post("http://localhost:8082/api/articles", data)
    .then((res) => {
        this.setState({
          title: "",
          author: "",
          source: "",
          published_year: "",
          doi: "",
          claim: "",
          evidence_level: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in Create Article!");
      });
  };

  render() {
    return (
      <div className="body-container">
        <div className="text-container">
          <h1>Article Submission</h1>
          <div className="submission-form">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Article"
                  required
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Source of Article"
                  name="source"
                  className="form-control"
                  value={this.state.source}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="year"
                  placeholder="Year of Publish"
                  name="published_year"
                  className="form-control"
                  value={this.state.published_year}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="DOI"
                  name="doi"
                  className="form-control"
                  value={this.state.doi}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Claim of Article"
                  name="claim"
                  className="form-control"
                  value={this.state.claim}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Evidence Level of Article "
                  name="evidence_level"
                  className="form-control"
                  value={this.state.evidence_level}
                  onChange={this.onChange}
                />
              </div>

              <input type="submit" className="sub-btn" />
              

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticle;
