import Image from 'next/image';
import IconArrow from '@src/assets/icon-arrow.svg';
import { ButtonSearchProps } from './types';
import theme from '@src/theme/theme';
import Spinner from '@src/assets/spinner.svg';
import { Rotate } from './style';
import { BaseComponent } from '@src/theme/baseComponent';

export default function ButtonSearch({ loading, ...props }: ButtonSearchProps) {
  return (
    <BaseComponent
      tag="button"
      $styleSheet={{
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: !props.disabled
          ? theme.colors.black[500]
          : theme.colors.neutral[500],
        opacity: !props.disabled ? '1' : '0.7',
        borderRadius: '0px 15px 15px 0px',
      }}
      {...props}
    >
      {loading ? (
        <Rotate>
          <Image src={Spinner} alt="spinner" />
        </Rotate>
      ) : (
        <Image src={IconArrow} alt="icon arrow" />
      )}
    </BaseComponent>
  );
}

ButtonSearch.defaultProps = {
  loading: false,
};
