import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import Rating from '../../src/components/Rating';

describe('App', function () {
  it('should display pass in number', function () {
    let container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<Rating rate={4.5} />, container);
    });
    const rate = container.querySelector<HTMLSpanElement>('#rate') as HTMLSpanElement;
    expect(rate.textContent).toBe('4.5');
  });
});
