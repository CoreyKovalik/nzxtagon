import reactLogo from 'assets/react.svg'
import NzxtPlugin from "plugins/NzxtPlugin";
import KrakenContainer from './containers/KrakenContainer';
import MockNzxtPlugin from 'plugins/MockNzxtPlugin';

const KrakenPage = () => {
  return (
    <>
    <NzxtPlugin />
    {import.meta.env.DEV && <MockNzxtPlugin />}
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Nzxtagon</h1>
      <p className="read-the-docs">
        <KrakenContainer />
      </p>
    </>
  );
}

export default KrakenPage
