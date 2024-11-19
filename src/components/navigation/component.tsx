"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { SidebarProvider } from '../ui/sidebar';

const MobileNavigation = dynamic(() => import('./MobileNavigation'), { ssr: false });
const DesktopNavigation = dynamic(() => import('./DesktopNavigation'), { ssr: false });

export default function Navigation() {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? <SidebarProvider style={{position: "absolute", zIndex: "50", minHeight: "unset"}}><MobileNavigation /></SidebarProvider> : <DesktopNavigation />}
        </>
    );
}
