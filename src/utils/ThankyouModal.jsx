import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const ThankYouModal = ({ onClose }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className="modal-backdrop"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
            }}
        >
            <div
                className="modal-body"
                style={{
                    backgroundColor: theme ? "#1e1e1e" : "white",
                    color: theme ? "#fff" : "#000",
                    padding: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                    maxWidth: "400px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div style={{ fontSize: "48px", marginBottom: "15px", color: theme ? "#4CAF50" : "#4CAF50" }}>
                    ✔️
                </div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Thanks for your renting with our groups!</h2>
                <button
                    onClick={onClose}
                    style={{
                        marginTop: "20px",
                        backgroundColor: theme ? "#1A202C" : "#3563E9",
                        color: theme ? "white" : "black",
                        padding: "10px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default ThankYouModal;