import React, { ChangeEvent } from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Movies from '../Movies/Movies';
import Enzyme, { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mount } from 'enzyme';


test("Contains correct components", () => {
    const mov = renderer.create(<Movies/>).toJSON;
    expect(mov).toMatchSnapshot;
});