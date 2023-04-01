import './index.css'

const HistoryDetails = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="history-list-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="history-main-card-container">
        <div className="history-cards-container">
          <img src={logoUrl} alt="domain logo" className="logo-icon" />
          <div className="history-cards">
            <p className="title">{title}</p>
            <p className="domain-link">{domainUrl}</p>
          </div>
        </div>
        <button type="button" onClick={onDelete} className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryDetails
