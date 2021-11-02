import Enzyme, { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mount } from 'enzyme';
import Checkbox from '../UI/Checkbox';

configure({ adapter: new Adapter() });

test("Renders checkbox correctly", () => {
    const mockev = jest.fn(e => {
        console.log("Mocked function");
      });
    const mock = mount(<Checkbox 
        handleChange={mockev} 
        isChecked={true} 
        label="Release Year" 
        name="chart"
    />)
    expect(mock).toMatchSnapshot;
})


test('should call handleChange properly', () => {
    const onChangeMock = jest.fn();
    const event = {
      preventDefault() {}
    };
    const component = Enzyme.shallow(<Checkbox 
        handleChange={onChangeMock} 
        isChecked={true} 
        label="Release Year" 
        name="chart"
    />);
    component.find('input').simulate('change', event);
    expect(onChangeMock).toBeCalled();
  });
