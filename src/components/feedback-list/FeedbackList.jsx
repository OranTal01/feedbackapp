import React, { useContext } from 'react';

import { FeedbackContext } from '../../context/feedbackContext.js';

import FeedbackItem from '../feedback-item/FeedbackItem';
import Spinner from '../shared/spinner/Spinner';

import './feedbackList.scss';

const FeedbackList = () => {
  const { feedbackList, isLoading } = useContext(FeedbackContext);

  if (!feedbackList && feedbackList.length === 0) {
    return <div>No Feedback Yet</div>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedbackList.map((feedback) => (
        <FeedbackItem feedback={feedback} key={feedback.id} />
      ))}
    </div>
  );
};

export default FeedbackList;
