import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';

import Card from '../shared/card/Card';
import Button from '../shared/button/Button';
import RatingSelected from '../rating-selected/RatingSelected';

import { FeedbackContext } from '../../context/feedbackContext.js';

import './feedbackForm.scss';

const FeedbackForm = ({ placeholder }) => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.feedbackEdit.text);
      setRating(feedbackEdit.feedbackEdit.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.trim().length < 10) {
      setMessage('the text must be at last 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) {
    } else {
      const newFeedback = {
        id: uuidV4(),
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.feedbackEdit.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setBtnDisabled(true);
      setMessage('');
      setText('');
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelected
          select={(rating) => setRating(rating)}
          rating={rating}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder={placeholder}
            value={text}
          />
          <Button version="primary" type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

FeedbackForm.defaultProps = {
  placeholder: 'Write a review',
};

export default FeedbackForm;
