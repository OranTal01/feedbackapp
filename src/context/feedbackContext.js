import { createContext, useState } from 'react';

import FeedbackData from '../data/feedbackData';

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedbackEdit: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
  };

  const addFeedback = (newFeedback) => {
    setFeedbackList([newFeedback, ...feedbackList]);
  };

  const editFeedback = (feedbackEdit) => {
    setFeedbackEdit({ feedbackEdit, edit: true });
  };

  const updateFeedback = (id, updateFeedback) => {
    setFeedbackList(
      feedbackList.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updateFeedback } : feedback
      )
    );
    setFeedbackEdit({ feedbackEdit: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackList,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
