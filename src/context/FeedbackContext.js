import { useState } from "react"
import { createContext } from "react"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "good product",
      raiting: 9
    },
    {
      id: 2,
      text: "bad product",
      raiting: 2
    },
    {
      id: 3,
      text: "not good product",
      raiting: 5
    }
  ])

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false
  })

  const deleteFeedback = id => {
    const newFeedback = feedback.filter(item => item.id !== id)
    setFeedback(newFeedback)
  }

  const sendFeedback = (text, raiting) => {
    const newItem = { id: uuidv4(), text, raiting }
    setFeedback(prevFeedback => [newItem, ...prevFeedback])
  }

  const updateEditFeedback = item => {
    setEditFeedback({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map(item => (item.id === id ? updItem : item)))
    setEditFeedback({
      item: {},
      edit: false
    })
  }

  return <FeedbackContext.Provider value={{ feedback, deleteFeedback, sendFeedback, editFeedback, updateEditFeedback, updateFeedback }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext
