import config from 'public/config.json';
import Giscus from './Giscus';

export default function Comment() {
  if (config.giscus) {
    return <Giscus />;
  }
}
