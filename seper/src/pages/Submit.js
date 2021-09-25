import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      source:'',
      published_year:'',
      doi:'',
      claim:'',
      evidence_level: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      source: this.state.source,
      published_year: this.state.published_year,
      doi:this.state.doi,
      claim: this.state.claim,
      evidence_level: this.state.evidence_level
    };

    axios
      .post('http://localhost:8082/api/articles', data)
      .then(res => {
        this.setState({
            title: '',
            source:'',
            published_year:'',
            doi:'',
            claim:'',
            evidence_level: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateArticle!");
      })
  };

  render() {
    return (
      <div className="CreateArticle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">
                  Create new article
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />


                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Source of Article'
                    name='source'
                    className='form-control'
                    value={this.state.source}
                    onChange={this.onChange}
                  />
                </div>

               

                <div className='form-group'>
                  <input
                    type='year'
                    placeholder='published_year'
                    name='published_year'
                    className='form-control'
                    value={this.state.published_year}
                    onChange={this.onChange}
                  />
                </div>             

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='doi of article'
                    name='doi'
                    className='form-control'
                    value={this.state.doi}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Claim of Article'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='evidence level of article'
                    name='evedence_level'
                    className='form-control'
                    value={this.state.evidence_level}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticle;