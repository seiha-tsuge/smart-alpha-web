import { atom as _atom, useAtom as _useAtom, useSetAtom as _useSetAtom, useAtomValue as _useAtomValue } from 'jotai';
import {
  atomWithStorage as _atomWithStorage,
  createJSONStorage as _createJSONStorage,
  useHydrateAtoms as _useHydrateAtoms,
} from 'jotai/utils';

export const atom = _atom;
export const useAtom = _useAtom;
export const useSetAtom = _useSetAtom;
export const useAtomValue = _useAtomValue;
export const atomWithStorage = _atomWithStorage;
export const createJSONStorage = _createJSONStorage;
export const useHydrateAtoms = _useHydrateAtoms;
