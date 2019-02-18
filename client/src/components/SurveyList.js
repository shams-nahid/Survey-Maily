import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSurveys } from '../actions';

class SurveyList extends Component {

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className='card darken-1'>
          <div className='card-content'>
            <span className='card-title'>{ survey.title }</span>
            <p>
              { survey.body }
            </p>
            <p className='right'>
              Sent On: { new Date(survey.dateSent).toLocaleDateString() }
            </p>
          </div>
          <div className='card-action'>
            <Link to='#'>Yes: { survey.yes }</Link>
            <Link to='#'>No: { survey.no }</Link>
          </div>
        </div>
      );
    });
  }


  render() {
    return (
      <div>
        { this.renderSurveys() }
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
