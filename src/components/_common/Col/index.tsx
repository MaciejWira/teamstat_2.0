import { BaseComponentProps } from 'types/_common/components';
import classNames from 'services/_common/classNames';

import style from './Col.module.scss';

export type ColType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColPropsType = BaseComponentProps & {
    width?: ColType;
    xs?: ColType;
    sm?: ColType;
    md?: ColType;
    lg?: ColType;
    offset?: ColType;
    gutter?: number;
    fives?: boolean;
};

const Col: React.FC<ColPropsType> = ({
    className,
    width,
    offset,
    children,
    xs,
    sm,
    md,
    lg,
    gutter,
    fives,
}) => (
    <div
        className={classNames(
            style.Col,
            fives && style['Col--fives'],
            style[`Col-${width}`],
            lg && style[`Col-lg-${lg}`],
            md && style[`Col-md-${md}`],
            sm && style[`Col-sm-${sm}`],
            xs && style[`Col-xs-${xs}`],
            className
        )}
        style={{
            ...(offset && {
                marginLeft: `${(offset / 9) * 100}%`,
            }),
            ...(gutter && {
                paddingLeft: `${gutter}px`,
                paddingRight: `${gutter}px`,
            }),
        }}
    >
        {children}
    </div>
);

export default Col;
