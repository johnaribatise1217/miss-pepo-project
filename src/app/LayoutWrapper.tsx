"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Gen/Navbar";
import Footer from "@/components/Gen/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // hide Navbar and Footer only on /booking
    const hideLayout = pathname === "/booking" || pathname.includes("success");

    return (
        <>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
}
