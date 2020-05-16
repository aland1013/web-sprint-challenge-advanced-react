import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  const { getByText } = render(<CheckoutForm />);
  getByText('Checkout Form');
});

test('form shows success message on submit with form details', () => {
  const { getByLabelText, getByText, getByTestId } = render(<CheckoutForm />);

  fireEvent.change(getByLabelText('First Name:'), {
    target: { value: 'Adam' }
  });
  fireEvent.change(getByLabelText('Last Name:'), { target: { value: 'Land' } });
  fireEvent.change(getByLabelText('Address:'), {
    target: { value: '220 BCR' }
  });
  fireEvent.change(getByLabelText('City:'), { target: { value: 'Athens' } });
  fireEvent.change(getByLabelText('State:'), { target: { value: 'GA' } });
  fireEvent.change(getByLabelText('Zip:'), { target: { value: '30606' } });
  fireEvent.click(getByText('Checkout'));

  getByTestId('successMessage');
});
