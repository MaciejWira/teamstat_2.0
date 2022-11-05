import classNames from 'services/_common/classNames';
import { BaseComponentProps } from 'types/_common/components';
import style from './Wrapper.module.scss';

const Wrapper: React.FC<BaseComponentProps> = ({ children, className }) => (
    <div className={classNames(style.Wrapper, className)}>{children}</div>
);

export default Wrapper;
