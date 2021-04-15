'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var crostab = require('@analys/crostab');
var math = require('@aryth/math');
var fluoVector = require('@palett/fluo-vector');
var enumChars = require('@spare/enum-chars');
var ColumnsMapper = require('@vect/columns-mapper');
var Init = require('@vect/matrix-init');
var eta = require('@valjoux/eta');
var timestamp$1 = require('@valjoux/timestamp');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var ColumnsMapper__namespace = /*#__PURE__*/_interopNamespace(ColumnsMapper);

const ITALIC$2 = 'italic';
const INVERSE$2 = 'inverse';

const swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  return this[j] = temp;
};

const {
  random
} = Math;

const rand = l => ~~(random() * l);
/**
 * From [min, max] return a random integer.
 * Of [min, max], both min and max are inclusive.
 * @param {number} lo(inclusive) - int
 * @param {number} hi(inclusive) - int
 * @returns {number} int
 */


const randBetw = (lo, hi) => rand(++hi - lo) + lo;

const flopIndex = ar => rand(ar.length);

const flop = ar => ar[flopIndex(ar)];

const NUM_DESC = (a, b) => b - a;

const Amber$1 = {
  base: '#FFC107',
  lighten_5: '#FFF8E1',
  lighten_4: '#FFECB3',
  lighten_3: '#FFE082',
  lighten_2: '#FFD54F',
  lighten_1: '#FFCA28',
  darken_1: '#FFB300',
  darken_2: '#FFA000',
  darken_3: '#FF8F00',
  darken_4: '#FF6F00',
  accent_1: '#FFE57F',
  accent_2: '#FFD740',
  accent_3: '#FFC400',
  accent_4: '#FFAB00'
};
const Blue$1 = {
  base: '#2196F3',
  lighten_5: '#E3F2FD',
  lighten_4: '#BBDEFB',
  lighten_3: '#90CAF9',
  lighten_2: '#64B5F6',
  lighten_1: '#42A5F5',
  darken_1: '#1E88E5',
  darken_2: '#1976D2',
  darken_3: '#1565C0',
  darken_4: '#0D47A1',
  accent_1: '#82B1FF',
  accent_2: '#448AFF',
  accent_3: '#2979FF',
  accent_4: '#2962FF'
};
const Cyan$1 = {
  base: '#00BCD4',
  lighten_5: '#E0F7FA',
  lighten_4: '#B2EBF2',
  lighten_3: '#80DEEA',
  lighten_2: '#4DD0E1',
  lighten_1: '#26C6DA',
  darken_1: '#00ACC1',
  darken_2: '#0097A7',
  darken_3: '#00838F',
  darken_4: '#006064',
  accent_1: '#84FFFF',
  accent_2: '#18FFFF',
  accent_3: '#00E5FF',
  accent_4: '#00B8D4'
};
const DeepOrange$1 = {
  base: '#FF5722',
  lighten_5: '#FBE9E7',
  lighten_4: '#FFCCBC',
  lighten_3: '#FFAB91',
  lighten_2: '#FF8A65',
  lighten_1: '#FF7043',
  darken_1: '#F4511E',
  darken_2: '#E64A19',
  darken_3: '#D84315',
  darken_4: '#BF360C',
  accent_1: '#FF9E80',
  accent_2: '#FF6E40',
  accent_3: '#FF3D00',
  accent_4: '#DD2C00'
};
const DeepPurple$1 = {
  base: '#673AB7',
  lighten_5: '#EDE7F6',
  lighten_4: '#D1C4E9',
  lighten_3: '#B39DDB',
  lighten_2: '#9575CD',
  lighten_1: '#7E57C2',
  darken_1: '#5E35B1',
  darken_2: '#512DA8',
  darken_3: '#4527A0',
  darken_4: '#311B92',
  accent_1: '#B388FF',
  accent_2: '#7C4DFF',
  accent_3: '#651FFF',
  accent_4: '#6200EA'
};
const Green$1 = {
  base: '#4CAF50',
  lighten_5: '#E8F5E9',
  lighten_4: '#C8E6C9',
  lighten_3: '#A5D6A7',
  lighten_2: '#81C784',
  lighten_1: '#66BB6A',
  darken_1: '#43A047',
  darken_2: '#388E3C',
  darken_3: '#2E7D32',
  darken_4: '#1B5E20',
  accent_1: '#B9F6CA',
  accent_2: '#69F0AE',
  accent_3: '#00E676',
  accent_4: '#00C853'
};
const Indigo$1 = {
  base: '#3F51B5',
  lighten_5: '#E8EAF6',
  lighten_4: '#C5CAE9',
  lighten_3: '#9FA8DA',
  lighten_2: '#7986CB',
  lighten_1: '#5C6BC0',
  darken_1: '#3949AB',
  darken_2: '#303F9F',
  darken_3: '#283593',
  darken_4: '#1A237E',
  accent_1: '#8C9EFF',
  accent_2: '#536DFE',
  accent_3: '#3D5AFE',
  accent_4: '#304FFE'
};
const LightBlue$1 = {
  base: '#03A9F4',
  lighten_5: '#E1F5FE',
  lighten_4: '#B3E5FC',
  lighten_3: '#81D4FA',
  lighten_2: '#4FC3F7',
  lighten_1: '#29B6F6',
  darken_1: '#039BE5',
  darken_2: '#0288D1',
  darken_3: '#0277BD',
  darken_4: '#01579B',
  accent_1: '#80D8FF',
  accent_2: '#40C4FF',
  accent_3: '#00B0FF',
  accent_4: '#0091EA'
};
const LightGreen$1 = {
  base: '#8BC34A',
  lighten_5: '#F1F8E9',
  lighten_4: '#DCEDC8',
  lighten_3: '#C5E1A5',
  lighten_2: '#AED581',
  lighten_1: '#9CCC65',
  darken_1: '#7CB342',
  darken_2: '#689F38',
  darken_3: '#558B2F',
  darken_4: '#33691E',
  accent_1: '#CCFF90',
  accent_2: '#B2FF59',
  accent_3: '#76FF03',
  accent_4: '#64DD17'
};
const Lime$1 = {
  base: '#CDDC39',
  lighten_5: '#F9FBE7',
  lighten_4: '#F0F4C3',
  lighten_3: '#E6EE9C',
  lighten_2: '#DCE775',
  lighten_1: '#D4E157',
  darken_1: '#C0CA33',
  darken_2: '#AFB42B',
  darken_3: '#9E9D24',
  darken_4: '#827717',
  accent_1: '#F4FF81',
  accent_2: '#EEFF41',
  accent_3: '#C6FF00',
  accent_4: '#AEEA00'
};
const Orange$1 = {
  base: '#FF9800',
  lighten_5: '#FFF3E0',
  lighten_4: '#FFE0B2',
  lighten_3: '#FFCC80',
  lighten_2: '#FFB74D',
  lighten_1: '#FFA726',
  darken_1: '#FB8C00',
  darken_2: '#F57C00',
  darken_3: '#EF6C00',
  darken_4: '#E65100',
  accent_1: '#FFD180',
  accent_2: '#FFAB40',
  accent_3: '#FF9100',
  accent_4: '#FF6D00'
};
const Pink$1 = {
  base: '#E91E63',
  lighten_5: '#FCE4EC',
  lighten_4: '#F8BBD0',
  lighten_3: '#F48FB1',
  lighten_2: '#F06292',
  lighten_1: '#EC407A',
  darken_1: '#D81B60',
  darken_2: '#C2185B',
  darken_3: '#AD1457',
  darken_4: '#880E4F',
  accent_1: '#FF80AB',
  accent_2: '#FF4081',
  accent_3: '#F50057',
  accent_4: '#C51162'
};
const Purple$1 = {
  base: '#9C27B0',
  lighten_5: '#F3E5F5',
  lighten_4: '#E1BEE7',
  lighten_3: '#CE93D8',
  lighten_2: '#BA68C8',
  lighten_1: '#AB47BC',
  darken_1: '#8E24AA',
  darken_2: '#7B1FA2',
  darken_3: '#6A1B9A',
  darken_4: '#4A148C',
  accent_1: '#EA80FC',
  accent_2: '#E040FB',
  accent_3: '#D500F9',
  accent_4: '#AA00FF'
};
const Red$1 = {
  base: '#F44336',
  lighten_5: '#FFEBEE',
  lighten_4: '#FFCDD2',
  lighten_3: '#EF9A9A',
  lighten_2: '#E57373',
  lighten_1: '#EF5350',
  darken_1: '#E53935',
  darken_2: '#D32F2F',
  darken_3: '#C62828',
  darken_4: '#B71C1C',
  accent_1: '#FF8A80',
  accent_2: '#FF5252',
  accent_3: '#FF1744',
  accent_4: '#D50000'
};
const Teal$1 = {
  base: '#009688',
  lighten_5: '#E0F2F1',
  lighten_4: '#B2DFDB',
  lighten_3: '#80CBC4',
  lighten_2: '#4DB6AC',
  lighten_1: '#26A69A',
  darken_1: '#00897B',
  darken_2: '#00796B',
  darken_3: '#00695C',
  darken_4: '#004D40',
  accent_1: '#A7FFEB',
  accent_2: '#64FFDA',
  accent_3: '#1DE9B6',
  accent_4: '#00BFA5'
};
const Yellow$1 = {
  base: '#FFEB3B',
  lighten_5: '#FFFDE7',
  lighten_4: '#FFF9C4',
  lighten_3: '#FFF59D',
  lighten_2: '#FFF176',
  lighten_1: '#FFEE58',
  darken_1: '#FDD835',
  darken_2: '#FBC02D',
  darken_3: '#F9A825',
  darken_4: '#F57F17',
  accent_1: '#FFFF8D',
  accent_2: '#FFFF00',
  accent_3: '#FFEA00',
  accent_4: '#FFD600'
};
const BlueGrey$1 = {
  base: '#607D8B',
  lighten_5: '#ECEFF1',
  lighten_4: '#CFD8DC',
  lighten_3: '#B0BEC5',
  lighten_2: '#90A4AE',
  lighten_1: '#78909C',
  darken_1: '#546E7A',
  darken_2: '#455A64',
  darken_3: '#37474F',
  darken_4: '#263238',
  accent_1: '#B7C9D1',
  accent_2: '#89A5B3',
  accent_3: '#6A8EA0',
  accent_4: '#547383'
};
const Brown$1 = {
  base: '#795548',
  lighten_5: '#EFEBE9',
  lighten_4: '#D7CCC8',
  lighten_3: '#BCAAA4',
  lighten_2: '#A1887F',
  lighten_1: '#8D6E63',
  darken_1: '#6D4C41',
  darken_2: '#5D4037',
  darken_3: '#4E342E',
  darken_4: '#3E2723',
  accent_1: '#D2BEB6',
  accent_2: '#B59387',
  accent_3: '#A27767',
  accent_4: '#855F51'
};
const Grey$1 = {
  base: '#9E9E9E',
  lighten_5: '#FAFAFA',
  lighten_4: '#F5F5F5',
  lighten_3: '#EEEEEE',
  lighten_2: '#E0E0E0',
  lighten_1: '#BDBDBD',
  darken_1: '#757575',
  darken_2: '#616161',
  darken_3: '#424242',
  darken_4: '#212121',
  accent_1: '#C4C4C4',
  accent_2: '#9E9E9E',
  accent_3: '#858585',
  accent_4: '#6B6B6B'
};
/**
 * @type {Object.<string,Object<string,Object>>}
 * @property {string[]} colors
 * @property {string[]} degrees
 */

const Cards$1 = {
  red: Red$1,
  pink: Pink$1,
  purple: Purple$1,
  deepPurple: DeepPurple$1,
  indigo: Indigo$1,
  blue: Blue$1,
  lightBlue: LightBlue$1,
  cyan: Cyan$1,
  teal: Teal$1,
  green: Green$1,
  lightGreen: LightGreen$1,
  lime: Lime$1,
  yellow: Yellow$1,
  amber: Amber$1,
  orange: Orange$1,
  deepOrange: DeepOrange$1,
  brown: Brown$1,
  blueGrey: BlueGrey$1,
  grey: Grey$1
};
Reflect.defineProperty(Cards$1, 'colors', {
  get() {
    return Object.keys(Cards$1);
  },

  enumerable: false
});
Reflect.defineProperty(Cards$1, 'degrees', {
  get() {
    for (let color in Cards$1) return Object.keys(Cards$1[color]);
  },

  enumerable: false
});

const RGB = 'rgb',
      HSL = 'hsl',
      HEX = 'hex';

/**
 * Take the first "n" elements from an array.
 * @param len. The number denote the first "n" elements in an array.
 * @returns {*[]}. A new array length at "len".
 */


Array.prototype.take = function (len) {
  return this.slice(0, len);
};

Array.prototype.zip = function (another, zipper) {
  const {
    length
  } = this,
        arr = Array(length);

  for (let i = 0; i < length; i++) arr[i] = zipper(this[i], another[i], i);

  return arr; // return Array.from({ length: size }, (v, i) => zipper(this[i], another[i], i))
  // return this.map((x, i) => zipper(x, another[i]))
};

const nullish$1 = x => x === null || x === void 0;

// from x => typeof x
const STR$2 = 'string';
const FUN = 'function';

