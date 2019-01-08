import { TimercModule } from './timerc.module';

describe('TimercModule', () => {
  let timercModule: TimercModule;

  beforeEach(() => {
    timercModule = new TimercModule();
  });

  it('should create an instance', () => {
    expect(timercModule).toBeTruthy();
  });
});
