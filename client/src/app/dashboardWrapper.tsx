
"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {



    return (
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">

            <main
                className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg
                    }`}
            >
                <Navbar />
                {children}
            </main>
        </div>
    );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (

        <DashboardLayout>{children}</DashboardLayout>

    );
};

export default DashboardWrapper;