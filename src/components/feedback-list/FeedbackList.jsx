import React, { useContext } from 'react';

import { FeedbackContext } from '../../context/feedbackContext.js';

import FeedbackItem from '../feedback-item/FeedbackItem';

import './feedbackList.scss';

const FeedbackList = () => {
  const { feedbackList } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      {feedbackList.map((feedback) => (
        <FeedbackItem feedback={feedback} key={feedback.id} />
      ))}
    </div>
  );
};

export default FeedbackList;
