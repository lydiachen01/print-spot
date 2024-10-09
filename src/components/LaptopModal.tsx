import React, { useState } from "react";
import Image from "next/image";

const Modal: React.FC = () => {
    const [reportIssue, setReportIssue] = useState(false);
    const [showModal, setShowModal] = useState(true); // Initially show the modal
    const [formSubmission, setFormSubmission] = useState(false);

    const clickReportIssue = () => { setReportIssue(true) }
    const closeModal = () => { setShowModal(false) }
    const returnBack = () => { setReportIssue(false) }
    const submitReport = () => { setFormSubmission(true) }

    return (
        <div>
            {showModal && (
                <div className="flex">
                    {reportIssue ? (
                        <div className="w-96 border border-blue p-8 pt-6 rounded-xl bg-white drop-shadow">
                            {formSubmission ? (
                                <div>
                                    <div className="flex justify-end">
                                        <div onClick={closeModal} className="hover:cursor-pointer">
                                            <Image className="w-6 text-right" src="/icons8-close-50.png" alt="Close" width={24} height={24} />
                                        </div>
                                    </div>
                                    <div className="font-bold text-xl pr-[165px]">Thanks!</div>
                                    <div>Your report was successfully submitted.</div>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <div onClick={returnBack} className="hover:cursor-pointer flex items-center">
                                            <Image className="w-6" src="/icons8-back-30.png" alt="Go Back" width={24} height={24} />
                                            <label className="pl-1">Back</label>
                                        </div>
                                        <div onClick={closeModal} className="hover:cursor-pointer">
                                            <Image className="w-6" src="/icons8-close-50.png" alt="Close" width={24} height={24} />
                                        </div>
                                    </div>
                                    <div className="font-bold text-xl pr-[165px]">Report Issue</div>
                                    <form>
                                        <div className="pt-3">
                                            <div>Email: </div>
                                            <input className="border border-current rounded-lg p-2 w-[65%]" />
                                            <label className="pl-2">@tufts.edu</label>
                                        </div>
                                        <div className="pt-4">
                                            <div className="pb-1">Comment:</div>
                                            <textarea className="border border-current rounded-lg w-72 h-56"></textarea>
                                        </div>
                                    </form>
                                    <button onClick={submitReport} className="left border border-black rounded-lg mt-8 px-4 py-2 hover:bg-white hover:text-default bg-black text-white">Submit Report</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="w-96 border border-blue p-8 pt-6 rounded-xl bg-white drop-shadow">
                            <div className="flex justify-end">
                                <div onClick={closeModal} className="hover:cursor-pointer">
                                    <Image className="w-6 text-right" src="/icons8-close-50.png" alt="Close" width={24} height={24} />
                                </div>
                            </div>
                            <div className="font-bold text-xl pr-[165px]">Printer Name</div>
                            <div className="mb-2">XXX Street, Building, Floor YYY</div>
                            <span className="flex mb-3">
                                <Image src="/icons8-black-and-white-48.png" className="w-8 h-8" alt="Icon" width={32} height={32} />
                                <Image src="/icons8-color-wheel-48.png" className="w-8 h-8" alt="Icon" width={32} height={32} />
                            </span>
                            <div>Current Status:</div>
                            <p className="mb-24">Low on paper. Low on ink.</p>
                            <div className="pb-3">Last Used: <span>Date</span></div>
                            <button onClick={clickReportIssue} className="left border border-black rounded-lg px-4 py-2 hover:bg-black hover:text-white">Report issue</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Modal;
