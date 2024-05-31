'use client';
import dynamic from "next/dynamic";

const NotFoundComponent = dynamic(() => import('../app/[locale]/not-found'), { ssr: false });


export default function NotFound (){
    return (
        <>
            <NotFoundComponent/>
        </>
    )
}