const Amber = {
  base: '#FFC107',
  lighten_5: '#FFF8E1',
  lighten_4: '#FFECB3',
  lighten_3: '#FFE082',
  lighten_2: '#FFD54F',
  lighten_1: '#FFCA28',
  darken_1: '#FFB300',
  darken_2: '#FFA000',
  darken_3: '#FF8F00',
  darken_4: '#FF6F00',
  accent_1: '#FFE57F',
  accent_2: '#FFD740',
  accent_3: '#FFC400',
  accent_4: '#FFAB00'
};
const Blue = {
  base: '#2196F3',
  lighten_5: '#E3F2FD',
  lighten_4: '#BBDEFB',
  lighten_3: '#90CAF9',
  lighten_2: '#64B5F6',
  lighten_1: '#42A5F5',
  darken_1: '#1E88E5',
  darken_2: '#1976D2',
  darken_3: '#1565C0',
  darken_4: '#0D47A1',
  accent_1: '#82B1FF',
  accent_2: '#448AFF',
  accent_3: '#2979FF',
  accent_4: '#2962FF'
};
const Cyan = {
  base: '#00BCD4',
  lighten_5: '#E0F7FA',
  lighten_4: '#B2EBF2',
  lighten_3: '#80DEEA',
  lighten_2: '#4DD0E1',
  lighten_1: '#26C6DA',
  darken_1: '#00ACC1',
  darken_2: '#0097A7',
  darken_3: '#00838F',
  darken_4: '#006064',
  accent_1: '#84FFFF',
  accent_2: '#18FFFF',
  accent_3: '#00E5FF',
  accent_4: '#00B8D4'
};
const DeepOrange = {
  base: '#FF5722',
  lighten_5: '#FBE9E7',
  lighten_4: '#FFCCBC',
  lighten_3: '#FFAB91',
  lighten_2: '#FF8A65',
  lighten_1: '#FF7043',
  darken_1: '#F4511E',
  darken_2: '#E64A19',
  darken_3: '#D84315',
  darken_4: '#BF360C',
  accent_1: '#FF9E80',
  accent_2: '#FF6E40',
  accent_3: '#FF3D00',
  accent_4: '#DD2C00'
};
const DeepPurple = {
  base: '#673AB7',
  lighten_5: '#EDE7F6',
  lighten_4: '#D1C4E9',
  lighten_3: '#B39DDB',
  lighten_2: '#9575CD',
  lighten_1: '#7E57C2',
  darken_1: '#5E35B1',
  darken_2: '#512DA8',
  darken_3: '#4527A0',
  darken_4: '#311B92',
  accent_1: '#B388FF',
  accent_2: '#7C4DFF',
  accent_3: '#651FFF',
  accent_4: '#6200EA'
};
const Green = {
  base: '#4CAF50',
  lighten_5: '#E8F5E9',
  lighten_4: '#C8E6C9',
  lighten_3: '#A5D6A7',
  lighten_2: '#81C784',
  lighten_1: '#66BB6A',
  darken_1: '#43A047',
  darken_2: '#388E3C',
  darken_3: '#2E7D32',
  darken_4: '#1B5E20',
  accent_1: '#B9F6CA',
  accent_2: '#69F0AE',
  accent_3: '#00E676',
  accent_4: '#00C853'
};
const Indigo = {
  base: '#3F51B5',
  lighten_5: '#E8EAF6',
  lighten_4: '#C5CAE9',
  lighten_3: '#9FA8DA',
  lighten_2: '#7986CB',
  lighten_1: '#5C6BC0',
  darken_1: '#3949AB',
  darken_2: '#303F9F',
  darken_3: '#283593',
  darken_4: '#1A237E',
  accent_1: '#8C9EFF',
  accent_2: '#536DFE',
  accent_3: '#3D5AFE',
  accent_4: '#304FFE'
};
const LightBlue = {
  base: '#03A9F4',
  lighten_5: '#E1F5FE',
  lighten_4: '#B3E5FC',
  lighten_3: '#81D4FA',
  lighten_2: '#4FC3F7',
  lighten_1: '#29B6F6',
  darken_1: '#039BE5',
  darken_2: '#0288D1',
  darken_3: '#0277BD',
  darken_4: '#01579B',
  accent_1: '#80D8FF',
  accent_2: '#40C4FF',
  accent_3: '#00B0FF',
  accent_4: '#0091EA'
};
const LightGreen = {
  base: '#8BC34A',
  lighten_5: '#F1F8E9',
  lighten_4: '#DCEDC8',
  lighten_3: '#C5E1A5',
  lighten_2: '#AED581',
  lighten_1: '#9CCC65',
  darken_1: '#7CB342',
  darken_2: '#689F38',
  darken_3: '#558B2F',
  darken_4: '#33691E',
  accent_1: '#CCFF90',
  accent_2: '#B2FF59',
  accent_3: '#76FF03',
  accent_4: '#64DD17'
};
const Lime = {
  base: '#CDDC39',
  lighten_5: '#F9FBE7',
  lighten_4: '#F0F4C3',
  lighten_3: '#E6EE9C',
  lighten_2: '#DCE775',
  lighten_1: '#D4E157',
  darken_1: '#C0CA33',
  darken_2: '#AFB42B',
  darken_3: '#9E9D24',
  darken_4: '#827717',
  accent_1: '#F4FF81',
  accent_2: '#EEFF41',
  accent_3: '#C6FF00',
  accent_4: '#AEEA00'
};
const Orange = {
  base: '#FF9800',
  lighten_5: '#FFF3E0',
  lighten_4: '#FFE0B2',
  lighten_3: '#FFCC80',
  lighten_2: '#FFB74D',
  lighten_1: '#FFA726',
  darken_1: '#FB8C00',
  darken_2: '#F57C00',
  darken_3: '#EF6C00',
  darken_4: '#E65100',
  accent_1: '#FFD180',
  accent_2: '#FFAB40',
  accent_3: '#FF9100',
  accent_4: '#FF6D00'
};
const Pink = {
  base: '#E91E63',
  lighten_5: '#FCE4EC',
  lighten_4: '#F8BBD0',
  lighten_3: '#F48FB1',
  lighten_2: '#F06292',
  lighten_1: '#EC407A',
  darken_1: '#D81B60',
  darken_2: '#C2185B',
  darken_3: '#AD1457',
  darken_4: '#880E4F',
  accent_1: '#FF80AB',
  accent_2: '#FF4081',
  accent_3: '#F50057',
  accent_4: '#C51162'
};
const Purple = {
  base: '#9C27B0',
  lighten_5: '#F3E5F5',
  lighten_4: '#E1BEE7',
  lighten_3: '#CE93D8',
  lighten_2: '#BA68C8',
  lighten_1: '#AB47BC',
  darken_1: '#8E24AA',
  darken_2: '#7B1FA2',
  darken_3: '#6A1B9A',
  darken_4: '#4A148C',
  accent_1: '#EA80FC',
  accent_2: '#E040FB',
  accent_3: '#D500F9',
  accent_4: '#AA00FF'
};
const Red = {
  base: '#F44336',
  lighten_5: '#FFEBEE',
  lighten_4: '#FFCDD2',
  lighten_3: '#EF9A9A',
  lighten_2: '#E57373',
  lighten_1: '#EF5350',
  darken_1: '#E53935',
  darken_2: '#D32F2F',
  darken_3: '#C62828',
  darken_4: '#B71C1C',
  accent_1: '#FF8A80',
  accent_2: '#FF5252',
  accent_3: '#FF1744',
  accent_4: '#D50000'
};
const Teal = {
  base: '#009688',
  lighten_5: '#E0F2F1',
  lighten_4: '#B2DFDB',
  lighten_3: '#80CBC4',
  lighten_2: '#4DB6AC',
  lighten_1: '#26A69A',
  darken_1: '#00897B',
  darken_2: '#00796B',
  darken_3: '#00695C',
  darken_4: '#004D40',
  accent_1: '#A7FFEB',
  accent_2: '#64FFDA',
  accent_3: '#1DE9B6',
  accent_4: '#00BFA5'
};
const Yellow = {
  base: '#FFEB3B',
  lighten_5: '#FFFDE7',
  lighten_4: '#FFF9C4',
  lighten_3: '#FFF59D',
  lighten_2: '#FFF176',
  lighten_1: '#FFEE58',
  darken_1: '#FDD835',
  darken_2: '#FBC02D',
  darken_3: '#F9A825',
  darken_4: '#F57F17',
  accent_1: '#FFFF8D',
  accent_2: '#FFFF00',
  accent_3: '#FFEA00',
  accent_4: '#FFD600'
};
const BlueGrey = {
  base: '#607D8B',
  lighten_5: '#ECEFF1',
  lighten_4: '#CFD8DC',
  lighten_3: '#B0BEC5',
  lighten_2: '#90A4AE',
  lighten_1: '#78909C',
  darken_1: '#546E7A',
  darken_2: '#455A64',
  darken_3: '#37474F',
  darken_4: '#263238',
  accent_1: '#B7C9D1',
  accent_2: '#89A5B3',
  accent_3: '#6A8EA0',
  accent_4: '#547383'
};
const Brown = {
  base: '#795548',
  lighten_5: '#EFEBE9',
  lighten_4: '#D7CCC8',
  lighten_3: '#BCAAA4',
  lighten_2: '#A1887F',
  lighten_1: '#8D6E63',
  darken_1: '#6D4C41',
  darken_2: '#5D4037',
  darken_3: '#4E342E',
  darken_4: '#3E2723',
  accent_1: '#D2BEB6',
  accent_2: '#B59387',
  accent_3: '#A27767',
  accent_4: '#855F51'
};
const Grey = {
  base: '#9E9E9E',
  lighten_5: '#FAFAFA',
  lighten_4: '#F5F5F5',
  lighten_3: '#EEEEEE',
  lighten_2: '#E0E0E0',
  lighten_1: '#BDBDBD',
  darken_1: '#757575',
  darken_2: '#616161',
  darken_3: '#424242',
  darken_4: '#212121',
  accent_1: '#C4C4C4',
  accent_2: '#9E9E9E',
  accent_3: '#858585',
  accent_4: '#6B6B6B'
};
/**
 * @type {Object.<string,Object<string,Object>>}
 * @property {string[]} colors
 * @property {string[]} degrees
 */

const Cards = {
  red: Red,
  pink: Pink,
  purple: Purple,
  deepPurple: DeepPurple,
  indigo: Indigo,
  blue: Blue,
  lightBlue: LightBlue,
  cyan: Cyan,
  teal: Teal,
  green: Green,
  lightGreen: LightGreen,
  lime: Lime,
  yellow: Yellow,
  amber: Amber,
  orange: Orange,
  deepOrange: DeepOrange,
  brown: Brown,
  blueGrey: BlueGrey,
  grey: Grey
};
Reflect.defineProperty(Cards, 'colors', {
  get() {
    return Object.keys(Cards);
  },

  enumerable: false
});
Reflect.defineProperty(Cards, 'degrees', {
  get() {
    for (let color in Cards) return Object.keys(Cards[color]);
  },

  enumerable: false
});

const diluteHex$1 = (hex, hi) => {
  hi = hi || hex.length;
  let x = '';

  for (let i = 0, el; i < hi; i++) {
    el = hex[i];
    x += el + el;
  } // for (let c of hex) x += c + c


  return x;
};
/**
 *
 * @param {string} hex
 * @returns {number}
 */


function hexToInt$1(hex) {
  if (hex.charAt(0) === '#') hex = hex.substring(1);
  if (!hex[3]) hex = diluteHex$1(hex);
  return parseInt(hex, 16);
}
/**
 *
 * @param {string} hex
 * @returns {number[]}
 */


function hexToRgb$1(hex) {
  const int = hexToInt$1(hex);
  return [int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF];
}

const ESC$1 = '\u001b';
const L$3 = ESC$1 + '[';
const R$3 = 'm';
const SC$1 = ';';
const FORE$1 = '38;2';
const CLR_FORE$1 = '39';
//   black: 30,
//   Red: 31,
//   Green: 32,
//   Yellow: 33,
//   Blue: 34,
//   magenta: 35,
//   Cyan: 36,
//   white: 37,
//   Grey: 90,
// }

const BOLD$1 = '1';
const ITALIC$1 = '3';
const UNDERLINE$1 = '4';
const INVERSE$1 = '7';
const CLR_BOLD$1 = '22';
const CLR_ITALIC$1 = '23';
const CLR_UNDERLINE$1 = '24';
const CLR_INVERSE$1 = '27';
const Effects$1 = {
  bold: [BOLD$1, CLR_BOLD$1],
  italic: [ITALIC$1, CLR_ITALIC$1],
  underline: [UNDERLINE$1, CLR_UNDERLINE$1],
  inverse: [INVERSE$1, CLR_INVERSE$1]
};
/**
 *
 * @param {string} code
 * @returns {string}
 */


const enclose$1 = code => L$3 + code + R$3;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi$1 = rgb => FORE$1 + SC$1 + rgb[0] + SC$1 + rgb[1] + SC$1 + rgb[2];

const oneself$1 = x => x;

const assignEffects$1 = function (effects) {
  const conf = this;

  for (let effect of effects) if (effect in Effects$1 && (effect = Effects$1[effect])) conf.head += SC$1 + effect[0], conf.tail += SC$1 + effect[1];

  return conf;
};
/**
 *
 * @param {string} text
 * @returns {string}
 */


function dye$1(text) {
  const {
    head,
    tail
  } = this;
  return head + text + tail;
}
/***
 *
 * @param {string|number[]} color
 * @returns {function(string):string}
 */


function Dye$1(color) {
  if (!color) return oneself$1;
  const config = this !== null && this !== void 0 ? this : {};
  let {
    ansi = rgbToAnsi$1,
    head = '',
    tail = '',
    effects
  } = config;
  if (effects !== null && effects !== void 0 && effects.length) assignEffects$1.call(config, effects);
  head = enclose$1(head + SC$1 + ansi(color)), tail = enclose$1(tail + SC$1 + CLR_FORE$1);
  return dye$1.bind({
    head,
    tail
  });
}

const sortKeysByLength$2 = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable$2 = function (dict) {
  if (this !== null && this !== void 0 && this.sort) sortKeysByLength$2(dict);
  Object.defineProperty(dict, Symbol.replace, {
    value(word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj);

      return after ? after(word) : word;
    },

    configurable: true,
    enumerable: false
  });
  return dict;
};

var _Blue$lighten_$1, _LightBlue$accent_$1, _LightBlue$lighten_$1, _Lime$lighten_$1, _ref$3, _function$1, _Grey$base$1, _return$1, _Brown$lighten_$1;

