import { BaseComponentProps } from 'types/_common/components';
import classNames from 'services/_common/classNames';

import style from './Row.module.scss';

type Props = BaseComponentProps & {
    justifyContent?: 'start' | 'end' | 'center' | 'between';
    alignItems?: 'start' | 'end' | 'center';
    noWrap?: boolean;
    styles?: React.CSSProperties;
    gutter?: number;
};

const Row: React.FC<Props> = ({
    className,
    justifyContent,
    alignItems,
    children,
    noWrap,
    styles,
    gutter,
}) => (
    <div
        style={{
            ...styles,
            ...(gutter && {
                marginLeft: `-${gutter}px`,
                marginRight: `-${gutter}px`,
            }),
        }}
        className={classNames(
            style.Row,
            justifyContent === 'end' && style.JustifyEnd,
            justifyContent === 'center' && style.JustifyCenter,
            justifyContent === 'between' && style.JustifyBetween,
            alignItems === 'end' && style.AlignEnd,
            alignItems === 'center' && style.AlignCenter,
            noWrap && style.NoWrap,
            className
        )}
    >
        {children}
    </div>
);

export default Row;
