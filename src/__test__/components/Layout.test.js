import Layout from '../../components/Layout';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('Layout Component', () => {
  test('Should render Layout component', () => {
    const component = create(
      <SessionProvider>
        <Layout>
          <div></div>
        </Layout>
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
