import { render } from '@testing-library/react';
import Result from '../Result';

describe('Result', () => {
  test('show appropiate message when status is Waiting', () => {
    const { getByTestId } = render(<Result status={'Waiting'} />);
    expect(getByTestId('result_footer')).toHaveTextContent(
      'Waiting for your choice!'
    );
  });
});
