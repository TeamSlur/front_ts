import React from 'react';
import type { SVGProps } from 'react';

export function BoardIcon(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm6 0H4v14h4zm2 0v14h4V5zm6 0v14h4V5z"></path></svg>);
}

export default BoardIcon