import './styles.css';
import summaryData from "./data.json";

export const ResultContainer = () => {
    return <div className='card-result-container'>
        <h3>Your Result</h3>
        <div className='card-result-grade'>
            <p className='card-result-grade-score'>76</p>
            <p className='card-result-grade-total'>of 100</p>
        </div>
        <div className='card-result-container-footer'>
            <p className='card-result-container-footer-title'>Great</p>
            <p className='card-result-container-footer-text'>
                You scored higher than 65% of the people who have taken these tests.
            </p>
        </div>
    </div>
}

export const SummaryListItem = ({ item }) => {
    const imageUrl = new URL(`../../assets/images/${item.icon}`, import.meta.url).href
    return <div className='summary-list-item' style={{backgroundColor: item.backgroundColor}}>
        <div className='summary-list-item-left-col' >
            <img className='summary-list-item-icon' src={imageUrl} />
            <p className='summary-list-item-category' style={{ color: item.colorText }}>{item.category}</p>
        </div>
        <div className="summary-list-item-score">
            <p className='summary-list-item-score-val'>{item.score} &nbsp;</p>
            <p className='summary-list-item-score-total'> / 100</p>
        </div>
    </div>
}

export const SummaryList = ({ items }) => {

    return <div className='summary-list'>
        {
            items.map(item => <SummaryListItem item={item} />)
        }

    </div>
}

export const SummaryCard = () => {
    return <div className='card-summary-container'>
        <h2 className='summary-title'>Summary</h2>
        <SummaryList items={summaryData} />
        <button className="summary-continue-button">Continue</button>
    </div>
}

export const ResultsSummaryContainer = () => {
    return <div className='card-result-summary-container'>
        <ResultContainer />
        <SummaryCard />
    </div>
}