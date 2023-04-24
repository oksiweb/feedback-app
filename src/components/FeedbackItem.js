import { useContext } from "react"
import { FaTimes, FaEdit } from "react-icons/fa"
import Card from "./shared/Card"
import PropTypes from "prop-types"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({ item: { raiting, text, id } }) {
  const { updateEditFeedback, deleteFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{raiting}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={() => updateEditFeedback({ raiting, text, id })} />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem
