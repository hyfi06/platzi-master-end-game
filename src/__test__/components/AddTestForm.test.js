import AddTestForm from '../../components/AddTestForm';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Router from 'next/router';
import { SessionProvider } from '../../context/SessionContext';
describe('AddTestForm Component', () => {
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
  test('Should render AddTestForm component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <AddTestForm userID={''} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<AddTestForm />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <AddTestForm userID={''} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
