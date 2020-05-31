import React from 'react';
import '../index.css';


const TradeCard = ({ trade }) => {
    return (
        <div className="tradecard mt-2">
            <div className="tradeBadge text-left">
                <p className="text-center">{trade.status}</p>
                
            </div>
            <div className="row mt-3">
                <div className="col">
                    <p className="headings">BUYER</p>
                </div>
                <div className="col">
                    <p className="headings">STATION</p>
                </div>
                <div className="col">
                    <p className="headings">SHIPMENT</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="values">{trade.buyer}</p>
                </div>
                <div className="col">
                    <p className="values">{trade.station}</p>
                </div>
                <div className="col">
                    <p className="values">{trade.shipment ? trade.shipment : "NO DATA"}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <p className="headings">TYPE</p>
                </div>
                <div className="col">
                    <p className="headings">RATE</p>
                </div>
                <div className="col">
                    <p className="headings">QUANTITY</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="values">{trade.type}</p>
                </div>
                <div className="col">
                    <p className="values">{trade.rate}<span>&#x20B9;</span>/{trade.rateUnit.slice(3)}</p>
                </div>
                <div className="col">
                    <p className="values">{trade.quantity} {trade.rateUnit.slice(3)}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="headings">QUALITY</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="values">{trade.quality ? trade.quality : "NO DATA"}</p>
                </div>
            </div>
        </div>
    );
}

export default TradeCard;
