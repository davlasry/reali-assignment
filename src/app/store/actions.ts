import { createAction, props } from '@ngrx/store';

export const Load = createAction(
  '[Player] Set playList',
  props<{ list: any[] }>()
);
// export const SetPlaying = createAction(
//   '[Player] Set PlayIng',
//   props<{ playing: boolean }>()
// );
// export const SetSongList = createAction(
//   '[Player] Set SongList',
//   props<{ list: any[] }>()
// );
// export const SetCurrentIndex = createAction(
//   '[Player] Set CurrentIndex',
//   props<{ index: number }>()
// );
