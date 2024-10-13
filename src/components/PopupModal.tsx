import React, { useState } from "react";
import Image from "next/image";
import FormattedDate from "./FormattedDate";

const Modal: React.FC = () => {
    const [reportIssue, setReportIssue] = useState(false);
    // const [showModal, setShowModal] = useState(true); // Initially show the modal
    const [formSubmission, setFormSubmission] = useState(false);

    const clickReportIssue = () => { setReportIssue(true) }
    const returnBack = () => { setReportIssue(false) }
    const submitReport = () => { setFormSubmission(true) }

    return (
        <div>
            {reportIssue ? (
                <div className="pb-3">
                    {formSubmission ? (
                        // Thank Message Page
                        <div>
                            <div className="font-bold text-xl pb-2 pt-3">Thanks!</div>
                            <div>Your report was successfully submitted.</div>
                        </div>

                    ) : (
                        // Report Issue Page
                        <div>
                            <div className="flex justify-between mb-4">
                                <div onClick={returnBack} className="hover:cursor-pointer flex items-center">
                                    <Image className="w-6" src="/icons8-back-30.png" alt="Go Back" width={24} height={24} />
                                    {/* <label className="pl-1">Back</label> */}
                                </div>
                            </div>
                            <div className="font-bold text-xl">Report Issue</div>
                            <form>
                                <div className="pt-3">
                                    <div className="pb-1">Email: </div>
                                    <input className="border border-current rounded-lg p-2 w-[65%]" />
                                    <label className="pl-2 italic">@tufts.edu</label>
                                </div>
                                <div className="pt-4">
                                    <div className="pb-1">Comment:</div>
                                    <textarea className="border border-current rounded-lg w-60 h-16"></textarea>
                                </div>
                            </form>
                            <button onClick={submitReport} 
                                className="left border border-black \
                                rounded-md mt-8 px-4 py-2 hover:bg-white \
                                hover:text-black bg-black text-white">Submit Report</button>
                        </div>
                    )}
                </div>
            ) : (
                // Printer Information Page
                <div className="py-4 pt-6">
                    <div className="font-bold text-xl ">Printer Name</div>
                    <div className="mb-2">XXX Street, Building, Floor YYY</div>
                    <span className="flex mb-6">
                        <Image src="/icons8-black-and-white-48.png" 
                            className="w-8 h-8" 
                            alt="Icon" 
                            width={32} 
                            height={32} />
                        <Image src="/icons8-color-wheel-48.png" 
                            className="w-8 h-8" 
                            alt="Icon" 
                            width={32} 
                            height={32} />
                    </span>
                    <div >Current Status:</div>
                    <div className="mb-8 pt-1 italic">Low on paper. Low on ink.</div>
                    <div>Last Used: <FormattedDate/></div>
                    <button onClick={clickReportIssue} 
                        className="left border border-black \
                        rounded-md mt-4 px-4 py-2 hover:bg-white \
                        hover:text-black bg-black text-white">Report issue</button>
                    </div>
            )}
        </div>
    );
};

export default Modal;