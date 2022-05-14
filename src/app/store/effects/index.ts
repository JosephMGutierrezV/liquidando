import { TasasEffects } from './tasas.effects';
import { AuthEffects } from './auth.effects';
import { HistorialEffects } from './historial.effects';
import { LiquideEffects } from './liquide.effects';

export const EffectsArray: any[] = [
  AuthEffects,
  LiquideEffects,
  HistorialEffects,
  TasasEffects,
];
