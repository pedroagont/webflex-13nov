import { announceResult } from '../helpers';

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false,
    };
  });

  test('returns Won if player selection is Axe and computer selection is Tree', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(
      announceResult(fakeState.playerSelection, fakeState.compSelection)
    ).toBe('Won');
  });

  test('returns Lost if player selection is Tree and computer selection is Axe', () => {
    fakeState.playerSelection = 'Tree';
    fakeState.compSelection = 'Axe';

    expect(
      announceResult(fakeState.playerSelection, fakeState.compSelection)
    ).toBe('Lost');
  });

  test('returns Tied if player selection is Tree and computer selection is Tree', () => {
    fakeState.playerSelection = 'Tree';
    fakeState.compSelection = 'Tree';

    expect(
      announceResult(fakeState.playerSelection, fakeState.compSelection)
    ).toBe('Tied');
  });

  test('returns Waiting if no values are passed', () => {
    expect(announceResult()).toBe('Waiting');
  });
});
