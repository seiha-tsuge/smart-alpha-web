import dayjs from 'dayjs';
import 'dayjs/locale/ja';

import type { Dayjs as _Dayjs, ManipulateType as _ManipulateType, ConfigType as _ConfigType } from 'dayjs';

dayjs.locale('ja');

export default dayjs;

export type Dayjs = _Dayjs;
export type ManipulateType = _ManipulateType;
export type ConfigType = _ConfigType;
