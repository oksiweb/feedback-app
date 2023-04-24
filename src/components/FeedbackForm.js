import React, { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RaitingSelect from "./RaitingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
  const { sendFeedback, editFeedback, updateFeedback } = useContext(FeedbackContext)
  const [text, setText] = useState("")
  const [raiting, setRaiting] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (editFeedback.edit) {
      setBtnDisabled(false)
      setText(editFeedback.item.text)
      setRaiting(editFeedback.item.raiting)
    }
  }, [editFeedback])

  const handleTextChange = e => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage("")
    } else if (text !== "" && text.length < 10) {
      setMessage("Should be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage("")
    }
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (editFeedback.edit) {
      updateFeedback(editFeedback.item.id, { id: editFeedback.item.id, text, raiting })
    } else {
      sendFeedback(text, raiting)
    }
    setBtnDisabled(true)
    setText("")
    setRaiting(10)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RaitingSelect select={setRaiting} selected={raiting} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
