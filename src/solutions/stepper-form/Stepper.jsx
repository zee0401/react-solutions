import React, { useState } from "react";
import "./stepper.css";

const steps = [
    {
        label: "Personal Info",
        component: <div>Persal Form</div>,
    },
    {
        label: "Contact Info",
        component: <div>Contact Form</div>,
    },
    {
        label: "Educational Info",
        component: <div>Educational Form</div>,
    },
    {
        label: "Experience Info",
        component: <div>Experience Form</div>,
    },
];

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    function handleContinue() {}

    function handleBack() {}
    return (
        <>
            <div className="stepper-container">
                <div>
                    {steps.map((step, i) => (
                        <div key={i} className="step-box">
                            <div className="step-count">
                                {i + 1}
                                <div
                                    className={`active ${
                                        i < steps.length - 1 ? `step-line` : ""
                                    }`}
                                ></div>
                            </div>
                            <div>{step.label}</div>
                        </div>
                    ))}
                </div>
                <div>
                    {/* {steps.map((step, i) => (
                        <div key={step.component}>{step.component}</div>
                    ))} */}
                    {steps[0].component}
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={handleBack}>
                        Back
                    </button>
                    <button className="btn" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
};

export default Stepper;
