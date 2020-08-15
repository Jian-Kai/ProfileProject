import Facebook from './facebook';
import Github from './github';
import Linkedin from './linkedin';

const index: { [K: string]: () => JSX.Element } = {
  Facebook,
  Github,
  Linkedin,
};
export default index;
