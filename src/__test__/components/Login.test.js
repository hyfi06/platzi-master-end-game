import Login from '../../components/Login';
import Router from 'next/router';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { jest } from '@jest/globals';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SessionProvider } from '../../context/SessionContext';

describe('Login Component', () => {
  afterEach(cleanup);
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token: '',
      user: {
        id: '',
        username: '',
        typeOfUser: '',
        isActive: true,
        imageURL: '',
        firstName: '',
        lastName: '',
        defaultPath: ''
      }
    }
  };

  test('Should render Login component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should Login username renders fine', () => {
    const component = render(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(component.getByTestId('username')).toBeInTheDocument();
  });
  it('Should button submit render fine', () => {
    const component = render(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(component.getByTestId('button-sign')).toBeInTheDocument();
  });
  it('<Login />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
