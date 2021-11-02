import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mount } from 'enzyme';
import Header from '../Layout/Header';

configure({ adapter: new Adapter() });

test("Renders header correctly", () => {
    const mockFunc = jest.fn();
    const mock = mount(<Header/>);

    expect(mock).toMatchSnapshot;
});

test("Should contain title", () => {
    const wrapper = mount(<Header />);
    const title = <h1>Marvel Movies</h1>;
    expect(wrapper.contains(title)).toEqual(true);
})