import Layout from '../components/Layout'
import Loginform from '../components/Loginform';
import Loginhead from '../components/Loginhead'

function Login() {
  return (
    <>
      <Layout>
        <Loginhead />
        <Loginform />
      </Layout>
    </>
  );
}

export default Login;