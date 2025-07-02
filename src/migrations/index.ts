import * as migration_20250702_013005 from './20250702_013005';

export const migrations = [
  {
    up: migration_20250702_013005.up,
    down: migration_20250702_013005.down,
    name: '20250702_013005'
  },
];
