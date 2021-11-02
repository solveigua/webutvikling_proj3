import renderer from 'react-test-renderer';

import Movies from '../Movies/Movies';


test("Contains correct components", () => {
    const mov = renderer.create(<Movies/>).toJSON;
    expect(mov).toMatchSnapshot;
});