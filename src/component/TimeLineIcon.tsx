import React from 'react';
import type { SVGProps } from 'react';

export function TimelineIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
            <path fill="currentColor" fillRule="evenodd" d="M7.25 1.25v13.5a.75.75 0 0 0 1.5 0V1.25a.75.75 0 0 0-1.5 0M2.5 2H6v1.5H2.5a1 1 0 0 0-1 1v1.75a1 1 0 0 0 1 1H6v1.5h-.5a1 1 0 0 0-1 1v1.75a1 1 0 0 0 1 1H6V14h-.5A2.5 2.5 0 0 1 3 11.5V9.75c0-.356.074-.694.208-1H2.5A2.5 2.5 0 0 1 0 6.25V4.5A2.5 2.5 0 0 1 2.5 2m8 5.25H10v1.5h3.5a1 1 0 0 1 1 1v1.75a1 1 0 0 1-1 1H10V14h3.5a2.5 2.5 0 0 0 2.5-2.5V9.75a2.5 2.5 0 0 0-2.5-2.5h-.708c.134-.306.208-.644.208-1V4.5A2.5 2.5 0 0 0 10.5 2H10v1.5h.5a1 1 0 0 1 1 1v1.75a1 1 0 0 1-1 1" clipRule="evenodd"></path>
        </svg>
    );
}

export default TimelineIcon;