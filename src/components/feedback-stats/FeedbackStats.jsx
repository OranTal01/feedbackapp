import React, { useContext } from 'react';

import { FeedbackContext } from '../../context/feedbackContext';

import './feedbackStats.scss';

const FeedbackStats = () => {
  const { feedbackList } = useContext(FeedbackContext);

  let average =
    feedbackList.reduce((acc, { rating }) => acc + rating, 0) /
    feedbackList.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  if (feedbackList.length === 0) {
    return <h1 className="no-reviews">no reviews</h1>;
  }
  return (
    <div className="feedback-stats">
      <h3>
        {`${feedbackList.length} ${
          feedbackList.length === 1 ? 'review' : 'reviews'
        }
`}
      </h3>
      <h3>{`average rating: ${average}`}</h3>
    </div>
  );
};

export default FeedbackStats;
