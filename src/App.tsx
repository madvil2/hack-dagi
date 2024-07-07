import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('protection');
    const [maxRequests, setMaxRequests] = useState<number>(1000);
    const [currentRequests, setCurrentRequests] = useState<number>(667);

    const handleDecreaseRequests = () => {
        setCurrentRequests(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div className="App">
            <div className="header">
                <span className="title">SafeWeb3</span>
                <button className="upgrade-button">UPGRADE</button>
            </div>
            <div className="tabs">
                <span className={`tab ${activeTab === 'protection' ? 'active' : ''}`} onClick={() => setActiveTab('protection')}>🔒</span>
                <span className={`tab ${activeTab === 'decrease' ? 'active' : ''}`} onClick={() => setActiveTab('decrease')}>⚠️</span>
                <span className={`tab ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>🔍</span>
            </div>
            <div className="content">
                {activeTab === 'protection' && (
                    <div>
                        <div className="plan">Free Plan</div>
                        <div className="detects">
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${(currentRequests / maxRequests) * 100}%` }}></div>
                            </div>
                            <div className="detects-text">{currentRequests} / {maxRequests}</div>
                            <div className="detects-percentage">{((currentRequests / maxRequests) * 100).toFixed(2)}%</div>
                        </div>
                        <div className="blocked">
                            <div className="blocked-number">0</div>
                            <div className="blocked-text">Total Blocked</div>
                        </div>
                    </div>
                )}
                {activeTab === 'decrease' && (
                    <div className="decrease-content">
                        <button className="decrease-button" onClick={handleDecreaseRequests}>Decrease Used Requests</button>
                    </div>
                )}
                {activeTab === 'info' && (
                    <div className="info-content">
                        <p>Info content goes here</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
