// import './resources/style.css';

const Loader = () => {
    return (
        <div className="eyks-loader">
            <div className="eyks-arrow">
                <div className="tri-up"></div>
                <div className="tri-up-white"></div>
                <div className="tri-down"></div>
                <div className="tri-down-white"></div>
            </div>
            <div className="status-bar-container">
                <div className="status-bar"></div>
            </div>
        </div>
    );
}

export default Loader;