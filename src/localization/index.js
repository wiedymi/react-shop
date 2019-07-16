import LocalizedStrings from 'react-localization';
import en from './en'
import ru from './ru'

const Localization = new LocalizedStrings({
 ...en,
 ...ru
});

export default Localization;