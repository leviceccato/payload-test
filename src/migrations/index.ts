import * as migration_20250625_020825_init_project from './20250625_020825_init_project';

export const migrations = [
  {
    up: migration_20250625_020825_init_project.up,
    down: migration_20250625_020825_init_project.down,
    name: '20250625_020825_init_project'
  },
];
