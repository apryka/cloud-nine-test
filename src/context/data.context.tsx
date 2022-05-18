import React, { useContext } from 'react';
import { Salon } from '../types';
import data from '../data.json';

type Data = {
  salon?: Salon[];
}

const DataContext = React.createContext<Data>({});

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => <DataContext.Provider value={data}>{children}</DataContext.Provider>;

export const useDataContext = () => useContext(DataContext);