Dye$1((_Blue$lighten_$1 = Blue.lighten_2, hexToRgb$1(_Blue$lighten_$1)));
Dye$1((_LightBlue$accent_$1 = LightBlue.accent_2, hexToRgb$1(_LightBlue$accent_$1)));
Dye$1((_LightBlue$lighten_$1 = LightBlue.lighten_3, hexToRgb$1(_LightBlue$lighten_$1)));
Dye$1((_Lime$lighten_$1 = Lime.lighten_1, hexToRgb$1(_Lime$lighten_$1)));
(_ref$3 = [[/function/gi, (_function$1 = 'function', Dye$1((_Grey$base$1 = Grey.base, hexToRgb$1(_Grey$base$1)))(_function$1))], [/return/gi, (_return$1 = 'return', Dye$1((_Brown$lighten_$1 = Brown.lighten_3, hexToRgb$1(_Brown$lighten_$1)))(_return$1))], [/\bthis\b/gi, x => {
  var _x, _BlueGrey$accent_;

  return _x = x, Dye$1((_BlueGrey$accent_ = BlueGrey.accent_2, hexToRgb$1(_BlueGrey$accent_)))(_x);
}], [/\b(if|else|while|do|switch|for)\b/gi, x => {
  var _x2, _Purple$lighten_;

  return _x2 = x, Dye$1((_Purple$lighten_ = Purple.lighten_3, hexToRgb$1(_Purple$lighten_)))(_x2);
}], [/\b(var|let|const)\b/gi, x => {
  var _x3, _DeepPurple$lighten_;

  return _x3 = x, Dye$1((_DeepPurple$lighten_ = DeepPurple.lighten_3, hexToRgb$1(_DeepPurple$lighten_)))(_x3);
}]], makeReplaceable$2(_ref$3));

const CJK_LETTERS$1 = '\u4e00-\u9fbf';

const HALF_NUM = '0-9';
const HALF_UPPER = 'A-Z';
const HALF_LOWER = 'a-z';
const FULL_NUM$1 = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER = 'ａ-ｚ'; // 0xff41 - 0xff5a

const LITERAL_LOWER = `${HALF_UPPER}${HALF_LOWER}${HALF_NUM}`;
const LITERAL_UPPER = `${FULL_UPPER}${FULL_LOWER}${FULL_NUM$1}`;
const LITERAL$5 = new RegExp(`[${LITERAL_LOWER}]+`); // LITERAL = /[A-Za-z0-9]+/

const LITERAL_ANY = new RegExp(`[${LITERAL_LOWER}${CJK_LETTERS$1}${LITERAL_UPPER}]+`);

const isString = x => typeof x === STR$2;

const isLiteral = x => LITERAL$5.test(x);

const isLiteralAny = x => LITERAL_ANY.test(x);

const hasLiteral = x => isString(x) && isLiteral(x);

/**
 *
 * @type {Function|function(*):string}
 */
Function.prototype.call.bind(Object.prototype.toString);

const isNumeric$3 = x => !isNaN(x - parseFloat(x));
/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const validate$2 = (x, y) => isNaN(x - y) ? NaN : y;

const parseNum$3 = x => validate$2(x, parseFloat(x));

const first = ve => ve[0];

const values = function (o) {
  const {
    keys
  } = this;
  const l = keys === null || keys === void 0 ? void 0 : keys.length,
        ve = Array(l);

  for (let i = 0; i < l; i++) ve[i] = o[keys[i]];

  return ve;
};

const selectValues = (o, keys) => values.call({
  keys
}, o);

const SelectValues = keys => values.bind({
  keys
});

/**
 *
 * @param sampleCollection
 * @param {Object} config
 * @param {[]} config.side
 * @param {[]} config.head
 * @returns {CrosTab}
 */


function samplesToCrostab(sampleCollection, config = {}) {
  var _config$side, _config$head, _samples;

  const samples = config.side ? selectValues(sampleCollection, config.side) : Object.values(sampleCollection);
  const side = (_config$side = config.side) !== null && _config$side !== void 0 ? _config$side : Object.keys(sampleCollection);
  const head = (_config$head = config.head) !== null && _config$head !== void 0 ? _config$head : Object.keys((_samples = samples, first(_samples)));
  const rows = samples.map(config.head ? SelectValues(config.head) : Object.values);
  return crostab.CrosTab.from({
    side,
    head,
    rows
  });
}

const rgbToInt$1 = ([r, g, b]) => ((r & 0xFF) << 16) + ((g & 0xFF) << 8) + (b & 0xFF);
/**
 * @param {[number,number,number]} rgb
 * @returns {string}
 */


const rgbToHex$1 = rgb => '#' + rgbToInt$1(rgb).toString(16).toUpperCase().padStart(6, '0');

const bound = ([r, g, b]) => {
  let ma = r,
      mi = r;

  if (g > r) {
    ma = g;
  } else {
    mi = g;
  }

  if (b > ma) ma = b;
  if (b < mi) mi = b;
  return {
    max: ma,
    sum: ma + mi,
    dif: ma - mi
  };
};

const hue = (r, g, b, max, dif) => {
  if (dif === 0) return 0;

  switch (max) {
    case r:
      return ((g - b) / dif + (g < b ? 6 : 0)) % 6;

    case g:
      return (b - r) / dif + 2;

    case b:
      return (r - g) / dif + 4;
  }
};

const THOUSAND = 1000;
/**
 * !dif: dif===0
 * @param {number} r - [0,255]
 * @param {number} g - [0,255]
 * @param {number} b - [0,255]
 * @returns {[number,number,number]} [Hue([0,360]), Saturation([0,100]), Lightness([0,100])]
 */

function rgbToHsl([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  const {
    max,
    sum,
    dif
  } = bound([r, g, b]);
  let h = hue(r, g, b, max, dif) * 60,
      s = !dif ? 0 : sum > 1 ? dif / (2 - sum) : dif / sum,
      l = sum / 2;
  return [math.round(h), math.round(s * THOUSAND) / 10, math.round(l * THOUSAND) / 10];
}

const diluteHex = (hex, hi) => {
  hi = hi || hex.length;
  let x = '';

  for (let i = 0, el; i < hi; i++) {
    el = hex[i];
    x += el + el;
  } // for (let c of hex) x += c + c


  return x;
};
/**
 *
 * @param {string} hex
 * @returns {number}
 */


function hexToInt(hex) {
  if (hex.charAt(0) === '#') hex = hex.substring(1);
  if (!hex[3]) hex = diluteHex(hex);
  return parseInt(hex, 16);
}
/**
 *
 * @param {string} hex
 * @returns {number[]}
 */


function hexToRgb(hex) {
  const int = hexToInt(hex);
  return [int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF];
}

const hexToHsl = hex => {
  var _ref, _hex;

  return _ref = (_hex = hex, hexToRgb(_hex)), rgbToHsl(_ref);
};
/**
 *
 * @param {number} n
 * @param {number} h
 * @param {number} a
 * @param {number} l
 * @returns {number}
 */


const hf$1 = (n, h, a, l) => {
  const k = (n + h / 30) % 12;
  return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
};
/**
 *
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 */


function hslToRgb$1([h, s, l]) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l),
        r = hf$1(0, h, a, l),
        g = hf$1(8, h, a, l),
        b = hf$1(4, h, a, l);
  return [math.round(r * 0xFF), math.round(g * 0xFF), math.round(b * 0xFF)]; // return [r * 0xFF & 0xFF, g * 0xFF & 0xFF, b * 0xFF & 0xFF]
}

const hslToHex$1 = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb$1(_hsl)), rgbToHex$1(_ref);
};

const ESC = '\u001b';
const L$2 = ESC + '[';
const R$2 = 'm';
const SC = ';';
const FORE = '38;2';
const CLR_FORE = '39';
//   black: 30,
//   Red: 31,
//   Green: 32,
//   Yellow: 33,
//   Blue: 34,
//   magenta: 35,
//   Cyan: 36,
//   white: 37,
//   Grey: 90,
// }

const BOLD = '1';
const ITALIC = '3';
const UNDERLINE = '4';
const INVERSE = '7';
const CLR_BOLD = '22';
const CLR_ITALIC = '23';
const CLR_UNDERLINE = '24';
const CLR_INVERSE = '27';
const Effects = {
  bold: [BOLD, CLR_BOLD],
  italic: [ITALIC, CLR_ITALIC],
  underline: [UNDERLINE, CLR_UNDERLINE],
  inverse: [INVERSE, CLR_INVERSE]
};
/**
 *
 * @param {string} code
 * @returns {string}
 */


const enclose = code => L$2 + code + R$2;
/**
 *
 * @param {number[]} rgb - array of three integers, each from 0 to 255
 * @returns {string}
 */


const rgbToAnsi = rgb => FORE + SC + rgb[0] + SC + rgb[1] + SC + rgb[2];

const hexToAnsi = hex => {
  const int = hexToInt(hex);
  return FORE + SC + (int >> 16 & 0xFF) + SC + (int >> 8 & 0xFF) + SC + (int & 0xFF);
};

const hslToAnsi = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb$1(_hsl)), rgbToAnsi(_ref);
};

const assignEffects = function (effects) {
  const conf = this;

  for (let effect of effects) if (effect in Effects && (effect = Effects[effect])) conf.head += SC + effect[0], conf.tail += SC + effect[1];

  return conf;
};
/**
 *
 * @param {string} text
 * @returns {string}
 */


function dye(text) {
  const {
    head,
    tail
  } = this;
  return head + text + tail;
}
/***
 *
 * @param {string|number[]} color
 * @returns {function(string):string}
 */


function Dye(color) {
  if (!color) return oneself$1;
  const config = this !== null && this !== void 0 ? this : {};
  let {
    ansi = rgbToAnsi,
    head = '',
    tail = '',
    effects
  } = config;
  if (effects !== null && effects !== void 0 && effects.length) assignEffects.call(config, effects);
  head = enclose(head + SC + ansi(color)), tail = enclose(tail + SC + CLR_FORE);
  return dye.bind({
    head,
    tail
  });
}

const spaceToAnsi$1 = space => space === RGB ? rgbToAnsi : space === HEX ? hexToAnsi : space === HSL ? hslToAnsi : rgbToAnsi;
/** @type {Function} */


class DyeFactory$1 {
  /** @type {Function} */

  /** @type {string} */

  /** @type {string} */
  constructor(ansi, head, tail) {
    this.ansi = void 0;
    this.head = void 0;
    this.tail = void 0;
    this.ansi = ansi;
    this.head = head;
    this.tail = tail;
    return Dye.bind(this);
  }
  /**
   * @param colorSpace
   * @param effects
   * @returns {DyeFactory|Function}
   */


  static build(colorSpace, effects) {
    var _colorSpace;

    const conf = {
      ansi: (_colorSpace = colorSpace, spaceToAnsi$1(_colorSpace)),
      head: '',
      tail: ''
    };
    if (effects !== null && effects !== void 0 && effects.length) assignEffects.call(conf, effects);
    return Dye.bind(conf);
  }

  static prep(colorSpace, ...effects) {
    var _colorSpace2;

    const conf = {
      ansi: (_colorSpace2 = colorSpace, spaceToAnsi$1(_colorSpace2)),
      head: '',
      tail: ''
    };
    if (effects !== null && effects !== void 0 && effects.length) assignEffects.call(conf, effects);
    return Dye.bind(conf);
  }

}

const mapper$5 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const mutate$4 = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

const RED = 'red',
      PINK = 'pink',
      PURPLE = 'purple',
      DEEPPURPLE = 'deepPurple',
      INDIGO = 'indigo',
      BLUE = 'blue',
      LIGHTBLUE = 'lightBlue',
      CYAN = 'cyan',
      TEAL = 'teal',
      GREEN = 'green',
      LIGHTGREEN = 'lightGreen',
      LIME = 'lime',
      YELLOW = 'yellow',
      AMBER = 'amber',
      ORANGE = 'orange',
      DEEPORANGE = 'deepOrange',
      BROWN = 'brown',
      BLUEGREY = 'blueGrey',
      GREY = 'grey';

/**
 * Create an array.
 * @param {number} size Integer starts at zero.
 * @param {function(number):*|*} [fn] defines how index i corresponds to value(i).
 * @returns {*[]}
 */


const init = (size, fn) => {
  if (size === (size & 0x7f)) {
    let arr = [];

    for (let i = 0; i < size; i++) arr[i] = fn(i);

    return arr;
  }

  return Array(size).fill(null).map((_, i) => fn(i));
};

const red = [RED, PINK];
const purple = [PURPLE, DEEPPURPLE];
const blue = [INDIGO, BLUE, LIGHTBLUE, CYAN];
const green = [TEAL, GREEN];
const yellowGreen = [LIGHTGREEN, LIME, YELLOW];
const orange$1 = [AMBER, ORANGE, DEEPORANGE];
const grey$1 = [BROWN, BLUEGREY, GREY];
const rainbow = [].concat(red, purple, blue, green, yellowGreen, orange$1);
const entire = rainbow.concat(grey$1);
const ColorGroups = {
  red,
  purple,
  blue,
  green,
  yellowGreen,
  orange: orange$1,
  grey: grey$1,
  rainbow,
  entire
};
const accents = init(4, i => `accent_${i + 1}`).reverse(),
      lightens = init(5, i => `lighten_${i + 1}`).reverse(),
      darkens = init(4, i => `darken_${i + 1}`);
const Degrees = {
  entire: [...accents, ...lightens, 'base', ...darkens],
  base: ['base'],
  lightens: lightens,
  darkens: darkens,
  accents: accents,
  readable: [...accents.slice(-3), ...lightens.slice(-3), 'base']
}; //   [/light/gi, 'l'],
//   [/deep/gi, 'd']
// ] |> makeReplaceable
// export const shortenDescription = name => name.replace(lexicon, x => camelToSnake(x, '.'))

function palettCrostab({
  space = HEX,
  degrees = Degrees.entire,
  colors = ColorGroups.entire,
  dyed = false
} = {}) {
  const crostab = samplesToCrostab(Cards$1, {
    side: colors,
    head: degrees
  }).transpose();

  if (space !== HEX) {
    crostab.mutate(space === RGB ? hexToRgb : space === HSL ? hexToHsl : oneself$1);
  }

  if (dyed) {
    const dyeFactory = DyeFactory$1.build(space, [INVERSE$2]);
    space === HEX ? crostab.mutate(hex => {
      var _hex;

      return _hex = hex, dyeFactory(hex)(_hex);
    }) : crostab.mutate(xyz => {
      var _mapper;

      return _mapper = mapper$5(xyz, v => v.toFixed(0).padStart(3)), dyeFactory(xyz)(_mapper);
    });
  }

  return crostab; // .mutateBanner(shortenDescription)
}

