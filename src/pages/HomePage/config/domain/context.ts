import { createContext } from 'react';
import { initialHomePageState } from './initialState';

const context = createContext(initialHomePageState);

context.displayName = 'Home Page Context';

export const HomePageContext = context;
