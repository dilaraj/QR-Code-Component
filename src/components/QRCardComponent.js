import React from "react";
import "../global.css";
import qrImg from "../assets/image-qr-code.png";

function QRCard() {
    return (
        <div className="card-background">
            <div className="qrImg-container">
                <img src={qrImg} alt="QR Code" className="qr-img"/>
            </div>
            <div className="text-container">
                <div className="heading">
                    Improve your front-end
                    skills by building projects
                </div>
                <div className="body">
                    Scan the QR code to visit Frontend
                    Mentor and take your coding skills to
                    the next level
                </div>
            </div>
        </div>
    );
}

export default QRCard;