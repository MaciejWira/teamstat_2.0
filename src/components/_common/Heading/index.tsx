import React from 'react';
import classNames from 'services/_common/classNames';
import firstLetterUpperCase from 'services/_common/firstLetterUpperCase';
import { BaseComponentProps } from 'types/_common/components';

import style from './Heading.module.scss';

type Props = BaseComponentProps & {
    h: 1 | 2 | 3 | 4 | 5 | 6;
    theme?: string;
    children: string;
};

const Heading: React.FC<Props> = ({ h, className, theme, children }) => {
    const _className = classNames(
        style.Heading,
        theme && style[firstLetterUpperCase(theme)],
        className
    );

    return React.createElement(`h${h}`, { className: _className }, children);
};

export default Heading;