const constraint$1 = (x, min, max) => x > max ? max : x < min ? min : x;

const toner = (hsl, dh, ds, dl) => {
  hsl[0] = constraint$1(hsl[0] + dh, 0, 360);
  hsl[1] = constraint$1(hsl[1] + ds, 0, 100);
  hsl[2] = constraint$1(hsl[2] + dl, 0, 100);
  return hsl;
};

({
  max: Cards$1.cyan.accent_2,
  min: Cards$1.green.darken_1,
  na: Cards$1.grey.lighten_4
});
({
  max: Cards$1.cyan.lighten_3,
  min: Cards$1.orange.lighten_2,
  na: Cards$1.pink.lighten_4
});
({
  max: Cards$1.green.accent_3,
  min: Cards$1.deepPurple.accent_1,
  na: Cards$1.teal.accent_1
});
({
  max: Cards$1.cyan.accent_1,
  min: Cards$1.lightBlue.accent_4,
  na: Cards$1.deepOrange.accent_1
});
const FRESH = {
  max: Cards$1.lightGreen.accent_3,
  min: Cards$1.deepOrange.accent_3,
  na: Cards$1.blue.lighten_3
};
({
  max: Cards$1.orange.accent_2,
  min: Cards$1.purple.accent_1,
  na: Cards$1.grey.lighten_2
});
({
  max: Cards$1.lime.accent_3,
  min: Cards$1.lightGreen.accent_3,
  na: Cards$1.blueGrey.accent_1
});
({
  max: Cards$1.amber.accent_3,
  min: Cards$1.red.lighten_1,
  na: Cards$1.grey.accent_2
});
const METRO = {
  max: Cards$1.pink.lighten_2,
  min: Cards$1.blue.lighten_4,
  na: Cards$1.teal.accent_3
};
({
  max: Cards$1.lightGreen.accent_3,
  min: Cards$1.teal.lighten_3,
  na: Cards$1.brown.accent_1
});
({
  max: Cards$1.lightBlue.accent_2,
  min: Cards$1.indigo.base,
  na: Cards$1.pink.lighten_3
});
const PLANET = {
  max: Cards$1.teal.accent_2,
  min: Cards$1.blue.darken_3,
  na: Cards$1.cyan.lighten_4
};
({
  max: Cards$1.red.lighten_2,
  min: Cards$1.yellow.darken_1,
  na: Cards$1.green.lighten_2
});
const SUBTLE = {
  max: Cards$1.grey.lighten_5,
  min: Cards$1.grey.darken_1,
  na: Cards$1.indigo.lighten_3
};
({
  max: Cards$1.pink.lighten_4,
  min: Cards$1.deepPurple.accent_2,
  na: Cards$1.amber.darken_2
});

const reverseHue = hue => {
  hue += 180;
  return hue > 360 ? hue - 360 : hue < 0 ? hue + 360 : hue;
};

const constraint = (x, min, max) => x > max ? max : x < min ? min : x;

const randPreset = hex => {
  var _min, _toner, _ref;

  const min = hex;
  const hsl = (_min = min, hexToHsl(_min));
  const max = (_toner = toner(hsl.slice(), randBetw(-12, 12), randBetw(-5, 10), randBetw(6, 18)), hslToHex$1(_toner));
  const na = (_ref = [reverseHue(hsl[0]), constraint(hsl[1] - 32, 5, 90), constraint(hsl[2] + 24, 40, 96)], hslToHex$1(_ref));
  return {
    min,
    max,
    na
  };
};

const LIGHTEN = 'lighten',
      ACCENT = 'accent',
      DARKEN = 'darken';

const degreeToIndice = degree => {
  let i = degree.indexOf('_');
  if (i < 0) return randBetw(14, 16);
  let cate = degree.slice(0, i),
      order = degree.slice(++i);
  if (cate === LIGHTEN) return 15 - --order * 3;
  if (cate === ACCENT) return 14 - --order * 3;
  if (cate === DARKEN) return 13 - --order * 3;
  return rand(16);
};

const sortBy = function (indicator, comparer) {
  const vec = this,
        kvs = mutate$4(vec, (x, i) => [indicator(x, i), x]).sort(toKeyComparer(comparer));
  return mutate$4(kvs, ([, value]) => value);
};

const toKeyComparer = comparer => (a, b) => comparer(a[0], b[0]); // accent  15 -3

function* presetFlopper({
  degrees = Degrees.entire,
  colors = ColorGroups.rainbow,
  space = HEX,
  defaultColor = Grey$1.lighten_1,
  exhausted = true
} = {}) {
  var _defaultColor, _crostab$head;

  const crostab = palettCrostab({
    space,
    degrees,
    colors,
    dyed: false
  });
  degrees = sortBy.call(degrees.slice(), degreeToIndice, NUM_DESC);
  let h = degrees.length,
      w = colors.length;

  for (let i = 0; i < h; i++) {
    for (let j = w - 1, side = degrees[i], head = crostab.head.slice(); j >= 0; j--) {
      const banner = swap.call(head, rand(j), j);
      const hex = crostab.cell(side, banner);
      yield randPreset(hex);
    }
  }

  defaultColor = (_defaultColor = defaultColor) !== null && _defaultColor !== void 0 ? _defaultColor : crostab.cell(degrees[0], (_crostab$head = crostab.head, flop(_crostab$head)));
  const defaultPreset = randPreset(defaultColor);

  while (!exhausted) yield defaultPreset;

  return defaultPreset;
}

const POINTWISE = 0;
const ROWWISE = 1;
const COLUMNWISE = 2;

/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
const iterate$4 = function (mx, fn, h, w) {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let i = 0, j, r; i < h; i++) for (r = mx[i], j = 0; j < w; j++) fn.call(this, r[j], i, j);
};
/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[]}
 */


const mapper$4 = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const tx = Array(h);

  for (let i = 0, j, r, tr; i < h; i++) for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++) tr[j] = fn(r[j], i, j);

  return tx;
};

const mutate$3 = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let i = 0, j, r; i < h; i++) for (j = 0, r = mx[i]; j < w; j++) r[j] = fn(r[j], i, j);

  return mx;
};

const selectMutate = (mx, ys, fn, h) => {
  h = h || (mx === null || mx === void 0 ? void 0 : mx.length);
  const depth = ys.length;

  for (let i = 0, y, r, j; i < h; i++) for (y = 0, r = mx[i]; y < depth; y++) r[j = ys[y]] = fn(r[j], i, j);

  return mx;
};

var Mapper$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate$4,
  mapper: mapper$4,
  mutate: mutate$3,
  selectMutate: selectMutate
});

const height$1 = mx => mx === null || mx === void 0 ? void 0 : mx.length;

const width$1 = mx => {
  let r;
  return height$1(mx) && (r = mx[0]) ? r.length : r;
};

const size$1 = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

var Size = /*#__PURE__*/Object.freeze({
  __proto__: null,
  height: height$1,
  size: size$1,
  width: width$1
});

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */

const transpose$1 = (mx, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const cols = Array(w);

  for (--w; w >= 0; w--) cols[w] = mapper$5(mx, r => r[w], h);

  return cols;
};

var Transpose = /*#__PURE__*/Object.freeze({
  __proto__: null,
  transpose: transpose$1
});

const {
  iterate: iterate$3,
  mutate: mutate$2,
  mapper: mapper$3
} = Mapper$1;
const {
  size,
  width,
  height
} = Size;
const {
  transpose
} = Transpose;
const {
  mapper: columnsMapper
} = ColumnsMapper__namespace;

const v1$1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue$1 = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR$2) return NaN;
  if (l >= 8) return (v4$1(word.slice(0, 4)) << 2) + v4$1(word.slice(-4));
  if (l === 7) return (v4$1(word.slice(0, 4)) << 2) + v3$1(word.slice(-3));
  if (l === 6) return (v4$1(word.slice(0, 4)) << 2) + v2$1(word.slice(-2));
  if (l === 5) return (v4$1(word.slice(0, 4)) << 2) + v1$1(word.slice(-1));
  if (l === 4) return v4$1(word) << 2;
  if (l === 3) return v3$1(word) << 2;
  if (l === 2) return v2$1(word) << 2;
  if (l === 1) return v1$1(word) << 2;
};

const STR$1 = 'string';
const COMMA$1 = /,/g;

const isNumeric$2 = x => {
  if (typeof x === STR$1) x = x.replace(COMMA$1, '');
  return !isNaN(x - parseFloat(x));
};
/**
 * validate
 * @param x
 * @param y
 * @returns {number}
 */


const validate$1 = (x, y) => isNaN(x - y) ? NaN : y;

const parseNum$2 = x => {
  if (typeof x === STR$1) x = x.replace(COMMA$1, '');
  return validate$1(x, parseFloat(x));
};

/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
const iterate$2 = function (mx, fn, h, w) {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let i = 0, j, r; i < h; i++) for (r = mx[i], j = 0; j < w; j++) fn.call(this, r[j], i, j);
};

/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config} configX
 * @param {Config} configY
 * @return {[?BoundedMatrix, ?BoundedMatrix]}
 */


const duobound = (wordx, [configX, configY] = []) => {
  const [h, w] = size$1(wordx);
  let matX = undefined,
      matY = undefined;
  if (!h || !w) return [matX, matY];
  const {
    filter: filterX,
    mapper: mapperX
  } = configX,
        {
    filter: filterY,
    mapper: mapperY
  } = configY;
  iterate$2(wordx, (v, i, j) => {
    var _matX, _matY;

    if (filterX(v) && ((_matX = matX) !== null && _matX !== void 0 ? _matX : matX = Init.iso(h, w, undefined))) {
      var _matX$max;

      v = mapperX(v);

      if (v > ((_matX$max = matX.max) !== null && _matX$max !== void 0 ? _matX$max : matX.max = matX.min = v)) {
        matX.max = v;
      } else if (v < matX.min) {
        matX.min = v;
      }

      return matX[i][j] = v;
    }

    if (filterY(v) && ((_matY = matY) !== null && _matY !== void 0 ? _matY : matY = Init.iso(h, w, undefined))) {
      var _matY$max;

      v = mapperY(v);

      if (v > ((_matY$max = matY.max) !== null && _matY$max !== void 0 ? _matY$max : matY.max = matY.min = v)) {
        matY.max = v;
      } else if (v < matY.min) {
        matY.min = v;
      }

      return matY[i][j] = v;
    }

    return NaN;
  }, h, w);
  return [matX, matY];
};
/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config} [config]
 * @return {?BoundedMatrix}
 */


const solebound = (wordx, config) => {
  const [height, width] = size$1(wordx);
  /** @type {?BoundedMatrix} */

  let mx = undefined;
  if (!height || !width) return mx;
  const {
    filter,
    mapper
  } = config;
  iterate$2(wordx, (v, i, j) => {
    var _mx;

    if (filter(v) && ((_mx = mx) !== null && _mx !== void 0 ? _mx : mx = Init.iso(height, width, undefined))) {
      var _mx$max;

      v = mapper(v);

      if (v > ((_mx$max = mx.max) !== null && _mx$max !== void 0 ? _mx$max : mx.max = mx.min = v)) {
        mx.max = v;
      } else if (v < mx.min) {
        mx.min = v;
      }

      return mx[i][j] = v;
    }

    return NaN;
  }, height, width);
  return mx;
};
/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {Function} Config.filter
 * @typedef {Function} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config[]} configs
 * @return {?BoundedMatrix[]}
 */


const multibound = (wordx, configs) => {
  const [h, w] = size$1(wordx);
  const matrixCollection = configs.map(_ => undefined);
  if (!h || !w) return matrixCollection;
  iterate$2(wordx, (v, i, j) => {
    configs.some(({
      filter,
      mapper
    }, k) => {
      var _mx;

      let mx = matrixCollection[k];

      if (filter(v) && ((_mx = mx) !== null && _mx !== void 0 ? _mx : mx = matrixCollection[k] = Init.iso(h, w, undefined))) {
        var _mx$max;

        v = mapper(v);

        if (v > ((_mx$max = mx.max) !== null && _mx$max !== void 0 ? _mx$max : mx.max = mx.min = v)) {
          mx.max = v;
        } else if (v < mx.min) {
          mx.min = v;
        }

        mx[i][j] = v;
        return true;
      }
    });
  }, h, w);
  return matrixCollection;
};
/**
 *
 * @typedef {*[][]} BoundedMatrix
 * @typedef {number} BoundedMatrix.max
 * @typedef {number} BoundedMatrix.min
 *
 * @typedef {Object} Config
 * @typedef {function(*):boolean} Config.filter
 * @typedef {function(*):number} Config.mapper
 *
 * @param {*[][]} wordx
 * @param {Config[]} configs
 * @return {?BoundedMatrix[]}
 */


const boundaries = function (wordx, configs = []) {
  const count = configs.length;
  if (count === 0) return [];

  if (count === 1) {
    var _x$filter, _x$mapper;

    const [x] = configs;
    const filter = (_x$filter = x === null || x === void 0 ? void 0 : x.filter) !== null && _x$filter !== void 0 ? _x$filter : isNumeric$2,
          mapper = (_x$mapper = x === null || x === void 0 ? void 0 : x.mapper) !== null && _x$mapper !== void 0 ? _x$mapper : parseNum$2;
    return [solebound(wordx, {
      filter,
      mapper
    })];
  }

  if (count === 2) {
    var _x$filter2, _x$mapper2, _y$filter, _y$mapper;

    const [x, y] = configs;
    const fX = (_x$filter2 = x === null || x === void 0 ? void 0 : x.filter) !== null && _x$filter2 !== void 0 ? _x$filter2 : isNumeric$2,
          mX = (_x$mapper2 = x === null || x === void 0 ? void 0 : x.mapper) !== null && _x$mapper2 !== void 0 ? _x$mapper2 : parseNum$2;
    const fY = (_y$filter = y === null || y === void 0 ? void 0 : y.filter) !== null && _y$filter !== void 0 ? _y$filter : hasLiteral,
          mY = (_y$mapper = y === null || y === void 0 ? void 0 : y.mapper) !== null && _y$mapper !== void 0 ? _y$mapper : stringValue$1;
    return duobound(wordx, [{
      filter: fX,
      mapper: mX
    }, {
      filter: fY,
      mapper: mY
    }]);
  }

  if (count >= 3) return multibound(wordx, configs);
};

