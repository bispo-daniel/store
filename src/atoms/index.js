import { atom } from 'jotai';

const appleUrl = process.env.REACT_APP_APPLE_URL;

export const website = atom(appleUrl);
export const user = atom(undefined);