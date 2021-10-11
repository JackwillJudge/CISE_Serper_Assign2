import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import "../pages/Pages.css";


class UpdateArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      source:'',
      author:'',
      published_year:'',
      doi:'',
      claim:'',
      evidence_level: '',
      practice:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/articles/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, article: res.data})
        this.setState({
          title: res.data.title,
          author: res.data.author,
          source: res.data.source,
          published_year: res.data.published_year,
          doi: res.data.doi,
          claim: res.data.claim,
          evidence_level: res.data.evidence_level,
          practice: res.data.practice,
        })
      })
      .catch(err => {
        console.log("Error from UpdateArticleInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      published_year: this.state.published_year,
      doi: this.state.doi,
      claim: this.state.claim,
      evidence_level: this.state.evidence_level,
      practice:this.state.practice,
    };

    axios
      .put('http://localhost:8082/api/articles/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-article/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateArticleInfo!");
      })
  };


  render() {
    return (
      <div className="body-container">
        <div className="text-container">
          <div className="row">
            
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Article</h1>
              <p className="lead text-center">
                  Update Article's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
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
                    placeholder='claim of article'
                    name='calim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
            <input
                    type='text'
                    placeholder='evidence level of article'
                    name='evidence_level'
                    className='form-control'
                    value={this.state.evidence_level}
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

                <input type="submit" className="sub-btn" />
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateArticleInfo;