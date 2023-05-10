import { LOCAL_STORAGE_KEY } from '@/consts';
import type { NavbarDisplayPreferenceAtom } from '@/stores/types';

import { atomWithStorage, createJSONStorage } from '@/libraries/jotai';

export const navbarDisplayPreferenceAtom = atomWithStorage<NavbarDisplayPreferenceAtom>(
  LOCAL_STORAGE_KEY.NAVBAR_DISPLAY_PREFERENCE,
  'opened',
  {
    ...createJSONStorage(() => localStorage),
  },
);
