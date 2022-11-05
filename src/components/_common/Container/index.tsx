import React from 'react';

import { BaseComponentProps } from 'types/_common/components';
import classNames from 'services/_common/classNames';

import style from './Container.module.scss';

type Props = BaseComponentProps & {
    fullWidth?: boolean;
    fullWidthMobile?: boolean;
    alt?: boolean;
};

const Container: React.FC<Props> = ({
    className,
    fullWidth,
    fullWidthMobile,
    children,
    alt,
}) => (
    <div
        className={classNames(
            style.Container,
            fullWidth && style.Full,
            fullWidthMobile && style.FullMobile,
            alt && style['Container--alt'],
            className
        )}
    >
        {children}
    </div>
);

export default Container;
