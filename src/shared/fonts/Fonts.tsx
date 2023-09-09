import localFont from 'next/font/local';
import { FC } from 'react';


const FrontPageNeue = localFont({
    src: [
        {
            path: './fonts/FrontPageNeue.otf',
            style: 'normal',
            weight: '700'
        }
    ]
});

const Targa = localFont({
    src: [
        {
            path: './fonts/Targa.ttf',
            style: 'normal',
            weight: '700'
        }
    ]
});

export const Fonts: FC = () => (
    <style jsx global>
        {`
            :root {
                --font-front-page-neue: ${FrontPageNeue.style.fontFamily};
                --font-targa: ${Targa.style.fontFamily};
            }
        `}
    </style>
)