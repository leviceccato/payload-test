import * as migration_20250702_013005 from './20250702_013005';
import * as migration_20250709_070133 from './20250709_070133';

export const migrations = [
  {
    up: migration_20250702_013005.up,
    down: migration_20250702_013005.down,
    name: '20250702_013005',
  },
  {
    up: migration_20250709_070133.up,
    down: migration_20250709_070133.down,
    name: '20250709_070133'
  },
];
