import Image from 'next/image';
import { Box } from '..';
import IconArrow from '@src/assets/icon-arrow.svg';
import { ButtonSearchProps } from './types';
import theme from '@src/theme/theme';

export default function ButtonSearch({ ...props }: ButtonSearchProps) {
  return (
    <Box
      tag="button"
      styleSheet={{
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
      <Image src={IconArrow} alt="icon arrow" />
    </Box>
  );
}