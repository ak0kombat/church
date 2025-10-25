import React from "react";
import Materials from "../components/Materials";
import QRcodeImage from "../assets/qrCode.png"
const MaterialsRoutes = () => {
    return (
        <section className="w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
            <Materials />
            {/* Bank Account Details Section */}
            <section className="w-full mt-12 p-8 bg-gray-50 rounded-lg flex flex-col md:flex-row gap-8 items-start capitalize">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">A/C name:</span>
                        <span>parish prist</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">A/C No:</span>
                        <span>528100140450005</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Bank name:</span>
                        <span>tamilnadu mercentile bank limited.,</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">IFSC code:</span>
                        <span>TMBL0000019</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Branch:</span>
                        <span>kattur, trichy -620190.</span>
                    </div>
                </div>
               
            </section>
        </section>
    );
};

export default MaterialsRoutes;
