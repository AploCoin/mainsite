'use client';
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";

const DesktopPage = dynamic(() => import('./page/desktop/Desktop'), { ssr: false });
const MobilePage = dynamic(() => import('./page/mobile/Mobile'), { ssr: false });

export default function Home() {
    const [isMobile, setMobile] = useState(false);

    const handleResize = () => {
        window.innerWidth > 1000 ? setMobile(false) : setMobile(true);
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
            {isMobile ? <MobilePage/> : <DesktopPage/>}
        </>
    );
}
