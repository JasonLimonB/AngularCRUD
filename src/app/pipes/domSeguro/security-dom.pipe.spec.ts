import { SecurityDomPipe } from './security-dom.pipe';

describe('SecurityDomPipe', () => {
  it('create an instance', () => {
    const pipe = new SecurityDomPipe();
    expect(pipe).toBeTruthy();
  });
});
