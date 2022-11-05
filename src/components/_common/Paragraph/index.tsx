import React from 'react';
import classNames from 'services/_common/classNames';
import firstLetterUpperCase from 'services/_common/firstLetterUpperCase';
import { BaseComponentProps } from 'types/_common/components';

import style from './Paragraph.module.scss';

type Props = React.DOMAttributes<HTMLParagraphElement> &
    BaseComponentProps & {
        theme?: 'main' | 'large' | 'intro' | 'small' | 'bullet';
        modifier?: 'main-dark';
    };

const Paragraph: React.FC<Props> = props => {
    const { className, theme, children, modifier } = props;

    const reducedProps = { ...props };
    delete reducedProps.className;
    delete reducedProps.theme;
    delete reducedProps.children;

    return (
        <p
            className={classNames(
                style.Paragraph,
                style[firstLetterUpperCase(theme || 'main')],
                modifier && style[firstLetterUpperCase(modifier)],
                className
            )}
            {...reducedProps}
        >
            {children}
        </p>
    );
};

export default Paragraph;