const max = (a, b) => a > b ? a : b;

const min = (a, b) => a < b ? a : b;

const spaceToAnsi = space => space === RGB ? rgbToAnsi : space === HEX ? hexToAnsi : space === HSL ? hslToAnsi : rgbToAnsi;
/** @type {Function} */


class DyeFactory {
  /** @type {Function} */

  /** @type {string} */

  /** @type {string} */

  /**
   *
   * @param {Function} ansi
   * @param {string} head
   * @param {string} tail
   * @returns {Dye|Function}
   */
  constructor(ansi, head, tail) {
    this.ansi = void 0;
    this.head = void 0;
    this.tail = void 0;
    this.ansi = ansi;
    this.head = head;
    this.tail = tail;
    return Dye.bind(this);
  }
  /**
   * @param {string} colorSpace
   * @param {string[]} effects
   * @returns {Dye|Function}
   */


  static build(colorSpace, effects) {
    var _colorSpace;

    const conf = {
      ansi: (_colorSpace = colorSpace, spaceToAnsi(_colorSpace)),
      head: '',
      tail: ''
    };
    if (effects !== null && effects !== void 0 && effects.length) assignEffects.call(conf, effects);
    return Dye.bind(conf);
  }
  /**
   * @param {string} colorSpace
   * @param {...string} effects
   * @returns {Dye|Function}
   */


  static prep(colorSpace, ...effects) {
    return DyeFactory.build(colorSpace, effects);
  }

}

/**
 *
 * @param {Object} bound
 * @param {number} [bound.min] - if min: if dif, return {min,dif}; if max, return calculated {min,dif}
 * @param {number} [bound.dif] - if dif: if max, return calculated {min,dif}; else return {min:0,dif}
 * @param {number} [bound.max] - if max: return {min:0,dif:max}; else return {min:0,dif:0}
 * @return {{dif: number, min: number}}
 */

const parseBound = bound => {
  // if (!bound) return { min: 0, dif: 0 }
  let {
    min,
    max,
    dif
  } = bound;

  if (!nullish$1(min)) {
    if (!nullish$1(dif)) return {
      min,
      dif
    };
    if (!nullish$1(max)) return {
      min,
      dif: max - min
    };
  }

  if (!nullish$1(dif)) {
    if (!nullish$1(max)) return {
      min: max - dif,
      dif
    };
    return {
      min: 0,
      dif
    };
  }

  if (!nullish$1(max)) return {
    min: 0,
    dif: max
  };
  return {
    min: 0,
    dif: 0
  };
};

const leverage = ([x, y, z], delta) => [x / delta, y / delta, z / delta];

const minus = ([x_, y_, z_], [_x, _y, _z]) => [x_ - _x, y_ - _y, z_ - _z];

const scale = (x, lo, lev, min$1, hi) => min((max(x, lo) - lo) * lev + min$1, hi);
/**
 * @typedef {[number,number,number]} Triple
 * @typedef {function(string):string} dye
 * @typedef {{max:string,min:string,na:string,effects?:string[]}} PresetHEX
 * @typedef {{max:Triple,min:Triple,na:Triple,effects?:string[]}} PresetHSL
 * @typedef {{min:Triple,dif:Triple}} LeapHSL
 * @typedef {{min:number,dif:number}} LeapNum
 */


class ProjectorConfig {
  /** @type {function(Triple):dye} */

  /** @type {number} */

  /** @type {Triple} */

  /** @type {Triple} */

  /** @type {Triple} */

  /**
   * @param {LeapNum} leapNum
   * @param {LeapHSL} leapHSL
   * @param {Triple} napHSL
   * @param {string[]} effects
   */
  constructor(leapNum, leapHSL, napHSL, effects) {
    this.fab = void 0;
    this.lo = void 0;
    this.lev = void 0;
    this.min = void 0;
    this.nap = void 0;
    this.fab = DyeFactory.build(HSL, effects);
    this.lo = leapNum.min;
    this.lev = !leapNum.dif ? 0 : leverage(leapHSL.dif, leapNum.dif);
    this.min = leapHSL.min;
    this.nap = napHSL;
  }
  /**
   * @param {Object} bound
   * @param {PresetHEX} preset
   * @returns {ProjectorConfig}
   */


  static fromHEX(bound, preset) {
    var _preset$max, _preset$min, _preset$na;

    const max = (_preset$max = preset.max, hexToHsl(_preset$max)),
          min = (_preset$min = preset.min, hexToHsl(_preset$min)),
          nap = (_preset$na = preset.na, hexToHsl(_preset$na)),
          effects = preset.effects;
    return new ProjectorConfig(parseBound(bound), {
      min,
      dif: minus(max, min)
    }, nap, effects);
  }
  /**
   * @param {Object} bound
   * @param {PresetHSL} preset
   * @returns {ProjectorConfig}
   */


  static fromHSL(bound, preset) {
    const {
      max,
      min,
      na: nap,
      effects
    } = preset;
    return new ProjectorConfig(parseBound(bound), {
      min,
      dif: minus(max, min)
    }, nap, effects);
  }

  project(value) {
    const {
      lo,
      lev,
      min
    } = this;
    return [scale(value, lo, lev[0], min[0], 360), scale(value, lo, lev[1], min[1], 100), scale(value, lo, lev[2], min[2], 100)];
  }

  get dyeNAp() {
    return this.fab(this.nap);
  }

}

/**
 * @typedef {[number,number,number]} Triple
 * @typedef {function(string):string} dye
 */

class ProjectorFactory {
  /** @type {function(Triple):dye} */

  /** @type {number} */

  /** @type {Triple} */

  /** @type {Triple} */

  /** @type {Triple} */

  /**
   * @param {Object} config
   * @param {function(Triple):dye} config.fab
   * @param {number}  config.lo
   * @param {Triple}  config.lev
   * @param {Triple}  config.min
   * @param {Triple}  config.nap
   */
  constructor(config) {
    this.fab = void 0;
    this.lo = void 0;
    this.lev = void 0;
    this.min = void 0;
    this.nap = void 0;
    Object.assign(this, config);
  }

  static fromHEX(bound, preset) {
    if (!bound || !preset) {
      return new VoidProjectorFactory();
    }

    const config = ProjectorConfig.fromHEX(bound, preset);
    if (!config.lev) return new SoleProjectorFactory(config);
    return new ProjectorFactory(config);
  }

  static fromHSL(bound, preset) {
    if (!bound || !preset) {
      return new VoidProjectorFactory();
    }

    const config = ProjectorConfig.fromHSL(bound, preset);
    if (!config.lev) return new SoleProjectorFactory(config);
    return new ProjectorFactory(config);
  }

  render(value, text) {
    return this.fab(this.color(value))(text);
  }

  make(value) {
    return this.fab(this.color(value));
  }

  color(value) {
    if (isNaN(value)) return this.nap;
    const {
      lo,
      lev,
      min
    } = this;
    return [scale(value, lo, lev[0], min[0], 360), scale(value, lo, lev[1], min[1], 100), scale(value, lo, lev[2], min[2], 100)];
  }

}

class SoleProjectorFactory {
  /** @type {function(*):dye} */

  /** @type {Triple} */

  /** @type {Triple} */
  constructor(config) {
    this.fab = void 0;
    this.min = void 0;
    this.nap = void 0;
    Object.assign(this, config);
  }

  render(value, text) {
    return this.fab(this.color(value))(text);
  }

  make(value) {
    return this.fab(this.color(value));
  }

  color(value) {
    return isNaN(value) ? this.nap : this.min;
  }

}

class VoidProjectorFactory {
  constructor(config) {
    Object.assign(this, config);
  }

  render(value, text) {
    return text;
  }

  make(value) {
    return oneself$1;
  }

  color(value) {
    return null;
  }

} // if (!preset) { return new VoidProjectorFactory() } else { preset = presetToLeap(preset) }

/**
 *
 * @typedef {Object} Preset
 * @typedef {string} Preset.min
 * @typedef {string} Preset.max
 * @typedef {string} Preset.na
 * @typedef {string[]} Preset.effects
 * @typedef {Function} Preset.filter
 * @typedef {Function} Preset.mapper
 *
 * @param {*[][]} mx
 * @param {Preset[]} [config]
 * @returns {*[][]}
 */

function fluoByColumns(mx, config) {
  var _columnsMapper;

  const context = this;
  return _columnsMapper = columnsMapper(mx, col => fluoVector.fluoVector.call(context, col, config)), transpose(_columnsMapper);
}
/**
 *
 * @typedef {Object} Preset
 * @typedef {string} Preset.min
 * @typedef {string} Preset.max
 * @typedef {string} Preset.na
 * @typedef {string[]} Preset.effects
 * @typedef {Function} Preset.filter
 * @typedef {Function} Preset.mapper
 *
 * @param {*[][]} mx
 * @param {Preset[]} [config]
 * @returns {*[][]}
 */


function fluoByRows(mx, config) {
  const context = this,
        mapper$1 = context !== null && context !== void 0 && context.mutate ? mutate$4 : mapper$5;
  return mapper$1(mx, row => fluoVector.fluoVector.call(context, row, config));
}

const oneself = x => x;
/**
 *
 * applicable for smaller number
 * @param {number} x
 * @returns {number}
 */


const round = x => x + (x > 0 ? 0.5 : -0.5) << 0;

const rgbToInt = ([r, g, b]) => ((r & 0xFF) << 16) + ((g & 0xFF) << 8) + (b & 0xFF);
/**
 * @param {[number,number,number]} rgb
 * @returns {string}
 */


const rgbToHex = rgb => '#' + rgbToInt(rgb).toString(16).toUpperCase().padStart(6, '0');
/**
 *
 * @param {number} n
 * @param {number} h
 * @param {number} a
 * @param {number} l
 * @returns {number}
 */


const hf = (n, h, a, l) => {
  const k = (n + h / 30) % 12;
  return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
};
/**
 *
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 */


function hslToRgb([h, s, l]) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l),
        r = hf(0, h, a, l),
        g = hf(8, h, a, l),
        b = hf(4, h, a, l);
  return [round(r * 0xFF), round(g * 0xFF), round(b * 0xFF)]; // return [r * 0xFF & 0xFF, g * 0xFF & 0xFF, b * 0xFF & 0xFF]
}

const hslToHex = hsl => {
  var _ref, _hsl;

  return _ref = (_hsl = hsl, hslToRgb(_hsl)), rgbToHex(_ref);
}; // export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''


const MAKER = 'maker',
      RENDER$4 = 'render',
      COLOR = 'color';
/**
 * @typedef {Object} Preset
 * @typedef {string} Preset.min
 * @typedef {string} Preset.max
 * @typedef {string} Preset.na
 * @typedef {string[]} Preset.effects
 * @typedef {Function} Preset.filter
 * @typedef {Function} Preset.mapper
 *
 * @param {*[][]} matrix
 * @param {Preset[]} configs
 * @returns {*[][]}
 */

const fluoByPoints = function (matrix, configs) {
  const [h, w] = size(matrix);
  if (!h || !w) return [[]];
  const projectorSet = makeProjector(matrix, configs);
  const mapper = this !== null && this !== void 0 && this.mutate ? mutate$2 : mapper$3;

  switch (this === null || this === void 0 ? void 0 : this.colorant) {
    case COLOR:
      return mapper(matrix, PointColorFactory.color(projectorSet));

    case MAKER:
      return mapper(matrix, PointColorFactory.maker(projectorSet));

    case RENDER$4:
    default:
      return mapper(matrix, PointColorFactory.render(projectorSet));
  }
};

const makeProjector = (matrix, configs = []) => {
  const [confX, confY] = configs;
  const [matX, matY] = boundaries(matrix, configs);
  const [projX, projY] = [ProjectorFactory.fromHEX(matX, confX), ProjectorFactory.fromHEX(matY, confY)];
  return [[matX, projX], [matY, projY]];
};

class PointColorFactory {
  static color([[bX, pX], [bY, pY]]) {
    function toColor(some) {
      var _some;

      return some ? (_some = some, hslToHex(_some)) : null;
    }

    return (_, i, j) => {
      let v;

      if (!nullish$1(v = bX && bX[i][j])) {
        var _pX$color;

        return _pX$color = pX.color(v), toColor(_pX$color);
      }

      if (!nullish$1(v = bY && bY[i][j])) {
        var _pY$color;

        return _pY$color = pY.color(v), toColor(_pY$color);
      }

      return null;
    };
  }

  static maker([[bX, pX], [bY, pY]]) {
    return (_, i, j) => {
      var _make, _ref;

      let v;

      if (!nullish$1(v = bX && bX[i][j])) {
        return pX.make(v);
      }

      if (!nullish$1(v = bY && bY[i][j])) {
        return pY.make(v);
      }

      return (_make = (_ref = pX || pY) === null || _ref === void 0 ? void 0 : _ref.make(pX.nap)) !== null && _make !== void 0 ? _make : oneself;
    };
  }

  static render([[bX, pX], [bY, pY]]) {
    return (n, i, j) => {
      var _render, _ref2;

      let v;

      if (!nullish$1(v = bX && bX[i][j])) {
        return pX.render(v, n);
      }

      if (!nullish$1(v = bY && bY[i][j])) {
        return pY.render(v, n);
      }

      return (_render = (_ref2 = pX || pY) === null || _ref2 === void 0 ? void 0 : _ref2.render(pX.nap, n)) !== null && _render !== void 0 ? _render : n;
    };
  }

}
/**
 *
 * @typedef {Object} Preset
 * @typedef {string} Preset.min
 * @typedef {string} Preset.max
 * @typedef {string} Preset.na
 * @typedef {string[]} Preset.effects
 * @typedef {Function} Preset.filter
 * @typedef {Function} Preset.mapper
 *
 * @param {*[][]} mx
 * @param {number} [direct=POINTWISE]
 * @param {Preset[]} [configs]
 */


