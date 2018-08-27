import React from 'react';
import mockAPI from './Api/__mocks__/BrastlewarkAPI';
import { shallow, mount } from 'enzyme';
import App from './App';


it('shallow renders correctly', () => {
  shallow(<App />);
});

it('mounts correctly with all subcomponents', () => {
  mount(<App />);
});

it('render error message if API fails',() => {
  const wrapper = shallow(<App />)
  wrapper.setState({ error: true })
  wrapper.containsMatchingElement(<h2 />)
  expect(wrapper.contains(<h2>Oops, something went wrong!</h2>)).toEqual(true)
})

jest.mock('./Api/__mocks__/BrastlewarkAPI')

it('calls the API correctly', async () => {
  const data = await mockAPI()
  expect(data).toHaveLength //recieved data is an array
  expect(mockAPI).toHaveBeenCalledTimes(1) //API is called 1 time
  expect(mockAPI).toHaveBeenCalledWith() //API is called with no parameters
})

