import { render } from '@testing-library/react';
import App from './App';

it('renders withowt crashing',()=>{
  const div = document.createElement('div');
  render(<App></App>,div);
})