const fluoMatrix = function (mx, direct, configs) {
  switch (direct) {
    case ROWWISE:
      return fluoByRows.call(this, mx, configs);

    case COLUMNWISE:
      return fluoByColumns.call(this, mx, configs);

    case POINTWISE:
    default:
      return fluoByPoints.call(this, mx, configs);
  }
};

const v1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR$2) return NaN;
  if (l >= 8) return (v4(word.slice(0, 4)) << 2) + v4(word.slice(-4));
  if (l === 7) return (v4(word.slice(0, 4)) << 2) + v3(word.slice(-3));
  if (l === 6) return (v4(word.slice(0, 4)) << 2) + v2(word.slice(-2));
  if (l === 5) return (v4(word.slice(0, 4)) << 2) + v1(word.slice(-1));
  if (l === 4) return v4(word) << 2;
  if (l === 3) return v3(word) << 2;
  if (l === 2) return v2(word) << 2;
  if (l === 1) return v1(word) << 2;
};

const SP = ' ';
const CO = ',';
const DOT = '.';

const FULL_NUM = '０-９'; // 0xff10 - 0xff19

const REG_NUM_FULL = new RegExp(`^\s*[－＋]?(?:，*[${FULL_NUM}]+)*．?[${FULL_NUM}]+\s*$`);
/**
 *
 * @param {string} tx
 * @returns {boolean}
 */

const isNumeric$1 = tx => REG_NUM_FULL.test(tx);

const NON_SPACE = /[^\s]/;

const parseNum$1 = text => {
  if (!text) return NaN;
  let l = text.length,
      i = text.search(NON_SPACE),
      t = '',
      n,
      v;

  while (i < l && (n = text.charCodeAt(i++))) if (n !== 0xff0c) {
    v = 0xFF & n + 0x20;
    t += String.fromCharCode(v < n ? v : n);
  }

  return parseNum$3(t);
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Conv {}

_defineProperty(Conv, "cjkAndFullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += n < 0xff00 ? CharConv.cjkPunc(n) : CharConv.fullChars(n);

  return tx;
});

_defineProperty(Conv, "fullChars", text => {
  let tx = '',
      i = 0,
      l = text.length,
      n;

  while (i < l && (n = text.charCodeAt(i++))) tx += CharConv.fullChars(n);

  return tx;
});

class CharConv {
  static cjkPunc(charCode) {
    if (charCode === 0x3000) return SP;
    if (charCode === 0x3001) return CO;
    if (charCode === 0x3002) return DOT;
    if (charCode === 0x3010) return '[';
    if (charCode === 0x3011) return ']';
    return String.fromCharCode(charCode);
  }

  static fullChars(charCode) {
    return String.fromCharCode(0xFF & charCode + 0x20);
  }

}

const COMMA = /,/g;

const isNumeric = x => {
  var _x;

  x = (_x = x) === null || _x === void 0 ? void 0 : _x.replace(COMMA, '');
  return !isNaN(x - parseFloat(x));
};

const validate = (x, y) => isNaN(x - y) ? NaN : y;

const parseNum = x => {
  var _x;

  x = (_x = x) === null || _x === void 0 ? void 0 : _x.replace(COMMA, '');
  return validate(x, parseFloat(x));
};

const nullish = x => x === null || x === void 0;

const replenish = (object, another) => {
  for (let k in another) if (nullish(object[k])) object[k] = another[k];

  return object;
};

const iterate$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const reviter$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
};

const mapper$1$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const mutate$1 = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

var Mapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate$1,
  mapper: mapper$1$1,
  mutate: mutate$1,
  reviter: reviter$1
});

function duozipper$1(a, b) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi);

  return vec;
}

function trizipper(a, b, c) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], hi);

  return vec;
}

function quazipper(a, b, c, d) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], d[hi], hi);

  return vec;
}

const Duozipper$1 = (fn, {
  lo,
  hi
} = {}) => duozipper$1.bind({
  fn,
  lo,
  hi
});

const Trizipper$1 = (fn, {
  lo,
  hi
} = {}) => trizipper.bind({
  fn,
  lo,
  hi
});

const Quazipper$1 = (fn, {
  lo,
  hi
} = {}) => quazipper.bind({
  fn,
  lo,
  hi
});
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$1 = (a, b, fn, l) => duozipper$1.call({
  fn,
  hi: l
}, a, b);

const mutazip$1 = (va, vb, fn, l) => {
  l = l || (va === null || va === void 0 ? void 0 : va.length);

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

var Zipper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Duozipper: Duozipper$1,
  Quazipper: Quazipper$1,
  Trizipper: Trizipper$1,
  mutazip: mutazip$1,
  zipper: zipper$1
});
const {
  iterate,
  reviter,
  mapper: mapper$2,
  mutate
} = Mapper;
const {
  zipper: zipper$2,
  mutazip: mutazip$2,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;

const isNumericAny = x => isNumeric$1(x) || isNumeric(x);

const NUM_BOUND_CONF_FULL = {
  filter: isNumericAny,
  mapper: parseNum$1
};
const STR_BOUND_CONF_FULL = {
  filter: isLiteralAny,
  mapper: stringValue
};
const NUM_BOUND_CONF_HALF = {
  filter: isNumeric,
  mapper: parseNum
};
const STR_BOUND_CONF_HALF = {
  filter: isLiteral,
  mapper: stringValue
};

class PresetCollection extends Array {
  constructor(presets) {
    super(presets.length);
    mutazip$2(this, presets, (receiver, preset) => Object.assign({}, preset));
  }

  static build(...presets) {
    return new PresetCollection(presets);
  }

  assignPresets(...presets) {
    // if (this.length < presets.length) {this.length = presets.length}
    return mutazip$2(this, presets, (conf, preset) => Object.assign(conf !== null && conf !== void 0 ? conf : {}, preset), presets.length);
  }

  replenishPresets(...presets) {
    // if (this.length < presets.length) {this.length = presets.length}
    return mutazip$2(this, presets, (conf, preset) => replenish(conf !== null && conf !== void 0 ? conf : {}, preset), presets.length);
  }

  assignEffect(...effects) {
    if (effects.length === 0) return this;
    return mutate(this, conf => (conf.effects = effects, conf));
  }

  setBound(full) {
    const boundConfigs = full ? [NUM_BOUND_CONF_FULL, STR_BOUND_CONF_FULL, STR_BOUND_CONF_FULL] : [NUM_BOUND_CONF_HALF, STR_BOUND_CONF_HALF, STR_BOUND_CONF_HALF];
    return mutazip$2(this, boundConfigs, (conf, boundConf) => Object.assign(conf, boundConf));
  }

} // if (presets.length === 0) presets = [NUMERIC_PRESET, LITERAL_PRESET]

class DecoConfig {
  /** @type {PresetCollection} */

  /** @type {string[]} */

  /** @type {boolean} */

  /** @param {Object} conf */
  constructor(conf) {
    this.presets = void 0;
    this.effects = void 0;
    this.full = void 0;

    if (!conf) {
      return;
    }

    Object.assign(this, conf);
    if (conf.presets) this.resetPresets(conf.presets, conf.effects, conf.full);
  }
  /**
   * @param {Object} [conf]
   * @returns {DecoConfig}
   */


  static build(conf) {
    return new DecoConfig(conf);
  }

  static parse(userConfig, defaultConfig, defaultPresets) {
    const conf = DecoConfig.build(userConfig);
    if (defaultConfig) conf.replenishConfigs(defaultConfig);
    if (defaultPresets) conf.defaultPresets.apply(conf, defaultPresets);
    return conf;
  }

  assignConfigs(configs) {
    return Object.assign(this, configs);
  }

  replenishConfigs(configs) {
    return replenish(this, configs);
  }

  resetPresets(presets, effects, full) {
    this.presets = Array.isArray(presets) ? PresetCollection.build.apply(null, presets) : PresetCollection.build.call(null, presets, presets);
    if (effects !== null && effects !== void 0 && effects.length) Array.isArray(effects) ? this.assignEffect.apply(this, effects) : this.assignEffect.call(this, effects);
    if (!nullish$1(full)) this.setBound(full);
    return this;
  }

  assignPresets(...presets) {
    var _this$presets;

    return this.presets ? ((_this$presets = this.presets) !== null && _this$presets !== void 0 && _this$presets.assignPresets.apply(this.presets, presets), this) : this.resetPresets(presets);
  }

  assignEffect(...effects) {
    var _this$presets2;

    return (_this$presets2 = this.presets) !== null && _this$presets2 !== void 0 && _this$presets2.assignEffect.apply(this.presets, effects), this;
  }

  setBound(full) {
    var _this$presets3;

    return (_this$presets3 = this.presets) !== null && _this$presets3 !== void 0 && _this$presets3.setBound.call(this.presets, full), this;
  }

  defaultPresets(...presets) {
    if (nullish$1(this.presets)) this.resetPresets(presets, this.effects, this.full);
    return this;
  } // defaultEffects(...effects) {
  //   if (effects?.length && !nullish(this.presets)) iterate(this.presets, preset => { if (!preset?.effect) preset.effects = effects })
  //   return this
  // }
  // defaultBound(full) {
  //   if (!nullish(full) && !nullish(this.presets)) this.setBound(full)
  //   return this
  // }


}

const NUMERIC_PRESET = FRESH;
const LITERAL_PRESET = PLANET;
const DUAL_PRESET_COLLECTION = [NUMERIC_PRESET, LITERAL_PRESET];

const LITERAL$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const splitter = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


const splitLiteral = splitter.bind(LITERAL$4);

const ANSI_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?)/;
const ANSI_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/;
const ANSI = new RegExp(`[][[\\]()#;?]*(?:${ANSI_ALPHA.source}|${ANSI_BETA.source})`);
//
// Block                                   Range       Comment
// CJK Unified Ideographs                  4E00-9FFF   Common
// CJK Unified Ideographs Extension A      3400-4DBF   Rare
// CJK Unified Ideographs Extension B      20000-2A6DF Rare, historic
// CJK Unified Ideographs Extension C      2A700–2B73F Rare, historic
// CJK Unified Ideographs Extension D      2B740–2B81F Uncommon, some in current use
// CJK Unified Ideographs Extension E      2B820–2CEAF Rare, historic
// CJK Compatibility Ideographs            F900-FAFF   Duplicates, unifiable variants, corporate characters
// CJK Compatibility Ideographs Supplement 2F800-2FA1F Unifiable variants

const ANSI_G = new RegExp(ANSI, 'g');

const clearAnsi = tx => tx.replace(ANSI_G, '');

const hasAnsi = tx => ANSI.test(tx);

const SPACE = /\s+/g;
const LINEFEED = /\r?\n/;

const foldToVector = function (text) {
  const {
    width: wd = 80,
    regex = SPACE,
    firstLineIndent
  } = this !== null && this !== void 0 ? this : {};
  const lines = [];
  let ms,
      ph,
      pr = 0,
      cu = 0,
      la = 0,
      nx = 0,
      th = pr + wd;
  if (firstLineIndent) text = enumChars.SP.repeat(firstLineIndent) + text;

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    // VO |> says['progress'].p(pr).p(DA).br(cu + ':' + la).p(DA).br(nx).p(codes(ph)).br(/\r?\n/.test(ph)).p(DA).p(th)
    nx = ms.index;
    if (nx > th) lines.push(text.slice(pr, cu)), pr = la, th = pr + wd;
    if (LINEFEED.test(ph)) lines.push(text.slice(pr, nx)), pr = regex.lastIndex, th = pr + wd;
    cu = nx, la = regex.lastIndex;
  }

  if (text.length > th) lines.push(text.slice(pr, cu)), pr = la;
  if (pr < text.length) lines.push(text.slice(pr));
  if (firstLineIndent) lines[0] = lines[0].slice(firstLineIndent);
  return lines;
};

const fold = function (text) {
  var _this$delim, _text;

  const context = this;
  const delim = (_this$delim = this === null || this === void 0 ? void 0 : this.delim) !== null && _this$delim !== void 0 ? _this$delim : enumChars.LF;
  const lines = (_text = text, foldToVector.bind(context)(_text));
  return lines.join(delim);
};

const LITERAL$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3.bind(LITERAL$3);

const CONFIG = {
  vectify: splitLiteral,
  width: 0
}; // export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''

const RENDER$3 = 'render';
const MUTATE_PIGMENT$3 = {
  colorant: RENDER$3,
  mutate: true
};
/**
 * @prop width - foldToVector
 * @prop firstLineIndent - foldToVector
 * @prop indent - applicable only when valid width
 * @prop vectify - fluoString
 * @prop joiner - fluoString
 * @prop presets - fluoString
 * @prop effects - fluoString
 * @param text
 * @return {string}
 */

const _decoString = function (text) {
  var _text, _config$indent;

  const config = this,
        width = config.width,
        length = (_text = text) === null || _text === void 0 ? void 0 : _text.length;
  if (!length) return '';
  if (hasAnsi(text)) return text;
  if (width && length > width) text = fold.call({
    width: width,
    firstLineIndent: config.firstLineIndent,
    delim: enumChars.LF + enumChars.TB.repeat((_config$indent = config.indent) !== null && _config$indent !== void 0 ? _config$indent : 0)
  }, text);
  if (config.presets) text = stringColour.call(config, text);
  return text;
};

const stringColour = function (text) {
  const config = this;
  const {
    vectify,
    joiner
  } = this;
  const words = vectify(text);
  fluoVector.fluoVector.call(MUTATE_PIGMENT$3, words, config.presets); // use: presets, effects

  return joiner ? joiner(words) : words.join('');
};
/**
 * @param {string} text
 * @param {Object} [p]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */


