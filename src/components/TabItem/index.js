import './index.css'

const TabItem = props => {
  const {item, onChangeTab, activeTab} = props
  const activeTabClass = activeTab ? 'active-tab' : 'normal-tab'
  const {tabId, displayText} = item
  return (
    <li>
      <button
        type="button"
        className={`tabItem-options ${activeTabClass}`}
        onClick={() => onChangeTab(tabId)}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
