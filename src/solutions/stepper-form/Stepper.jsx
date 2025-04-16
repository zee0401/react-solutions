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

    function handleContinue() {
        if (currentStep >= steps.length - 1) {
            return;
        }
        setCurrentStep((prev) => prev + 1);
    }

    function handleBack() {
        if (currentStep === 0) {
            return;
        }
        setCurrentStep((prev) => prev - 1);
    }
    return (
        <>
            <div className="stepper-container">
                <div>
                    {steps.map((step, i) => (
                        <div key={i} className="step-box">
                            <div
                                className={`step-count ${
                                    i === currentStep ? `active` : ""
                                }`}
                            >
                                {i + 1}
                                {i < steps.length - 1 && (
                                    <div
                                        className={`step-line ${
                                            i < currentStep ? "active" : ""
                                        }`}
                                    ></div>
                                )}
                            </div>
                            <div className={``}>{step.label}</div>
                        </div>
                    ))}
                </div>
                <div>
                    {/* {steps.map((step, i) => (
                        <div key={step.component}>{step.component}</div>
                    ))} */}
                    {steps[currentStep].component}
                </div>
                <div className="btn-container">
                    <button
                        className="btn"
                        disabled={currentStep === 0 ? true : false}
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        className="btn"
                        disabled={currentStep === steps.length - 1}
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
};

export default Stepper;