const deco = (text, p = {}) => _decoString.call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), text);

const mapper$1 = (o, fn) => {
  const ob = {};

  for (let k in o) if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k]);

  return ob;
};

const parenth$2 = x => '(' + x + ')';

const bracket$2 = x => '[' + x + ']';

var id$1 = 0;

function _classPrivateFieldLooseKey$1(name) {
  return "__private_" + id$1++ + "_" + name;
}

function _classPrivateFieldLooseBase$1(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

class Callable$1 extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}

const tab = ind => enumChars.SP.repeat(ind << 1);

const logBy = (text, config) => {
  let {
    name,
    des,
    ind,
    log,
    att
  } = config;
  let signature = `${tab(ind)}[${name}]`;
  if (att) signature += enumChars.SP + att();
  if (des !== null && des !== void 0 && des.length) signature += des, config.des = '';
  if (typeof text !== STR$2) text += '';
  return void log(signature, text.includes(enumChars.LF) ? (enumChars.LF + text).replace(/\n/g, enumChars.LF + tab(++ind)) : text);
};

const NAME = 'name'; // const WRITABLE = { writable: true }

/** @type {function} */

class Pal extends Callable$1 {
  // /** @type {string}   */ name

  /** @type {string}   */

  /** @type {number}   */

  /** @type {Function} */

  /** @type {Function} */
  constructor(name, {
    indent = 0,
    logger,
    attach
  } = {}) {
    // const f = text => logBy(text, this)
    // Object.defineProperty(f, NAME, WRITABLE)
    // super(f)
    super(text => logBy(text, this));
    this.des = '';
    this.ind = 0;
    this.log = console.log;
    this.att = void 0;
    Object.defineProperty(this, NAME, {
      value: name !== null && name !== void 0 ? name : '',
      writable: true
    }); // if (name) this.name = name

    if (indent) this.ind = indent;
    if (logger) this.log = logger;
    if (attach) this.attach(attach);
  }

  p(words) {
    return this.des += enumChars.SP + words, this;
  }

  br(words) {
    return this.des += enumChars.SP + parenth$2(words), this;
  }

  to(someone) {
    if (someone instanceof Pal) someone = someone.name;
    this.des += ' -> ' + bracket$2(someone);
    return this;
  }

  attach(func) {
    if (typeof func === FUN) {
      this.att = func;
    }

    return this;
  }

  detach() {
    return this.att = null, this;
  }

  level(logger) {
    if (typeof logger === STR$2 && logger in console) {
      return this.log = console[logger], this;
    }

    if (typeof logger === FUN) {
      return this.log = logger, this;
    }

    return this;
  }

  get asc() {
    return this.ind++, this;
  }

  get desc() {
    return this.ind && this.ind--, this;
  }
  /**
   * @param {string} title
   * @param {Object} [options]
   * @returns {Pal|function}
   */


  static build(title, options) {
    return new Pal(title, options);
  }

}

var _roster = _classPrivateFieldLooseKey$1("roster");

var _pool = _classPrivateFieldLooseKey$1("pool");

var _effects = _classPrivateFieldLooseKey$1("effects");

class Says {
  /** @type {Object<string,Pal|function>} */

  /** @type {Generator<{max:*,min:*,na:*}>} */

  /** @type {string[]!} */
  constructor(roster, effects) {
    Object.defineProperty(this, _roster, {
      writable: true,
      value: {}
    });
    Object.defineProperty(this, _pool, {
      writable: true,
      value: presetFlopper({
        exhausted: false
      })
    });
    Object.defineProperty(this, _effects, {
      writable: true,
      value: undefined
    });
    if (roster) _classPrivateFieldLooseBase$1(this, _roster)[_roster] = roster;
    _classPrivateFieldLooseBase$1(this, _effects)[_effects] = effects;
    return new Proxy(this, {
      /** @returns {Pal|function} */
      get(t, p) {
        if (p in t) return typeof (p = t[p]) === FUN ? p.bind(t) : p;
        if (p in _classPrivateFieldLooseBase$1(t, _roster)[_roster]) return _classPrivateFieldLooseBase$1(t, _roster)[_roster][p];
        return t.aboard(p, _classPrivateFieldLooseBase$1(t, _pool)[_pool].next().value);
      }

    });
  }

  aboard(name, presets) {
    var _deco;

    return _classPrivateFieldLooseBase$1(this, _roster)[_roster][name] = (_deco = deco(String(name), {
      presets: presets !== null && presets !== void 0 ? presets : _classPrivateFieldLooseBase$1(this, _pool)[_pool].next().value,
      effects: _classPrivateFieldLooseBase$1(this, _effects)[_effects]
    }), Pal.build(_deco));
  }

  roster(name) {
    var _classPrivateFieldLoo;

    if (name) return ((_classPrivateFieldLoo = _classPrivateFieldLooseBase$1(this, _roster)[_roster][name]) !== null && _classPrivateFieldLoo !== void 0 ? _classPrivateFieldLoo : this.aboard(name)).name;
    return mapper$1(_classPrivateFieldLooseBase$1(this, _roster)[_roster], ({
      name
    }) => name);
  }
  /**
   *
   * @param roster
   * @param effects
   * @returns {Says|Object<string,function>}
   */


  static build({
    roster,
    effects = [ITALIC$2]
  } = {}) {
    return new Says(roster, effects);
  }

}
/** @type {Function|Says} */


const says = new Says();
/** @type {Function} */
// const ros = says.roster.bind(says)

const ros$1 = name => says.roster(name);

const mapper = (o, fn) => {
  const ob = {};

  for (let k in o) if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k]);

  return ob;
};

var _ref$1$1, _ref2$1, _ref3$1, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;

const Dyes$1 = {
  0: Dye((_ref$1$1 = [45, 100, 53], hslToRgb$1(_ref$1$1))),
  1: Dye((_ref2$1 = [44, 100, 59], hslToRgb$1(_ref2$1))),
  2: Dye((_ref3$1 = [43, 100, 64], hslToRgb$1(_ref3$1))),
  3: Dye((_ref4$1 = [42, 100, 70], hslToRgb$1(_ref4$1))),
  4: Dye((_ref5$1 = [41, 100, 74], hslToRgb$1(_ref5$1))),
  5: Dye((_ref6$1 = [40, 100, 78], hslToRgb$1(_ref6$1))),
  6: Dye((_ref7$1 = [39, 100, 82], hslToRgb$1(_ref7$1))),
  7: Dye((_ref8$1 = [37, 100, 86], hslToRgb$1(_ref8$1)))
};
const L$1 = '{ ',
      R$1 = ' }';
mapper(Dyes$1, dye => {
  var _L, _R;

  const l = (_L = L$1, dye(_L)),
        r = (_R = R$1, dye(_R));
  return content => l + content + r;
});

var _ref$2, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;

const Dyes = {
  0: Dye((_ref$2 = [199, 100, 63], hslToRgb$1(_ref$2))),
  1: Dye((_ref2 = [201, 100, 68], hslToRgb$1(_ref2))),
  2: Dye((_ref3 = [203, 100, 72], hslToRgb$1(_ref3))),
  3: Dye((_ref4 = [205, 100, 76], hslToRgb$1(_ref4))),
  4: Dye((_ref5 = [207, 100, 84], hslToRgb$1(_ref5))),
  5: Dye((_ref6 = [209, 100, 80], hslToRgb$1(_ref6))),
  6: Dye((_ref7 = [211, 100, 88], hslToRgb$1(_ref7))),
  7: Dye((_ref8 = [214, 100, 90], hslToRgb$1(_ref8)))
};
const L = '[ ',
      R = ' ]';
mapper(Dyes, dye => {
  var _L, _R;

  const l = (_L = L, dye(_L)),
        r = (_R = R, dye(_R));
  return content => l + content + r;
});

var _Cards$brown$lighten_, _Cards$lightGreen$acc, _Cards$deepOrange$acc, _Cards$teal$lighten_, _Cards$brown$lighten_2, _Cards$blueGrey$light, _Cards$blue$accent_, _Cards$amber$base, _Cards$green$accent_;
/**
 *
 * @type {Object<string,Function>}
 */


({
  IDX: Dye((_Cards$brown$lighten_ = Cards$1.brown.lighten_5, hexToRgb(_Cards$brown$lighten_))),
  STR: Dye((_Cards$lightGreen$acc = Cards$1.lightGreen.accent_2, hexToRgb(_Cards$lightGreen$acc))),
  NUM: Dye((_Cards$deepOrange$acc = Cards$1.deepOrange.accent_2, hexToRgb(_Cards$deepOrange$acc))),
  BOO: Dye((_Cards$teal$lighten_ = Cards$1.teal.lighten_2, hexToRgb(_Cards$teal$lighten_))),
  UDF: Dye((_Cards$brown$lighten_2 = Cards$1.brown.lighten_3, hexToRgb(_Cards$brown$lighten_2))),
  SYM: Dye((_Cards$blueGrey$light = Cards$1.blueGrey.lighten_2, hexToRgb(_Cards$blueGrey$light))),
  BRK: Dye((_Cards$blue$accent_ = Cards$1.blue.accent_2, hexToRgb(_Cards$blue$accent_))),
  BRC: Dye((_Cards$amber$base = Cards$1.amber.base, hexToRgb(_Cards$amber$base))),
  FNC: Dye((_Cards$green$accent_ = Cards$1.green.accent_4, hexToRgb(_Cards$green$accent_)))
});
({
  0: {
    max: hslToHex$1([75, 90, 85]),
    min: hslToHex$1([89, 99, 72]),
    na: Cards$1.grey.lighten_4
  },
  1: {
    max: hslToHex$1([80, 88, 87]),
    min: hslToHex$1([83, 98, 71]),
    na: Cards$1.grey.lighten_4
  },
  2: {
    max: hslToHex$1([93, 87, 82]),
    min: hslToHex$1([93, 97, 70]),
    na: Cards$1.grey.lighten_3
  },
  3: {
    max: hslToHex$1([103, 86, 82]),
    min: hslToHex$1([103, 96, 69]),
    na: Cards$1.grey.lighten_2
  },
  4: {
    max: hslToHex$1([113, 85, 82]),
    min: hslToHex$1([113, 95, 68]),
    na: Cards$1.grey.lighten_1
  },
  5: {
    max: hslToHex$1([123, 84, 82]),
    min: hslToHex$1([123, 94, 68]),
    na: Cards$1.grey.base
  },
  6: {
    max: hslToHex$1([133, 83, 82]),
    min: hslToHex$1([133, 93, 68]),
    na: Cards$1.grey.darken_1
  },
  7: {
    max: hslToHex$1([143, 82, 82]),
    min: hslToHex$1([143, 92, 68]),
    na: Cards$1.grey.darken_2
  }
});

const Colorant = (bound, preset = PLANET) => {
  const core = ProjectorConfig.fromHEX(bound, preset);
  const dyeNAp = core.dyeNAp;
  return x => isNumeric$3(x) ? core.fab(core.project(x)) : dyeNAp;
};

const padDeci = x => x >= 10 ? '' + x : '0' + x;

const padKilo = x => x >= 1000 ? '' + x : ('' + x).padStart(4, '0');

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);

class Timestamp {
  constructor(datePreset, timePreset, milliPreset) {
    if (datePreset) {
      this.dy = Colorant({
        min: 1990,
        max: 2030
      }, datePreset);
      this.dm = Colorant({
        min: 1,
        max: 12
      }, datePreset);
      this.dd = Colorant({
        min: 1,
        max: 31
      }, datePreset);
    }

    if (timePreset) {
      this.dh = Colorant({
        min: 0,
        max: 23
      }, timePreset);
      this.ds = Colorant({
        min: 0,
        max: 59
      }, timePreset);
    }

    if (milliPreset) {
      this.dt = Colorant({
        min: 0,
        max: 999
      }, milliPreset);
    }
  }

  static build(datePreset = METRO, timePreset = SUBTLE, milliPreset = SUBTLE) {
    return new Timestamp(datePreset, timePreset, milliPreset);
  }
  /** @param {Date} dt */


  date(dt = new Date()) {
    return this.decoYMD(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
  }
  /** @param {Date} dt */


  roughTime(dt = new Date()) {
    return this.decoHMS(dt.getHours(), dt.getMinutes(), dt.getSeconds());
  }
  /** @param {Date} dt */


  time(dt = new Date()) {
    return this.roughTime(dt) + '.' + this.decoMilli(dt.getMilliseconds());
  }
  /** @param {Date} dt */


  dateTime(dt = new Date()) {
    return this.date(dt) + enumChars.QT + this.roughTime(dt);
  }

  decoYMD(year, month, day) {
    var _padKilo, _padDeci, _padDeci2;

    return this.dy ? (_padKilo = padKilo(year), this.dy(year)(_padKilo)) + enumChars.DASH + (_padDeci = padDeci(month), this.dm(month)(_padDeci)) + enumChars.DASH + (_padDeci2 = padDeci(day), this.dd(day)(_padDeci2)) : padKilo(year) + enumChars.DASH + padDeci(month) + enumChars.DASH + padDeci(day);
  }

  decoHMS(hour, minute, second) {
    var _padDeci3, _padDeci4, _padDeci5;

    return this.dh ? (_padDeci3 = padDeci(hour), this.dh(hour)(_padDeci3)) + enumChars.RT + (_padDeci4 = padDeci(minute), this.ds(minute)(_padDeci4)) + enumChars.RT + (_padDeci5 = padDeci(second), this.ds(second)(_padDeci5)) : padDeci(hour) + enumChars.RT + padDeci(minute) + enumChars.RT + padDeci(second);
  }

  decoMilli(milli) {
    var _padMilli;

    return this.dt ? (_padMilli = padMilli(milli), this.dt(milli)(_padMilli)) : padMilli(milli);
  }

}

const timestamp = Timestamp.build();
/** @type {Function} */

timestamp.date.bind(timestamp);
/** @type {Function} */

timestamp.time.bind(timestamp);
/** @type {Function} */

timestamp.roughTime.bind(timestamp);
/** @type {Function} */

timestamp.dateTime.bind(timestamp);

const sortKeysByLength$1 = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable$1 = function (dict) {
  if (this !== null && this !== void 0 && this.sort) sortKeysByLength$1(dict);
  Object.defineProperty(dict, Symbol.replace, {
    value(word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj);

      return after ? after(word) : word;
    },

    configurable: true,
    enumerable: false
  });
  return dict;
};

