import React, { Component } from "react";
import "../App.css";
import axios from "axios";

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
      practice: "",
      errors: {
        title: "",
      },
    };
  }

  onChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      published_year: this.state.published_year,
      doi: this.state.doi,
      claim: this.state.claim,
      evidence_level: this.state.evidence_level,
      practice: this.practice,
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
          practice: "",
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
          <p>Submit a software engineering practice related article</p>
          <div className="submission-form">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Article"
                  required="test"
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
              <div>
                <select
                  type="text"
                  placeholder="Practice"
                  name="practice"
                  className="form-control-practice"
                  value={this.state.practice}
                  onChange={this.onChange}
                >
                  <option value="TDD">TDD</option>
                  <option value="BDD">BDD</option>
                  <option value="ATDD">ATDD</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  type="text"
                  placeholder="Claim of Article"
                  name="claim"
                  className="form-control-claim"
                  value={this.state.claim}
                  onChange={this.onChange}
                >
                  <option value="Improves Quality of Code">
                    Improves Quality of Code
                  </option>
                  <option value="Improves Quality of Product">
                    Improves Quality of Product
                  </option>
                  <option value="Improves Team Confidence">
                    Improves Team Confidence
                  </option>
                </select>
              </div>
              <div>
                <select
                  type="text"
                  placeholder="Evidence"
                  name="evidence_level"
                  className="form-control-evidence"
                  value={this.state.evidence_level}
                  onChange={this.onChange}
                >
                  <option value="Strong For">Strong For</option>
                  <option value="Mostly For">Mostly For</option>
                  <option value="Strong Agaisnt">Strong Agaisnt</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div className="upload-group">
                <button className="nav-button">Upload BibTex</button>
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
