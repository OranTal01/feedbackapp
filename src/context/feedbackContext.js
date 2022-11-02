import { createContext, useState, useEffect } from 'react';

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedbackEdit: {},
    edit: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchFeedbackData();
  }, []);

  // fetch feedback data
  const FetchFeedbackData = async () => {
    const response = await fetch('/feedbackList?_sort=id&_order=desc');
    const data = await response.json();

    setFeedbackList(data);
    setIsLoading(false);
  };

  //delete feedback
  const deleteFeedback = async (id) => {
    await fetch(`/feedbackList/${id}`, { method: 'DELETE' });

    setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
  };

  //add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedbackList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbackList([data, ...feedbackList]);
  };

  const editFeedback = (feedbackEdit) => {
    setFeedbackEdit({ feedbackEdit, edit: true });
  };

  // update
  const updateFeedback = async (id, updateFeedback) => {
    const response = await fetch(`/feedbackList/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateFeedback),
    });

    const data = await response.json();

    setFeedbackList(
      feedbackList.map((feedback) => (feedback.id === id ? data : feedback))
    );

    setFeedbackEdit({ feedbackEdit: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackList,
        feedbackEdit,
        isLoading,
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
