'use client';

import { MainContext } from '@/context';
import { useContext } from 'react';

export default function useMainContext() {
  return useContext(MainContext);
}
