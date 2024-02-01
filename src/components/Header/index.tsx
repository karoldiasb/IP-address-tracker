import theme from '@src/theme/theme';
import { Box, BoxMessage, ButtonSearch, Input, Title } from '..';
import { useHeaderState } from './hooks/useHeaderState';

export default function Header() {
  const state = useHeaderState();

  return (
    <>
      <Box
        styleSheet={{
          backgroundImage: `url(/pattern-bg-desktop.png)`,
          backgroundSize: '100% 274px',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '5vh',
        }}
      >
        <Title
          text="IP Address Tracker"
          styleSheet={{ color: theme.colors.white }}
        />
        <Box
          styleSheet={{
            display: 'flex',
            marginTop: '10px',
          }}
        >
          <Input
            placeholder="Search for any IP address or domain"
            onChange={state.handleChange}
            value={state.inputValue}
          />
          <ButtonSearch
            disabled={state.disabledButton}
            onClick={state.handleOnClick}
          />
        </Box>
      </Box>
      {state.errorMessage !== null && (
        <BoxMessage message={state.errorMessage} onClose={state.onCloseModal} />
      )}
    </>
  );
}
