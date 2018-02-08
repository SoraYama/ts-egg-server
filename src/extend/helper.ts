import * as momont from 'moment';
export const relativeTime = (time: number) => momont(new Date(time * 1000)).fromNow();
