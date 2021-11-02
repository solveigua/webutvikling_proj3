import SearchButton from '../Layout/SearchButton';
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mount } from 'enzyme';


configure({ adapter: new Adapter() });

test("Renders button correctly", () => {
    const mockFunc = jest.fn();
    const mock = mount(<SearchButton onClick={mockFunc} />);

    expect(mock).toMatchSnapshot;
})

test("Test click on searchbutton", () => {
    const mockFunc = jest.fn();
    const wrapper = mount(<SearchButton onClick={mockFunc} />);
    let btn = wrapper.find(".button").at(0);
    btn.simulate("click");
    expect(mockFunc).toBeCalled();
});