import { useAtom } from '@/libraries/jotai';
import { navbarDisplayPreferenceAtom } from '@/stores/atoms';

export const useNavbarState = () => {
  const [navbarDisplayPreference, setNavbarDisplayPreference] = useAtom(navbarDisplayPreferenceAtom);
  return { navbarDisplayPreference, setNavbarDisplayPreference };
};