var _Blue$lighten_, _LightBlue$accent_, _LightBlue$lighten_, _Lime$lighten_, _ref$1, _function, _Grey$base, _return, _Brown$lighten_;

Dye((_Blue$lighten_ = Blue$1.lighten_2, hexToRgb(_Blue$lighten_)));
Dye((_LightBlue$accent_ = LightBlue$1.accent_2, hexToRgb(_LightBlue$accent_)));
Dye((_LightBlue$lighten_ = LightBlue$1.lighten_3, hexToRgb(_LightBlue$lighten_)));
Dye((_Lime$lighten_ = Lime$1.lighten_1, hexToRgb(_Lime$lighten_)));
(_ref$1 = [[/function/gi, (_function = 'function', Dye((_Grey$base = Grey$1.base, hexToRgb(_Grey$base)))(_function))], [/return/gi, (_return = 'return', Dye((_Brown$lighten_ = Brown$1.lighten_3, hexToRgb(_Brown$lighten_)))(_return))], [/\bthis\b/gi, x => {
  var _x, _BlueGrey$accent_;

  return _x = x, Dye((_BlueGrey$accent_ = BlueGrey$1.accent_2, hexToRgb(_BlueGrey$accent_)))(_x);
}], [/\b(if|else|while|do|switch|for)\b/gi, x => {
  var _x2, _Purple$lighten_;

  return _x2 = x, Dye((_Purple$lighten_ = Purple$1.lighten_3, hexToRgb(_Purple$lighten_)))(_x2);
}], [/\b(var|let|const)\b/gi, x => {
  var _x3, _DeepPurple$lighten_;

  return _x3 = x, Dye((_DeepPurple$lighten_ = DeepPurple$1.lighten_3, hexToRgb(_DeepPurple$lighten_)))(_x3);
}]], makeReplaceable$1(_ref$1));

const DIGIT_2 = '2-digit';
const DATE_CONFIG = {
  year: DIGIT_2,
  month: DIGIT_2,
  day: DIGIT_2
};
/** @type {Intl.DateTimeFormat} */

const FormatDate = new Intl.DateTimeFormat(undefined, DATE_CONFIG);
FormatDate.format.bind(FormatDate);

const NUMERIC = 'numeric';
const TIME_CONFIG = {
  hour: NUMERIC,
  minute: NUMERIC,
  second: NUMERIC,
  hour12: false
};
/** @type {Intl.DateTimeFormat} */

const FormatTime = new Intl.DateTimeFormat(undefined, TIME_CONFIG);
FormatTime.format.bind(FormatTime);

/** @type {Intl.DateTimeFormat} */

const FormatDateTime = new Intl.DateTimeFormat(undefined, { ...DATE_CONFIG,
  ...TIME_CONFIG
});
FormatDateTime.format.bind(FormatDateTime);

// export const rpad = String.prototype.padEnd


Function.prototype.call.bind(String.prototype.padStart);

Function.prototype.call.bind(String.prototype.padEnd);

const LITERAL$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2.bind(LITERAL$2);

const LITERAL$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};

/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1.bind(LITERAL$1);

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER$2 = 'render';
const MUTATE_PIGMENT$2 = {
  colorant: RENDER$2,
  mutate: true
};

// export const rpad = String.prototype.padEnd


Function.prototype.call.bind(String.prototype.padStart);

Function.prototype.call.bind(String.prototype.padEnd);

const CJK_PUNCS = '\u3000-\u303f';
const CJK_LETTERS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef'; // full letters + full puncs

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_LETTERS}${FULL_CHARS}]`); // HAN ideographs

HAN.test.bind(HAN);

function duozipper(a, b) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi);

  return vec;
}
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper = (a, b, fn, l) => duozipper.call({
  fn,
  hi: l
}, a, b);

const wind = (keys, values) => zipper(keys, values, (k, v) => [k, v]);

const unwind = (entries, h) => {
  h = h || (entries === null || entries === void 0 ? void 0 : entries.length);
  let keys = Array(h),
      values = Array(h);

  for (let r; --h >= 0 && (r = entries[h]);) {
    keys[h] = r[0];
    values[h] = r[1];
  }

  return [keys, values];
};

/**
 *
 * @param {[*,*][]} ea
 * @param {[*,*][]} eb
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */


const mutazip = (ea, eb, keyMap, valMap, l) => {
  l = l || (ea === null || ea === void 0 ? void 0 : ea.length), valMap = valMap || keyMap;

  for (let a, b, i = 0; i < l && (a = ea[i]) && (b = eb[i]); i++) a[0] = keyMap(a[0], b[0], i), a[1] = valMap(a[1], b[1], i);

  return ea;
};

/**
 * @typedef {Object} Preset
 * @typedef {string} Preset.min
 * @typedef {string} Preset.max
 * @typedef {string} Preset.na
 * @typedef {string[]} Preset.effects
 * @typedef {Function} Preset.filter
 * @typedef {Function} Preset.mapper
 *
 * @param {[*,*][]} entries
 * @param {Preset[]} configs
 * @returns {*[]}
 */

const fluoEntries = function (entries, configs) {
  const colorant = this === null || this === void 0 ? void 0 : this.colorant,
        mutate = this === null || this === void 0 ? void 0 : this.mutate;
  let [keys, items] = unwind(entries);
  const context = {
    colorant,
    mutate: true
  };
  fluoVector.fluoVector.call(context, keys, configs);
  fluoVector.fluoVector.call(context, items, configs);
  const rendered = wind(keys, items);
  return mutate ? mutazip(entries, rendered, (a, b) => b) : rendered;
};

//   FUNC = '',
//   PIGM = '',
//   HEX = ''

const RENDER$1 = 'render';
const MUTATE_PIGMENT$1 = {
  colorant: RENDER$1,
  mutate: true
};
fluoEntries.bind(MUTATE_PIGMENT$1);

//   FUNC = '',
//   PIGM = '',
//   HEX = ''

const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};
fluoMatrix.bind(MUTATE_PIGMENT);

const sortKeysByLength = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable = function (dict) {
  if (this !== null && this !== void 0 && this.sort) sortKeysByLength(dict);
  Object.defineProperty(dict, Symbol.replace, {
    value(word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj);

      return after ? after(word) : word;
    },

    configurable: true,
    enumerable: false
  });
  return dict;
};

var _ref;

const REG_CR = /\r/g;
const BACKSLASH_CR = '\\r';
const REG_LF = /\n/g;
const BACKSLASH_LF = '\\n';
(_ref = [[REG_CR, BACKSLASH_CR], [REG_LF, BACKSLASH_LF]], makeReplaceable(_ref));

fluoVector.fluoVector.bind(MUTATE_PIGMENT$2);

const LITERAL = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper.bind(LITERAL);

const isTab = c => c === '\t' || c === ' ';

const deNaTab = tx => {
  let i = 0;

  for (let {
    length
  } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i;

  return i;
};

var id = 0;

function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}

function _classPrivateFieldLooseBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
} // from x => typeof x


const NUM = 'number';
const STR = 'string';
const DEF = 'default';

var _Cards$orange$lighten, _Cards$indigo$lighten;

const orange = Dye((_Cards$orange$lighten = Cards$1.orange.lighten_3, hexToRgb(_Cards$orange$lighten)));
const indigo = Dye((_Cards$indigo$lighten = Cards$1.indigo.lighten_1, hexToRgb(_Cards$indigo$lighten)));

const bracket$1 = tx => orange('[') + tx + orange(']');

const parenth$1 = tx => indigo('(') + tx + indigo(')');

var _Cards$blueGrey$base, _Cards$grey$darken_;

const blueGrey = Dye((_Cards$blueGrey$base = Cards$1.blueGrey.base, hexToRgb(_Cards$blueGrey$base)));
const grey = Dye((_Cards$grey$darken_ = Cards$1.grey.darken_1, hexToRgb(_Cards$grey$darken_)));

const bracket = (tx = '') => blueGrey('[') + grey(tx) + blueGrey(']');

const parenth = (tx = '') => blueGrey('(') + grey(tx) + blueGrey(')');
/**
 *
 * @param {*} [text]
 * @return {string}
 */


function render(text) {
  const queue = this,
        {
    indent
  } = queue;
  if (text !== null && text !== void 0 && text.length) queue.push(text);
  return enumChars.SP.repeat(indent << 1) + queue.join(enumChars.SP);
}

const EDGE_BRACKET = /^[(\[{].*[)\]}]$/;

const enqueue = function (key, ...items) {
  const {
    queue,
    conf
  } = this;
  const {
    bracket,
    parenth
  } = conf;
  if (items.every(nullish$1)) ;else {
    var _String;

    items = items.map(String).join(enumChars.COSP);
    queue.push((_String = String(key), bracket.major(_String)));
    queue.push(hasAnsi(items) && EDGE_BRACKET.test(clearAnsi(items)) ? items : parenth.major(items));
  }
  return this;
};

const initQueue = t => {
  var _t;

  const queue = [];
  let hi, indent;
  if (t && (hi = (_t = t = String(t)) === null || _t === void 0 ? void 0 : _t.length) && (indent = deNaTab(t)) < hi) queue.push(t.slice(indent));
  queue.indent = indent;
  return {
    queue
  };
};

let _Symbol$toPrimitive;

class Callable extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}
/**
 * @typedef {Array<string>} ArrayWithIndent
 * @typedef {string} ArrayWithIndent.indent
 */

/**
 * @type {Object<string,string>}
 */


var _conf = _classPrivateFieldLooseKey("conf");

_Symbol$toPrimitive = Symbol.toPrimitive;

class XrStream extends Callable {
  /** @type {ArrayWithIndent} */

  /** @type {number} */

  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */
  constructor(word, pretty = true) {
    super(word => render.call(this.queue, word));
    this.queue = void 0;
    this.indent = void 0;
    Object.defineProperty(this, _conf, {
      writable: true,
      value: {}
    });
    Object.assign(this, initQueue(word));
    _classPrivateFieldLooseBase(this, _conf)[_conf].bracket = pretty ? {
      major: bracket$1,
      minor: bracket
    } : {
      major: bracket$2,
      minor: bracket$2
    };
    _classPrivateFieldLooseBase(this, _conf)[_conf].parenth = pretty ? {
      major: parenth$1,
      minor: parenth
    } : {
      major: parenth$2,
      minor: parenth$2
    };
    return new Proxy(this, {
      get(target, name, receiver) {
        return name in target ? target[name] // `[proxy.get] (${ String(name) }) (${ target?.name })` |> logger,
        : (...items) => (enqueue.call(target, name, ...items), receiver);
      }

    });
  }

  get conf() {
    return _classPrivateFieldLooseBase(this, _conf)[_conf];
  }

  asc() {
    return this.queue.indent++, this;
  }

  desc() {
    return this.queue.indent--, this;
  }

  p(...items) {
    return this.queue.push(...items), this;
  }

  br(...items) {
    return this.queue.push(items.map(parenth$2).join(enumChars.CO)), this;
  }

  toString() {
    return render.call(this.queue);
  }

  [_Symbol$toPrimitive](h) {
    switch (h) {
      case STR:
      case DEF:
        return render.call(this.queue);

      case NUM:
        return this.queue.indent;

      default:
        throw new Error('XrStream Symbol.toPrimitive error');
    }
  }

}

new XrStream();

/** @type {Function} */

const ros = ros$1;

/**
 * Cross by candidates and functions, under certain repeat.
 * Each function receives the same list of candidates.
 * @param {number} repeat
 * @param {Object<string,*[]>} candidates - each value is an array of parameters.
 * @param {Object<string,function>} methods
 * @param {boolean} average
 * @param {boolean} showParams
 * @returns {{lapse:CrosTab,result:CrosTab}}
 */

function strategies({
  repeat,
  candidates,
  methods,
  showAverage = true,
  showParams = false
}) {
  const eta$1 = new eta.Eta(),
        functionNames = Object.keys(methods),
        prettyNames = functionNames.map(ros).join(enumChars.CO),
        functions = Object.values(methods),
        entries = Object.entries(candidates),
        h = entries.length,
        w = functionNames.length,
        tmx = Init.iso(h, w, 0),
        vmx = Init.iso(h, w, null),
        rep = repeater.bind({
    repeat
  });
  eta$1.ini();

  for (let i = 0, candidateName, paramList; i < h; i++) {
    [candidateName, paramList] = entries[i];
    progressLogger(i, candidateName, prettyNames, repeat);
    eta$1.tick();

    for (let j = 0, vrow = vmx[i], trow = tmx[i]; j < w; j++) {
      vrow[j] = rep(functions[j], paramList, paramList.thisArg);
      trow[j] = eta$1.tick();
    }
  }

  const crostab$1 = new crostab.CrosTab(Object.keys(candidates), functionNames, [[]]);
  let [lapse, result] = [crostab$1.copy({
    rows: tmx,
    title: 'lapse'
  }), crostab$1.copy({
    rows: vmx,
    title: 'result'
  })];
  if (showAverage) lapse.unshiftRow('average', fluoVector.fluoVector(ColumnsMapper.mapper(tmx, average)));
  if (showParams) result.unshiftColumn('input', Object.values(candidates));
  return {
    lapse,
    result
  };
}

const repeater = function (callable, params, thisArg) {
  let {
    repeat
  } = this;

  for (--repeat; repeat > 0; repeat--) callable.apply(thisArg, params);

  return callable.apply(thisArg, params);
};

const progressLogger = (index, cname, names, repeat) => {
  var _ref;

  return _ref = `[${timestamp$1.time()}] [${index}] (${cname}) tested by [${names}], repeated * ${repeat}.`, console.log(_ref);
};

const average = nums => math.round(nums.reduce((a, b) => a + b, 0) / nums.length);

exports.strategies = strategies;
