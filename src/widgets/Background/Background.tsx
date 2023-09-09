import s from './styles.module.scss';
import { FC, useEffect, useState } from 'react';
import { ReactNode } from "react";


export interface BackgroundProps {
    children: ReactNode;
};
export const Background: FC<BackgroundProps> = ({ children }: BackgroundProps) => {
    return (<div className={s.background}>
        {children}
    </div>)
};