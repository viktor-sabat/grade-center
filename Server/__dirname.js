// Bij gebruik van ES6 modules is __dirname niet beschikbaar.
// Door onderstaande constante te importeren kan je hier toch gebruik van maken.
// Meer info: https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export default __dirname;