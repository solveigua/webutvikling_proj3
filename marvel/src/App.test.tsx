import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

describe('<App />', () => {

  test('renders app', () => {
    const app = renderer.create(<App/>).toJSON;
    expect(app).toMatchSnapshot;
  })
  
})

