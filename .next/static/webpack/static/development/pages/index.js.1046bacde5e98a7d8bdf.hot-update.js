webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/react-particles-js/cjs/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/cjs/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js")},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(11));t.Particles=i.default,n(r(7)),n(r(9)),n(r(8)),n(r(3)),n(r(4)),n(r(2)),n(r(17)),n(r(18)),n(r(1)),n(r(6)),n(r(19)),n(r(5)),t.default=i.default},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=p(r(0)),y=r(0),v=f(r(12)),b=r(13),h=r(14),m=r(15),_=r(16),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,r,n,p,f=(t=y,function(){var e,r=c(t);if(u()){var n=c(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=f.call(this,e)).state={canvas:void 0,library:void 0},t.loadCanvas=t.loadCanvas.bind(a(t)),t}return r=y,(n=[{key:"buildParticlesLibrary",value:function(e,t){try{if(void 0===window)return null}catch(e){return null}var r=new m.Options;r.load(h.defaultParams),r.load(t),_.tsParticles.dom();var n=new b.Container(e,r);return this.props.particlesRef&&(this.props.particlesRef.current=n),n}},{key:"refresh",value:function(e){var t=this,r=this.state.canvas;r&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.id,e.params)},(function(){t.loadCanvas(r)})))}},{key:"destroy",value:function(){this.state.library&&this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},(function(){var r=t.state.library;r&&(r.canvas.loadCanvas(e),r.start())}))}},{key:"shouldComponentUpdate",value:function(e){return!v.default(e,this.props)}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),i(c(y.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.id,this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.className,o=e.canvasClassName,i=e.id;return d.createElement("div",{className:n,id:i},d.createElement("canvas",{ref:this.loadCanvas,className:o,style:Object.assign(Object.assign({},this.props.style),{width:t,height:r})}))}}])&&o(r.prototype,n),p&&o(r,p),y}(y.Component);t.default=g,g.defaultProps={width:"100%",height:"100%",params:h.defaultParams,style:{},id:"tsparticles"}},function(e,t){e.exports=__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Container */ "./node_modules/tsparticles/dist/Classes/Container.js")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(2),i=r(3),s=r(4),a=r(5),u=r(6),c=r(7),l=r(8),p=r(9);t.defaultParams={particles:{number:{value:40,max:-1,density:{enable:!1,value_area:1200}},color:{value:"#FFF"},shape:{type:n.ShapeType.circle,stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,size_min:0,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:p.MoveDirection.none,random:!1,straight:!1,out_mode:l.OutMode.bounce,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detectsOn:c.InteractivityDetect.canvas,events:{onHover:{enable:!1,mode:a.HoverMode.grab},onClick:{enable:!1,mode:u.ClickMode.repulse},resize:!0},modes:{grab:{distance:180,line_linked:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fps_limit:999,polygon:{enable:!1,scale:1,type:o.PolygonMaskType.inline,inline:{arrangement:i.PolygonMaskInlineArrangement.onePerPoint},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:s.PolygonMaskMoveType.path},url:""}}},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Options/Options */ "./node_modules/tsparticles/dist/Classes/Options/Options.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/index */ "./node_modules/tsparticles/dist/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js")}]));

/***/ }),

/***/ "./node_modules/react-particles-js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-particles-js/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ReactParticles = __webpack_require__(/*! ./cjs/particles */ "./node_modules/react-particles-js/cjs/particles.js");
for (let key in ReactParticles) {
    ReactParticles.default[key] = ReactParticles[key];
}
module.exports = ReactParticles.default;

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Absorber.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Absorber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(/*! ./Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Absorber = (function () {
    function Absorber(container, options, position) {
        var _a, _b;
        this.container = container;
        this.initialPosition = position;
        this.options = options;
        var size = options.size.value * container.retina.pixelRatio;
        var random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
        var minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
        if (random) {
            size = Utils_1.Utils.randomInRange(minSize, size);
        }
        this.opacity = this.options.opacity;
        this.size = size * container.retina.pixelRatio;
        this.mass = this.size * options.size.density;
        var limit = options.size.limit;
        this.limit = limit !== undefined ? limit * this.container.retina.pixelRatio : limit;
        var color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = ColorUtils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    }
    Absorber.prototype.attract = function (particle) {
        var container = this.container;
        var dx = this.position.x - (particle.position.x + particle.offset.x);
        var dy = this.position.y - (particle.position.y + particle.offset.y);
        var distance = Math.sqrt(Math.abs(dx * dx + dy * dy));
        var angle = Math.atan2(dx, dy) * (180 / Math.PI);
        var acceleration = this.mass / Math.pow(distance, 2);
        if (distance < this.size + particle.size.value) {
            var remove = false;
            var sizeFactor = particle.size.value * 0.033;
            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
                container.particles.remove(particle);
                remove = true;
            }
            else {
                particle.size.value -= sizeFactor;
                particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
                particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density;
            return !remove;
        }
        else {
            particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
            particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
            return true;
        }
    };
    Absorber.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
            initialPosition :
            this.calcPosition();
    };
    Absorber.prototype.draw = function () {
        var container = this.container;
        container.canvas.drawAbsorber(this);
    };
    Absorber.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.options.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.size.width,
            y: percentPosition.y / 100 * container.canvas.size.height,
        };
    };
    return Absorber;
}());
exports.Absorber = Absorber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Canvas.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Canvas.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ./Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var CanvasUtils_1 = __webpack_require__(/*! ./Utils/CanvasUtils */ "./node_modules/tsparticles/dist/Classes/Utils/CanvasUtils.js");
var ColorUtils_1 = __webpack_require__(/*! ./Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Canvas = (function () {
    function Canvas(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    Canvas.prototype.init = function () {
        this.resize();
        var container = this.container;
        var options = container.options;
        var cover = options.backgroundMask.cover;
        var color = cover.color;
        var trail = options.particles.move.trail;
        this.coverColor = ColorUtils_1.ColorUtils.colorToRgb(color);
        this.trailFillColor = ColorUtils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    };
    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Constants_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    };
    Canvas.prototype.destroy = function () {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.resize = function () {
        if (this.element) {
            this.element.width = this.size.width;
            this.element.height = this.size.height;
        }
    };
    Canvas.prototype.paint = function () {
        var container = this.container;
        var options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
                this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.coverColor));
            }
            else {
                this.paintBase();
            }
        }
    };
    Canvas.prototype.clear = function () {
        var container = this.container;
        var options = container.options;
        var trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.isPointInPath = function (path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    };
    Canvas.prototype.drawPolygonMask = function () {
        var container = this.container;
        var options = container.options;
        var context = this.context;
        var polygonDraw = options.polygon.draw;
        var polygon = container.polygon;
        var rawData = polygon.raw;
        for (var _i = 0, _a = polygon.paths; _i < _a.length; _i++) {
            var path = _a[_i];
            var path2d = path.path2d;
            var path2dSupported = polygon.path2DSupported;
            if (context) {
                if (path2dSupported && path2d && polygon.offset) {
                    CanvasUtils_1.CanvasUtils.drawPolygonMaskPath(context, path2d, polygonDraw.stroke, polygon.offset);
                }
                else if (rawData) {
                    CanvasUtils_1.CanvasUtils.drawPolygonMask(context, rawData, polygonDraw.stroke);
                }
            }
        }
    };
    Canvas.prototype.drawAbsorber = function (absorber) {
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawAbsorber(ctx, absorber);
    };
    Canvas.prototype.drawLinkedLine = function (p1, p2, opacity) {
        var _a;
        var container = this.container;
        var options = container.options;
        var pos1 = {
            x: p1.position.x + p1.offset.x,
            y: p1.position.y + p1.offset.y,
        };
        var pos2 = {
            x: p2.position.x + p2.offset.x,
            y: p2.position.y + p2.offset.y,
        };
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        var twinkle = options.particles.twinkle.lines;
        var twinkleFreq = twinkle.frequency;
        var twinkleColor = twinkle.color;
        var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
        var twinkling = twinkle.enable && Math.random() < twinkleFreq;
        if (twinkling && twinkleRgb !== undefined) {
            colorLine = twinkleRgb;
            opacity = twinkle.opacity;
        }
        else if (container.particles.lineLinkedColor === Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
            var sourceColor = p1.color;
            var destColor = p2.color;
            colorLine = ColorUtils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
        }
        else {
            colorLine = container.particles.lineLinkedColor;
        }
        var width = (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth;
        CanvasUtils_1.CanvasUtils.drawLineLinked(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.lineLinked.shadow);
    };
    Canvas.prototype.drawConnectLine = function (p1, p2) {
        var _a;
        var lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var pos1 = {
            x: p1.position.x + p1.offset.x,
            y: p1.position.y + p1.offset.y
        };
        var pos2 = {
            x: p2.position.x + p2.offset.x,
            y: p2.position.y + p2.offset.y
        };
        CanvasUtils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : this.container.retina.lineLinkedWidth, lineStyle, pos1, pos2);
    };
    Canvas.prototype.drawGrabLine = function (particle, opacity, mousePos) {
        var _a;
        var container = this.container;
        var optColor = particle.particlesOptions.lineLinked.color;
        var lineColor = container.particles.grabLineColor ||
            (typeof optColor === "string" ? ColorUtils_1.ColorUtils.stringToRgb(optColor) : ColorUtils_1.ColorUtils.colorToRgb(optColor));
        if (lineColor == Constants_1.Constants.randomColorValue) {
            lineColor = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        container.particles.grabLineColor = lineColor;
        var ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        if (container.particles.grabLineColor === Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        else {
            colorLine = container.particles.grabLineColor;
        }
        if (colorLine === undefined) {
            return;
        }
        var beginPos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        CanvasUtils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
    };
    Canvas.prototype.drawParticle = function (particle) {
        var _a, _b, _c;
        var container = this.container;
        var options = container.options;
        var twinkle = particle.particlesOptions.twinkle.particles;
        var twinkleFreq = twinkle.frequency;
        var twinkleColor = typeof twinkle.color === "string" ? { value: twinkle.color } : twinkle.color;
        var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
        var twinkling = twinkle.enable && Math.random() < twinkleFreq;
        var radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
        var opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
        var color = twinkling && twinkleRgb !== undefined ?
            twinkleRgb : (_c = particle.bubble.color) !== null && _c !== void 0 ? _c : particle.color;
        var colorValue = color !== undefined ? ColorUtils_1.ColorUtils.getStyleFromColor(color, opacity) : undefined;
        if (!this.context || !colorValue) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawParticle(this.context, particle, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
    };
    Canvas.prototype.paintBase = function (baseColor) {
        if (this.context) {
            CanvasUtils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
        }
    };
    Canvas.prototype.lineStyle = function (p1, p2) {
        var container = this.container;
        var options = container.options;
        var connectOptions = options.interactivity.modes.connect;
        if (p1.color && p2.color) {
            if (this.context) {
                return CanvasUtils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.lineLinked.opacity);
            }
        }
    };
    Canvas.prototype.initBackground = function () {
        var container = this.container;
        var options = container.options;
        var background = options.background;
        var element = this.element;
        if (!element) {
            return;
        }
        var elementStyle = element.style;
        if (background.color) {
            var color = ColorUtils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = ColorUtils_1.ColorUtils.getStyleFromColor(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Container.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Container.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Canvas_1 = __webpack_require__(/*! ./Canvas */ "./node_modules/tsparticles/dist/Classes/Canvas.js");
var EventListeners_1 = __webpack_require__(/*! ./Utils/EventListeners */ "./node_modules/tsparticles/dist/Classes/Utils/EventListeners.js");
var Particles_1 = __webpack_require__(/*! ./Particles */ "./node_modules/tsparticles/dist/Classes/Particles.js");
var Retina_1 = __webpack_require__(/*! ./Retina */ "./node_modules/tsparticles/dist/Classes/Retina.js");
var ShapeType_1 = __webpack_require__(/*! ../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var PolygonMask_1 = __webpack_require__(/*! ./PolygonMask */ "./node_modules/tsparticles/dist/Classes/PolygonMask.js");
var FrameManager_1 = __webpack_require__(/*! ./FrameManager */ "./node_modules/tsparticles/dist/Classes/FrameManager.js");
var Options_1 = __webpack_require__(/*! ./Options/Options */ "./node_modules/tsparticles/dist/Classes/Options/Options.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Presets_1 = __webpack_require__(/*! ./Utils/Presets */ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js");
var Emitter_1 = __webpack_require__(/*! ./Emitter */ "./node_modules/tsparticles/dist/Classes/Emitter.js");
var Absorber_1 = __webpack_require__(/*! ./Absorber */ "./node_modules/tsparticles/dist/Classes/Absorber.js");
var Container = (function () {
    function Container(id, params) {
        var presets = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            presets[_i - 2] = arguments[_i];
        }
        this.started = false;
        this.destroyed = false;
        this.id = id;
        this.paused = true;
        this.sourceOptions = params;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.polygon = new PolygonMask_1.PolygonMask(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.interactivity = {
            mouse: {},
        };
        this.images = [];
        this.bubble = {};
        this.repulse = { particles: [] };
        this.emitters = [];
        this.absorbers = [];
        this.options = new Options_1.Options();
        for (var _a = 0, presets_1 = presets; _a < presets_1.length; _a++) {
            var preset = presets_1[_a];
            this.options.load(Presets_1.Presets.getPreset(preset));
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.eventListeners = new EventListeners_1.EventListeners(this);
    }
    Container.requestFrame = function (callback) {
        return window.customRequestAnimationFrame(callback);
    };
    Container.cancelAnimation = function (handle) {
        window.cancelAnimationFrame(handle);
    };
    Container.prototype.play = function (force) {
        var _this = this;
        var needsUpdate = this.paused || force;
        if (this.paused) {
            this.paused = false;
        }
        if (needsUpdate) {
            for (var _i = 0, _a = this.emitters; _i < _a.length; _i++) {
                var emitter = _a[_i];
                emitter.start();
            }
            this.lastFrameTime = performance.now();
        }
        this.drawAnimationFrame = Container.requestFrame(function (t) { return _this.drawer.nextFrame(t); });
    };
    Container.prototype.pause = function () {
        if (this.drawAnimationFrame !== undefined) {
            for (var _i = 0, _a = this.emitters; _i < _a.length; _i++) {
                var emitter = _a[_i];
                emitter.stop();
            }
            Container.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
            if (!this.pageHidden) {
                this.paused = true;
            }
        }
    };
    Container.prototype.getAnimationStatus = function () {
        return !this.paused;
    };
    Container.prototype.densityAutoParticles = function () {
        if (!(this.canvas.element && this.options.particles.number.density.enable)) {
            return;
        }
        var area = this.canvas.element.width * this.canvas.element.height / 1000;
        if (this.retina.isRetina) {
            area /= this.retina.pixelRatio * 2;
        }
        var optParticlesNumber = this.options.particles.number.value;
        var density = this.options.particles.number.density.area;
        var particlesNumber = area * optParticlesNumber / density;
        var particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    };
    Container.prototype.destroy = function () {
        this.stop();
        this.retina.reset();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.polygon;
        delete this.bubble;
        delete this.repulse;
        delete this.images;
        delete this.drawer;
        delete this.eventListeners;
        this.destroyed = true;
    };
    Container.prototype.exportImg = function (callback) {
        this.exportImage(callback);
    };
    Container.prototype.exportImage = function (callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    };
    Container.prototype.exportConfiguration = function () {
        return JSON.stringify(this.options, undefined, 2);
    };
    Container.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stop();
                        return [4, this.start()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Container.prototype.stop = function () {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.images = [];
        this.particles.clear();
        this.retina.reset();
        this.canvas.clear();
        this.polygon.reset();
        this.emitters = [];
        this.absorbers = [];
        delete this.particles.lineLinkedColor;
    };
    Container.prototype.start = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _i, _a, character, character, _b, _c, optionsImage;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.started) {
                            return [2];
                        }
                        this.started = true;
                        this.eventListeners.addListeners();
                        return [4, this.polygon.init()];
                    case 1:
                        _d.sent();
                        if (!(Utils_1.Utils.isInArray(ShapeType_1.ShapeType.char, this.options.particles.shape.type) ||
                            Utils_1.Utils.isInArray(ShapeType_1.ShapeType.character, this.options.particles.shape.type))) return [3, 8];
                        if (!(this.options.particles.shape.character instanceof Array)) return [3, 6];
                        _i = 0, _a = this.options.particles.shape.character;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        character = _a[_i];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        character = this.options.particles.shape.character;
                        if (!(character !== undefined)) return [3, 8];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        if (!(Utils_1.Utils.isInArray(ShapeType_1.ShapeType.image, this.options.particles.shape.type) ||
                            Utils_1.Utils.isInArray(ShapeType_1.ShapeType.images, this.options.particles.shape.type))) return [3, 15];
                        if (!(this.options.particles.shape.image instanceof Array)) return [3, 13];
                        _b = 0, _c = this.options.particles.shape.image;
                        _d.label = 9;
                    case 9:
                        if (!(_b < _c.length)) return [3, 12];
                        optionsImage = _c[_b];
                        return [4, this.loadImageShape(optionsImage)];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11:
                        _b++;
                        return [3, 9];
                    case 12: return [3, 15];
                    case 13: return [4, this.loadImageShape(this.options.particles.shape.image)];
                    case 14:
                        _d.sent();
                        _d.label = 15;
                    case 15:
                        this.init();
                        this.play();
                        return [2];
                }
            });
        });
    };
    Container.prototype.loadImageShape = function (imageShape) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        _b = (_a = this.images).push;
                        return [4, Utils_1.Utils.loadImage(imageShape)];
                    case 1:
                        _b.apply(_a, [_d.sent()]);
                        return [3, 3];
                    case 2:
                        _c = _d.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Container.prototype.init = function () {
        this.retina.init();
        this.canvas.init();
        this.particles.init();
        if (this.options.emitters instanceof Array) {
            for (var _i = 0, _a = this.options.emitters; _i < _a.length; _i++) {
                var emitterOptions = _a[_i];
                var emitter = new Emitter_1.Emitter(this, emitterOptions);
                this.emitters.push(emitter);
            }
        }
        else {
            var emitterOptions = this.options.emitters;
            var emitter = new Emitter_1.Emitter(this, emitterOptions);
            this.emitters.push(emitter);
        }
        if (this.options.absorbers instanceof Array) {
            for (var _b = 0, _c = this.options.absorbers; _b < _c.length; _b++) {
                var absorberOptions = _c[_b];
                var absorber = new Absorber_1.Absorber(this, absorberOptions);
                this.absorbers.push(absorber);
            }
        }
        else {
            var absorberOptions = this.options.absorbers;
            var absorber = new Absorber_1.Absorber(this, absorberOptions);
            this.absorbers.push(absorber);
        }
        this.densityAutoParticles();
    };
    return Container;
}());
exports.Container = Container;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Emitter.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Emitter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Classes/Particle.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Emitter = (function () {
    function Emitter(container, emitterOptions, position) {
        var _a, _b, _c;
        this.container = container;
        this.initialPosition = position;
        this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : {
            height: 0,
            width: 0,
        };
        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
        this.start();
    }
    Emitter.prototype.emit = function () {
        var container = this.container;
        var position = this.position;
        var offset = {
            x: container.canvas.size.width * this.size.width / 100,
            y: container.canvas.size.height * this.size.height / 100,
        };
        for (var i = 0; i < this.emitterOptions.rate.quantity; i++) {
            var particle = new Particle_1.Particle(container, {
                x: position.x + offset.x * (Math.random() - 0.5),
                y: position.y + offset.y * (Math.random() - 0.5),
            }, this);
            container.particles.addParticle(particle);
        }
    };
    Emitter.prototype.start = function () {
        var _this = this;
        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
            if (this.startInterval === undefined) {
                this.startInterval = window.setInterval(function () {
                    _this.emit();
                }, 1000 * this.emitterOptions.rate.delay);
            }
            if (this.lifeCount > 0) {
                this.prepareToDie();
            }
        }
    };
    Emitter.prototype.stop = function () {
        var interval = this.startInterval;
        if (interval !== undefined) {
            clearInterval(interval);
            delete this.startInterval;
        }
    };
    Emitter.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
            initialPosition :
            this.calcPosition();
    };
    Emitter.prototype.prepareToDie = function () {
        var _this = this;
        var _a;
        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
            window.setTimeout(function () {
                var _a;
                _this.stop();
                _this.lifeCount--;
                if (_this.lifeCount > 0) {
                    _this.position = _this.calcPosition();
                    window.setTimeout(function () {
                        _this.start();
                    }, (_a = _this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    _this.destroy();
                }
            }, this.emitterOptions.life.duration * 1000);
        }
    };
    Emitter.prototype.destroy = function () {
        var container = this.container;
        var index = container.emitters.indexOf(this);
        if (index >= 0) {
            container.emitters.splice(index, 1);
        }
    };
    Emitter.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.size.width,
            y: percentPosition.y / 100 * container.canvas.size.height,
        };
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/FrameManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/FrameManager.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FrameManager = (function () {
    function FrameManager(container) {
        this.container = container;
    }
    FrameManager.prototype.nextFrame = function (timestamp) {
        var container = this.container;
        var options = container.options;
        var fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;
        if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + (1000 / fpsLimit)) {
            container.play();
            return;
        }
        var delta = timestamp - container.lastFrameTime;
        container.lastFrameTime = timestamp;
        container.particles.draw(delta);
        if (!options.particles.move.enable) {
            container.pause();
        }
        else {
            container.play();
        }
    };
    return FrameManager;
}());
exports.FrameManager = FrameManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Bubbler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Bubbler.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType_1 = __webpack_require__(/*! ../../../Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var ClickMode_1 = __webpack_require__(/*! ../../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Constants_1 = __webpack_require__(/*! ../../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var ColorUtils_1 = __webpack_require__(/*! ../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Bubbler = (function () {
    function Bubbler() {
    }
    Bubbler.reset = function (particle) {
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    };
    Bubbler.bubble = function (container) {
        var options = container.options;
        var hoverEnabled = options.interactivity.events.onHover.enable;
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickEnabled = options.interactivity.events.onClick.enable;
        var clickMode = options.interactivity.events.onClick.mode;
        if (hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            this.clickBubble(container);
        }
    };
    Bubbler.process = function (container, particle, distMouse, timeSpent, data) {
        var bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) {
            return;
        }
        var options = container.options;
        var bubbleDuration = options.interactivity.modes.bubble.duration;
        var bubbleDistance = container.retina.bubbleModeDistance;
        var particlesParam = data.particlesObj.optValue;
        var pObjBubble = data.bubbleObj.value;
        var pObj = data.particlesObj.value || 0;
        var type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        var value = pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                        if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                            particle.bubble.radius = value;
                        }
                        if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                        delete particle.bubble.radius;
                    }
                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else if (pObjBubble) {
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                    delete particle.bubble.radius;
                }
                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                    delete particle.bubble.opacity;
                }
            }
        }
    };
    Bubbler.clickBubble = function (container) {
        var _a;
        var options = container.options;
        var mouseClickPos = container.interactivity.mouse.clickPosition;
        if (mouseClickPos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.spatialGrid.queryRadius(mouseClickPos, distance);
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var particle = query_1[_i];
            var pos = {
                x: particle.position.x + particle.offset.x,
                y: particle.position.y + particle.offset.y,
            };
            var distMouse = Utils_1.Utils.getDistanceBetweenCoordinates(pos, mouseClickPos);
            var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (container.bubble.clicking) {
                if (timeSpent > options.interactivity.modes.bubble.duration) {
                    container.bubble.durationEnd = true;
                }
                if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                    container.bubble.clicking = false;
                    container.bubble.durationEnd = false;
                }
                var sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius,
                    },
                    particlesObj: {
                        optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
                        value: particle.size.value,
                    },
                    type: ProcessBubbleType_1.ProcessBubbleType.size,
                };
                this.process(container, particle, distMouse, timeSpent, sizeData);
                var opacityData = {
                    bubbleObj: {
                        optValue: options.interactivity.modes.bubble.opacity,
                        value: particle.bubble.opacity,
                    },
                    particlesObj: {
                        optValue: particle.particlesOptions.opacity.value,
                        value: particle.opacity.value,
                    },
                    type: ProcessBubbleType_1.ProcessBubbleType.opacity,
                };
                this.process(container, particle, distMouse, timeSpent, opacityData);
                if (!container.bubble.durationEnd) {
                    if (distMouse <= container.retina.bubbleModeDistance) {
                        this.hoverBubbleColor(container, particle);
                    }
                    else {
                        delete particle.bubble.color;
                    }
                }
                else {
                    delete particle.bubble.color;
                }
            }
        }
    };
    Bubbler.hoverBubble = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (mousePos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.spatialGrid.queryRadiusWithDistance(mousePos, distance);
        for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
            var _a = query_2[_i], distance_1 = _a.distance, particle = _a.particle;
            var ratio = 1 - distance_1 / container.retina.bubbleModeDistance;
            if (distance_1 <= container.retina.bubbleModeDistance) {
                if (ratio >= 0 && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(container, particle, ratio);
                    this.hoverBubbleOpacity(container, particle, ratio);
                    this.hoverBubbleColor(container, particle);
                }
            }
            else {
                this.reset(particle);
            }
            if (container.interactivity.status === Constants_1.Constants.mouseLeaveEvent) {
                this.reset(particle);
            }
        }
    };
    Bubbler.hoverBubbleSize = function (container, particle, ratio) {
        var _a;
        var modeSize = container.retina.bubbleModeSize;
        if (modeSize === undefined) {
            return;
        }
        var optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
        var pSize = particle.size.value;
        var size = this.calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) {
            particle.bubble.radius = size;
        }
    };
    Bubbler.hoverBubbleOpacity = function (container, particle, ratio) {
        var options = container.options;
        var modeOpacity = options.interactivity.modes.bubble.opacity;
        if (modeOpacity === undefined) {
            return;
        }
        var optOpacity = particle.particlesOptions.opacity.value;
        var pOpacity = particle.opacity.value;
        var opacity = this.calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);
        if (opacity !== undefined) {
            particle.bubble.opacity = opacity;
        }
    };
    Bubbler.calculateBubbleValue = function (particleValue, modeValue, optionsValue, ratio) {
        if (modeValue > optionsValue) {
            var size = particleValue + (modeValue - optionsValue) * ratio;
            return Utils_1.Utils.clamp(size, particleValue, modeValue);
        }
        else if (modeValue < optionsValue) {
            var size = particleValue - (optionsValue - modeValue) * ratio;
            return Utils_1.Utils.clamp(size, modeValue, particleValue);
        }
    };
    Bubbler.hoverBubbleColor = function (container, particle) {
        var options = container.options;
        if (particle.bubble.color === undefined) {
            var modeColor = options.interactivity.modes.bubble.color;
            if (modeColor === undefined) {
                return;
            }
            particle.bubble.color = ColorUtils_1.ColorUtils.colorToRgb(modeColor instanceof Array ?
                Utils_1.Utils.itemFromArray(modeColor) :
                modeColor);
        }
    };
    return Bubbler;
}());
exports.Bubbler = Bubbler;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Connector.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Connector.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Connector = (function () {
    function Connector() {
    }
    Connector.connect = function (container) {
        var options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            var distance = Math.abs(container.retina.connectModeRadius);
            var query = container.particles.spatialGrid.queryRadius(mousePos, distance);
            var i = 0;
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var p1 = query_1[_i];
                var pos1 = {
                    x: p1.position.x + p1.offset.x,
                    y: p1.position.y + p1.offset.y
                };
                for (var _a = 0, _b = query.slice(i + 1); _a < _b.length; _a++) {
                    var p2 = _b[_a];
                    var pos2 = {
                        x: p2.position.x + p2.offset.x,
                        y: p2.position.y + p2.offset.y
                    };
                    var distMax = Math.abs(container.retina.connectModeDistance);
                    var xDiff = Math.abs(pos1.x - pos2.x);
                    var yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }
                ++i;
            }
        }
    };
    return Connector;
}());
exports.Connector = Connector;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Grabber.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Grabber.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Grabber = (function () {
    function Grabber() {
    }
    Grabber.grab = function (container) {
        var options = container.options;
        var interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
            var mousePos = container.interactivity.mouse.position;
            if (mousePos === undefined) {
                return;
            }
            var distance = container.retina.grabModeDistance;
            var query = container.particles.spatialGrid.queryRadiusWithDistance(mousePos, distance);
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var _a = query_1[_i], distance_1 = _a.distance, particle = _a.particle;
                if (distance_1 <= container.retina.grabModeDistance) {
                    var lineOpacity = interactivity.modes.grab.lineLinked.opacity;
                    var grabDistance = container.retina.grabModeDistance;
                    var opacityLine = lineOpacity - (distance_1 * lineOpacity) / grabDistance;
                    if (opacityLine > 0) {
                        container.canvas.drawGrabLine(particle, opacityLine, mousePos);
                    }
                }
            }
        }
    };
    return Grabber;
}());
exports.Grabber = Grabber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Repulser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Repulser.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = __webpack_require__(/*! ../../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var HoverMode_1 = __webpack_require__(/*! ../../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var OutMode_1 = __webpack_require__(/*! ../../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var DivMode_1 = __webpack_require__(/*! ../../../Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js");
var Constants_1 = __webpack_require__(/*! ../../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Repulser = (function () {
    function Repulser() {
    }
    Repulser.repulse = function (container) {
        var options = container.options;
        var interactivity = options.interactivity;
        var hoverEnabled = interactivity.events.onHover.enable;
        var clickEnabled = interactivity.events.onClick.enable;
        var mouseMoveStatus = container.interactivity.status === Constants_1.Constants.mouseMoveEvent;
        var hoverMode = interactivity.events.onHover.mode;
        var clickMode = interactivity.events.onClick.mode;
        var divMode = interactivity.events.onDiv.mode;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse(container);
        }
        else if (interactivity.events.onDiv.enable && Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
            this.divRepulse(container);
        }
    };
    Repulser.divRepulse = function (container) {
        var options = container.options;
        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
        if (!elem) {
            return;
        }
        var pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2),
            y: (elem.offsetTop + elem.offsetHeight / 2),
        };
        var divWidth = elem.offsetWidth / 2;
        if (container.retina.isRetina) {
            pos.x *= container.retina.pixelRatio;
            pos.y *= container.retina.pixelRatio;
            divWidth *= container.retina.pixelRatio;
        }
        var repulseRadius = divWidth;
        this.processRepulse(container, pos, repulseRadius);
    };
    Repulser.hoverRepulse = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(container, mousePos, repulseRadius);
    };
    Repulser.processRepulse = function (container, position, repulseRadius) {
        for (var _i = 0, _a = container.particles.spatialGrid.queryRadius(position, repulseRadius); _i < _a.length; _i++) {
            var particle = _a[_i];
            var dx = particle.position.x - position.x;
            var dy = particle.position.y - position.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var normVec = {
                x: dx / dist,
                y: dy / dist,
            };
            var velocity = container.options.interactivity.modes.repulse.speed * 100;
            var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(dist / repulseRadius, 2)) * velocity, 0, 50);
            var outMode = particle.particlesOptions.move.outMode;
            var sizeValue = particle.size.value;
            var pos = {
                x: particle.position.x + normVec.x * repulseFactor,
                y: particle.position.y + normVec.y * repulseFactor,
            };
            if (outMode === OutMode_1.OutMode.bounce ||
                outMode === OutMode_1.OutMode.bounceVertical ||
                outMode === OutMode_1.OutMode.bounceHorizontal) {
                var isInside = {
                    horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.size.width,
                    vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.size.height,
                };
                if (outMode === OutMode_1.OutMode.bounceVertical || isInside.horizontal) {
                    particle.position.x = pos.x;
                }
                if (outMode === OutMode_1.OutMode.bounceHorizontal || isInside.vertical) {
                    particle.position.y = pos.y;
                }
            }
            else {
                particle.position.x = pos.x;
                particle.position.y = pos.y;
            }
        }
    };
    Repulser.clickRepulse = function (container) {
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            var repulseDistance = container.retina.repulseModeDistance;
            var repulseRadius = Math.pow(repulseDistance / 6, 3);
            var mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            for (var _i = 0, _a = container.particles.spatialGrid.queryRadius(mouseClickPos, repulseRadius); _i < _a.length; _i++) {
                var particle = _a[_i];
                if ((particle === null || particle === void 0 ? void 0 : particle.position) === undefined) {
                    continue;
                }
                var dx = mouseClickPos.x - particle.position.x;
                var dy = mouseClickPos.y - particle.position.y;
                var d = dx * dx + dy * dy;
                var velocity = container.options.interactivity.modes.repulse.speed;
                var force = -repulseRadius * velocity / d;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    this.processClickRepulse(container, particle, dx, dy, force);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (var _b = 0, _c = container.repulse.particles; _b < _c.length; _b++) {
                var particle = _c[_b];
                particle.velocity.horizontal = particle.initialVelocity.horizontal;
                particle.velocity.vertical = particle.initialVelocity.vertical;
            }
            container.repulse.particles = [];
        }
    };
    Repulser.processClickRepulse = function (container, particle, dx, dy, force) {
        var options = container.options;
        var f = Math.atan2(dy, dx);
        particle.velocity.horizontal = force * Math.cos(f);
        particle.velocity.vertical = force * Math.sin(f);
        var outMode = options.particles.move.outMode;
        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal || outMode === OutMode_1.OutMode.bounceVertical) {
            var pos = {
                x: particle.position.x + particle.velocity.horizontal,
                y: particle.position.y + particle.velocity.vertical,
            };
            if (outMode !== OutMode_1.OutMode.bounceVertical) {
                if (pos.x + particle.size.value > container.canvas.size.width ||
                    pos.x - particle.size.value < 0) {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                }
            }
            if (outMode !== OutMode_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.size.value > container.canvas.size.height ||
                    pos.y - particle.size.value < 0) {
                    particle.velocity.vertical = -particle.velocity.vertical;
                }
            }
        }
    };
    return Repulser;
}());
exports.Repulser = Repulser;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/Attractor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Particles/Attractor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attractor = (function () {
    function Attractor() {
    }
    Attractor.attract = function (p1, container) {
        var _a;
        var options = container.options;
        var distance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
        var pos1 = {
            x: p1.position.x + p1.offset.x,
            y: p1.position.y + p1.offset.y
        };
        for (var _i = 0, _b = container.particles.spatialGrid.queryRadius(pos1, distance); _i < _b.length; _i++) {
            var p2 = _b[_i];
            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
                continue;
            }
            var pos2 = {
                x: p2.position.x + p2.offset.x,
                y: p2.position.y + p2.offset.y
            };
            var dx = pos1.x - pos2.x;
            var dy = pos1.y - pos2.y;
            var rotate = options.particles.move.attract.rotate;
            var ax = dx / (rotate.x * 1000);
            var ay = dy / (rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    };
    return Attractor;
}());
exports.Attractor = Attractor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/Collider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Particles/Collider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var CollisionMode_1 = __webpack_require__(/*! ../../../Enums/CollisionMode */ "./node_modules/tsparticles/dist/Enums/CollisionMode.js");
var Collider = (function () {
    function Collider() {
    }
    Collider.collide = function (p1, container) {
        for (var _i = 0, _a = container.particles.spatialGrid.queryRadius(p1.position, p1.size.value * 2); _i < _a.length; _i++) {
            var p2 = _a[_i];
            if (p1 === p2 || !p2.particlesOptions.collisions.enable ||
                p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode) {
                continue;
            }
            var pos1 = {
                x: p1.position.x + p1.offset.x,
                y: p1.position.y + p1.offset.y
            };
            var pos2 = {
                x: p2.position.x + p2.offset.x,
                y: p2.position.y + p2.offset.y
            };
            var dist = Utils_1.Utils.getDistanceBetweenCoordinates(pos1, pos2);
            var defaultSize = container.retina.sizeValue;
            var radius1 = this.getRadius(p1, defaultSize);
            var radius2 = this.getRadius(p2, defaultSize);
            var distP = radius1 + radius2;
            if (dist <= distP) {
                this.resolveCollision(p1, p2);
            }
        }
    };
    Collider.getRadius = function (particle, fallback) {
        return particle.bubble.radius || particle.size.value || fallback;
    };
    Collider.resolveCollision = function (p1, p2) {
        var pos1 = {
            x: p1.position.x + p1.offset.x,
            y: p1.position.y + p1.offset.y
        };
        var pos2 = {
            x: p2.position.x + p2.offset.x,
            y: p2.position.y + p2.offset.y
        };
        switch (p1.particlesOptions.collisions.mode) {
            case CollisionMode_1.CollisionMode.bounce:
                var xVelocityDiff = p1.velocity.horizontal - p2.velocity.horizontal;
                var yVelocityDiff = p1.velocity.vertical - p2.velocity.vertical;
                var xDist = pos2.x - pos1.x;
                var yDist = pos2.y - pos1.y;
                if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
                    var angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
                    var m1 = p1.size.value;
                    var m2 = p2.size.value;
                    var u1 = this.rotate(p1.velocity, angle);
                    var u2 = this.rotate(p2.velocity, angle);
                    var v1 = {
                        horizontal: u1.horizontal * (m1 - m2) / (m1 + m2) + u2.horizontal * 2 * m2 / (m1 + m2),
                        vertical: u1.vertical,
                    };
                    var v2 = {
                        horizontal: u2.horizontal * (m1 - m2) / (m1 + m2) + u1.horizontal * 2 * m2 / (m1 + m2),
                        vertical: u2.vertical,
                    };
                    var vFinal1 = this.rotate(v1, -angle);
                    var vFinal2 = this.rotate(v2, -angle);
                    p1.velocity.horizontal = vFinal1.horizontal;
                    p1.velocity.vertical = vFinal1.vertical;
                    p2.velocity.horizontal = vFinal2.horizontal;
                    p2.velocity.vertical = vFinal2.vertical;
                }
        }
    };
    Collider.rotate = function (velocity, angle) {
        return {
            horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
            vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle),
        };
    };
    return Collider;
}());
exports.Collider = Collider;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/InteractionManager.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Particles/InteractionManager.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Linker_1 = __webpack_require__(/*! ./Linker */ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/Linker.js");
var Attractor_1 = __webpack_require__(/*! ./Attractor */ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/Attractor.js");
var Collider_1 = __webpack_require__(/*! ./Collider */ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/Collider.js");
var InteractionManager = (function () {
    function InteractionManager() {
    }
    InteractionManager.interact = function (p1, container) {
        if (p1.particlesOptions.lineLinked.enable) {
            Linker_1.Linker.link(p1, container);
        }
        if (p1.particlesOptions.move.attract.enable) {
            Attractor_1.Attractor.attract(p1, container);
        }
        if (p1.particlesOptions.collisions.enable) {
            Collider_1.Collider.collide(p1, container);
        }
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/Linker.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Interactions/Particles/Linker.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(/*! ../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Constants_1 = __webpack_require__(/*! ../../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Linker = (function () {
    function Linker() {
    }
    Linker.link = function (p1, container) {
        var _a;
        var optOpacity = p1.particlesOptions.lineLinked.opacity;
        var optDistance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
        var pos = {
            x: p1.position.x + p1.offset.x,
            y: p1.position.y + p1.offset.y,
        };
        for (var _i = 0, _b = container.particles.spatialGrid.queryRadiusWithDistance(pos, optDistance); _i < _b.length; _i++) {
            var p2 = _b[_i];
            if (p1 === p2.particle || !p2.particle.particlesOptions.lineLinked.enable) {
                continue;
            }
            var opacityLine = optOpacity - (p2.distance * optOpacity) / optDistance;
            if (opacityLine > 0) {
                if (!container.particles.lineLinkedColor) {
                    var optColor = p1.particlesOptions.lineLinked.color;
                    var color = typeof optColor === "string" ? optColor : optColor.value;
                    if (color === Constants_1.Constants.randomColorValue) {
                        if (p1.particlesOptions.lineLinked.consent) {
                            container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.colorToRgb({ value: color });
                        }
                        else if (p1.particlesOptions.lineLinked.blink) {
                            container.particles.lineLinkedColor = Constants_1.Constants.randomColorValue;
                        }
                        else {
                            container.particles.lineLinkedColor = Constants_1.Constants.midColorValue;
                        }
                    }
                    else {
                        container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.colorToRgb({ value: color });
                    }
                }
                if (p2.particle.links.indexOf(p1) == -1 && p1.links.indexOf(p2.particle) == -1) {
                    p1.links.push(p2.particle);
                    container.canvas.drawLinkedLine(p1, p2.particle, opacityLine);
                }
            }
        }
    };
    return Linker;
}());
exports.Linker = Linker;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Loader.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Loader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Container_1 = __webpack_require__(/*! ./Container */ "./node_modules/tsparticles/dist/Classes/Container.js");
var Constants_1 = __webpack_require__(/*! ./Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var tsParticlesDom = [];
var Loader = (function () {
    function Loader() {
    }
    Loader.dom = function () {
        if (!tsParticlesDom) {
            tsParticlesDom = [];
        }
        return tsParticlesDom;
    };
    Loader.domItem = function (index) {
        var dom = Loader.dom();
        var item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    };
    Loader.loadFromArray = function (tagId, params, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader.load(tagId, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.setFromArray = function (id, domContainer, params, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader.set(id, domContainer, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.load = function (tagId, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var domContainer;
            return tslib_1.__generator(this, function (_a) {
                domContainer = document.getElementById(tagId);
                if (!domContainer) {
                    return [2];
                }
                return [2, this.set(tagId, domContainer, params)];
            });
        });
    };
    Loader.set = function (id, domContainer, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dom = Loader.dom();
                        oldIndex = dom.findIndex(function (v) { return v.id === id; });
                        if (oldIndex >= 0) {
                            old = this.domItem(oldIndex);
                            if (old && !old.destroyed) {
                                old.destroy();
                                dom.splice(oldIndex, 1);
                            }
                        }
                        if (domContainer.tagName === "canvas") {
                            canvasEl = domContainer;
                            generatedCanvas = false;
                        }
                        else {
                            existingCanvases = domContainer.getElementsByTagName("canvas");
                            if (existingCanvases.length) {
                                canvasEl = existingCanvases[0];
                                if (!canvasEl.className) {
                                    canvasEl.className = Constants_1.Constants.canvasClass;
                                }
                                generatedCanvas = false;
                            }
                            else {
                                generatedCanvas = true;
                                canvasEl = document.createElement("canvas");
                                canvasEl.className = Constants_1.Constants.canvasClass;
                                canvasEl.style.width = "100%";
                                canvasEl.style.height = "100%";
                                domContainer.appendChild(canvasEl);
                            }
                        }
                        newItem = new Container_1.Container(id, params);
                        if (oldIndex >= 0) {
                            dom.splice(oldIndex, 0, newItem);
                        }
                        else {
                            dom.push(newItem);
                        }
                        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
                        return [4, newItem.start()];
                    case 1:
                        _a.sent();
                        return [2, newItem];
                }
            });
        });
    };
    Loader.loadJSON = function (tagId, jsonUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, params;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.loadFromArray(tagId, params)];
                        }
                        else {
                            return [2, Loader.load(tagId, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setJSON = function (id, domContainer, jsonUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, params;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.setFromArray(id, domContainer, params)];
                        }
                        else {
                            return [2, Loader.set(id, domContainer, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setOnClickHandler = function (callback) {
        var dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
            var domItem = dom_1[_i];
            var el = domItem.interactivity.element;
            if (el) {
                el.addEventListener("click", callback);
            }
        }
    };
    return Loader;
}());
exports.Loader = Loader;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Absorbers/Absorber.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Absorbers/Absorber.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberSize_1 = __webpack_require__(/*! ./AbsorberSize */ "./node_modules/tsparticles/dist/Classes/Options/Absorbers/AbsorberSize.js");
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var Absorber = (function () {
    function Absorber() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.opacity = 1;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    Absorber.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
            if (data.size !== undefined) {
                this.size.load(data.size);
            }
        }
    };
    return Absorber;
}());
exports.Absorber = Absorber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Absorbers/AbsorberRandomSize.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Absorbers/AbsorberRandomSize.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberRandomSize = (function () {
    function AbsorberRandomSize() {
        this.enable = false;
        this.minimumValue = 1;
    }
    AbsorberRandomSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return AbsorberRandomSize;
}());
exports.AbsorberRandomSize = AbsorberRandomSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Absorbers/AbsorberSize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Absorbers/AbsorberSize.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbsorberRandomSize_1 = __webpack_require__(/*! ./AbsorberRandomSize */ "./node_modules/tsparticles/dist/Classes/Options/Absorbers/AbsorberRandomSize.js");
var AbsorberSize = (function () {
    function AbsorberSize() {
        this.density = 5;
        this.random = new AbsorberRandomSize_1.AbsorberRandomSize();
        this.value = 50;
    }
    AbsorberSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.density !== undefined) {
                this.density = data.density;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.load({ enable: data.random });
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.limit !== undefined) {
                this.limit = data.limit;
            }
        }
    };
    return AbsorberSize;
}());
exports.AbsorberSize = AbsorberSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Background/Background.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Background/Background.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var Background = (function () {
    function Background() {
    }
    Background.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.image !== undefined) {
                this.image = data.image;
            }
            if (data.position !== undefined) {
                this.position = data.position;
            }
            if (data.repeat !== undefined) {
                this.repeat = data.repeat;
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return Background;
}());
exports.Background = Background;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMask.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMask.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundMaskCover_1 = __webpack_require__(/*! ./BackgroundMaskCover */ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMaskCover.js");
var BackgroundMask = (function () {
    function BackgroundMask() {
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    BackgroundMask.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                var cover = data.cover;
                var color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
                this.cover.load(cover.color !== undefined ? cover : { color: color });
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return BackgroundMask;
}());
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMaskCover.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMaskCover.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var BackgroundMaskCover = (function () {
    function BackgroundMaskCover() {
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
    }
    BackgroundMaskCover.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return BackgroundMaskCover;
}());
exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Emitters/Emitter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Emitters/Emitter.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection_1 = __webpack_require__(/*! ../../../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var EmitterRate_1 = __webpack_require__(/*! ./EmitterRate */ "./node_modules/tsparticles/dist/Classes/Options/Emitters/EmitterRate.js");
var EmitterLife_1 = __webpack_require__(/*! ./EmitterLife */ "./node_modules/tsparticles/dist/Classes/Options/Emitters/EmitterLife.js");
var Utils_1 = __webpack_require__(/*! ../../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Emitter = (function () {
    function Emitter() {
        this.direction = MoveDirection_1.MoveDirection.none;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
    }
    Emitter.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.size !== undefined) {
                this.size = {
                    height: data.size.height,
                    width: data.size.width,
                };
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            this.life.load(data.life);
            if (data.particles !== undefined) {
                this.particles = Utils_1.Utils.deepExtend({}, data.particles);
            }
            this.rate.load(data.rate);
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Emitters/EmitterLife.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Emitters/EmitterLife.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmitterLife = (function () {
    function EmitterLife() {
    }
    EmitterLife.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.count !== undefined) {
                this.count = data.count;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
        }
    };
    return EmitterLife;
}());
exports.EmitterLife = EmitterLife;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Emitters/EmitterRate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Emitters/EmitterRate.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmitterRate = (function () {
    function EmitterRate() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    EmitterRate.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.quantity !== undefined) {
                this.quantity = data.quantity;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
        }
    };
    return EmitterRate;
}());
exports.EmitterRate = EmitterRate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/ClickEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/ClickEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent = (function () {
    function ClickEvent() {
        this.enable = false;
        this.mode = [];
    }
    ClickEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return ClickEvent;
}());
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/DivEvent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/DivEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DivEvent = (function () {
    function DivEvent() {
        this.elementId = "";
        this.enable = false;
        this.mode = [];
    }
    Object.defineProperty(DivEvent.prototype, "el", {
        get: function () {
            return this.elementId;
        },
        set: function (value) {
            this.elementId = value;
        },
        enumerable: true,
        configurable: true
    });
    DivEvent.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;
            if (elementId !== undefined) {
                this.elementId = elementId;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return DivEvent;
}());
exports.DivEvent = DivEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Events.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Events.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/ClickEvent.js");
var DivEvent_1 = __webpack_require__(/*! ./DivEvent */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/DivEvent.js");
var HoverEvent_1 = __webpack_require__(/*! ./HoverEvent */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/HoverEvent.js");
var Events = (function () {
    function Events() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
    }
    Object.defineProperty(Events.prototype, "onclick", {
        get: function () {
            return this.onClick;
        },
        set: function (value) {
            this.onClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "ondiv", {
        get: function () {
            return this.onDiv;
        },
        set: function (value) {
            this.onDiv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "onhover", {
        get: function () {
            return this.onHover;
        },
        set: function (value) {
            this.onHover = value;
        },
        enumerable: true,
        configurable: true
    });
    Events.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
            this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
            this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
            if (data.resize !== undefined) {
                this.resize = data.resize;
            }
        }
    };
    return Events;
}());
exports.Events = Events;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/HoverEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/HoverEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parallax_1 = __webpack_require__(/*! ./Parallax */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Parallax.js");
var HoverEvent = (function () {
    function HoverEvent() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    HoverEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            this.parallax.load(data.parallax);
        }
    };
    return HoverEvent;
}());
exports.HoverEvent = HoverEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Parallax.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Parallax.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parallax = (function () {
    function Parallax() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    Parallax.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.force !== undefined) {
                this.force = data.force;
            }
            if (data.smooth !== undefined) {
                this.smooth = data.smooth;
            }
        }
    };
    return Parallax;
}());
exports.Parallax = Parallax;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Interactivity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Interactivity.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InteractivityDetect_1 = __webpack_require__(/*! ../../../Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js");
var Events_1 = __webpack_require__(/*! ./Events/Events */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Events.js");
var Modes_1 = __webpack_require__(/*! ./Modes/Modes */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Modes.js");
var HoverMode_1 = __webpack_require__(/*! ../../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Interactivity = (function () {
    function Interactivity() {
        this.detectsOn = InteractivityDetect_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    Object.defineProperty(Interactivity.prototype, "detect_on", {
        get: function () {
            return this.detectsOn;
        },
        set: function (value) {
            this.detectsOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Interactivity.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
            if (detectsOn !== undefined) {
                this.detectsOn = detectsOn;
            }
            this.events.load(data.events);
            this.modes.load(data.modes);
            if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
                if (this.events.onHover.mode instanceof Array) {
                    if (this.events.onHover.mode.indexOf(HoverMode_1.HoverMode.slow) < 0) {
                        this.events.onHover.mode.push(HoverMode_1.HoverMode.slow);
                    }
                }
                else if (this.events.onHover.mode !== HoverMode_1.HoverMode.slow) {
                    this.events.onHover.mode = [this.events.onHover.mode, HoverMode_1.HoverMode.slow];
                }
            }
        }
    };
    return Interactivity;
}());
exports.Interactivity = Interactivity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Bubble.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Bubble.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var Bubble = (function () {
    function Bubble() {
        this.distance = 200;
        this.duration = 0.4;
    }
    Bubble.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map(function (s) { return OptionsColor_1.OptionsColor.create(undefined, s); });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new OptionsColor_1.OptionsColor();
                    }
                    this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
                }
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
        }
    };
    return Bubble;
}());
exports.Bubble = Bubble;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Connect.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Connect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked_1 = __webpack_require__(/*! ./ConnectLineLinked */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/ConnectLineLinked.js");
var Connect = (function () {
    function Connect() {
        this.distance = 80;
        this.lineLinked = new ConnectLineLinked_1.ConnectLineLinked();
        this.radius = 60;
    }
    Object.defineProperty(Connect.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Connect.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Connect;
}());
exports.Connect = Connect;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/ConnectLineLinked.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/ConnectLineLinked.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked = (function () {
    function ConnectLineLinked() {
        this.opacity = 0.5;
    }
    ConnectLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return ConnectLineLinked;
}());
exports.ConnectLineLinked = ConnectLineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Grab.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Grab.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked_1 = __webpack_require__(/*! ./GrabLineLinked */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/GrabLineLinked.js");
var Grab = (function () {
    function Grab() {
        this.distance = 100;
        this.lineLinked = new GrabLineLinked_1.GrabLineLinked();
    }
    Object.defineProperty(Grab.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Grab.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
        }
    };
    return Grab;
}());
exports.Grab = Grab;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/GrabLineLinked.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/GrabLineLinked.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked = (function () {
    function GrabLineLinked() {
        this.opacity = 1;
    }
    GrabLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return GrabLineLinked;
}());
exports.GrabLineLinked = GrabLineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Modes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Modes.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bubble_1 = __webpack_require__(/*! ./Bubble */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Bubble.js");
var Connect_1 = __webpack_require__(/*! ./Connect */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Connect.js");
var Grab_1 = __webpack_require__(/*! ./Grab */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Grab.js");
var Remove_1 = __webpack_require__(/*! ./Remove */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Remove.js");
var Push_1 = __webpack_require__(/*! ./Push */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Push.js");
var Repulse_1 = __webpack_require__(/*! ./Repulse */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Repulse.js");
var Slow_1 = __webpack_require__(/*! ./Slow */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Slow.js");
var Emitter_1 = __webpack_require__(/*! ../../Emitters/Emitter */ "./node_modules/tsparticles/dist/Classes/Options/Emitters/Emitter.js");
var Absorber_1 = __webpack_require__(/*! ../../Absorbers/Absorber */ "./node_modules/tsparticles/dist/Classes/Options/Absorbers/Absorber.js");
var Modes = (function () {
    function Modes() {
        this.absorbers = [];
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.emitters = [];
        this.grab = new Grab_1.Grab();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
    }
    Modes.prototype.load = function (data) {
        if (data !== undefined) {
            this.bubble.load(data.bubble);
            this.connect.load(data.connect);
            this.grab.load(data.grab);
            this.push.load(data.push);
            this.remove.load(data.remove);
            this.repulse.load(data.repulse);
            this.slow.load(data.slow);
            if (data.emitters !== undefined) {
                if (data.emitters instanceof Array) {
                    this.emitters = data.emitters.map(function (s) {
                        var tmp = new Emitter_1.Emitter();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.emitters instanceof Array) {
                        this.emitters = new Emitter_1.Emitter();
                    }
                    this.emitters.load(data.emitters);
                }
            }
            if (data.absorbers !== undefined) {
                if (data.absorbers instanceof Array) {
                    this.absorbers = data.absorbers.map(function (s) {
                        var tmp = new Absorber_1.Absorber();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.absorbers instanceof Array) {
                        this.absorbers = new Absorber_1.Absorber();
                    }
                    this.absorbers.load(data.absorbers);
                }
            }
        }
    };
    return Modes;
}());
exports.Modes = Modes;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Push.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Push.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Push = (function () {
    function Push() {
        this.quantity = 4;
    }
    Object.defineProperty(Push.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Push.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Push;
}());
exports.Push = Push;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Remove.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Remove.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Remove = (function () {
    function Remove() {
        this.quantity = 2;
    }
    Object.defineProperty(Remove.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Remove.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Remove;
}());
exports.Remove = Remove;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Repulse.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Repulse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Repulse = (function () {
    function Repulse() {
        this.distance = 200;
        this.duration = 0.4;
        this.speed = 1;
    }
    Repulse.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
        }
    };
    return Repulse;
}());
exports.Repulse = Repulse;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Slow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Slow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Slow = (function () {
    function Slow() {
        this.factor = 3;
        this.radius = 200;
    }
    Object.defineProperty(Slow.prototype, "active", {
        get: function () {
            return false;
        },
        set: function (_value) {
        },
        enumerable: true,
        configurable: true
    });
    Slow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Slow;
}());
exports.Slow = Slow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Interactivity_1 = __webpack_require__(/*! ./Interactivity/Interactivity */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Interactivity.js");
var Particles_1 = __webpack_require__(/*! ./Particles/Particles */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Particles.js");
var PolygonMask_1 = __webpack_require__(/*! ./PolygonMask/PolygonMask */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMask.js");
var BackgroundMask_1 = __webpack_require__(/*! ./BackgroundMask/BackgroundMask */ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMask.js");
var Presets_1 = __webpack_require__(/*! ../Utils/Presets */ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js");
var Background_1 = __webpack_require__(/*! ./Background/Background */ "./node_modules/tsparticles/dist/Classes/Options/Background/Background.js");
var Emitter_1 = __webpack_require__(/*! ./Emitters/Emitter */ "./node_modules/tsparticles/dist/Classes/Options/Emitters/Emitter.js");
var Absorber_1 = __webpack_require__(/*! ./Absorbers/Absorber */ "./node_modules/tsparticles/dist/Classes/Options/Absorbers/Absorber.js");
var Options = (function () {
    function Options() {
        this.absorbers = [];
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.detectRetina = false;
        this.emitters = [];
        this.fpsLimit = 30;
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.pauseOnBlur = true;
        this.polygon = new PolygonMask_1.PolygonMask();
    }
    Object.defineProperty(Options.prototype, "fps_limit", {
        get: function () {
            return this.fpsLimit;
        },
        set: function (value) {
            this.fpsLimit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Options.prototype, "retina_detect", {
        get: function () {
            return this.detectRetina;
        },
        set: function (value) {
            this.detectRetina = value;
        },
        enumerable: true,
        configurable: true
    });
    Options.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.preset !== undefined) {
                if (data.preset instanceof Array) {
                    for (var _i = 0, _c = data.preset; _i < _c.length; _i++) {
                        var preset = _c[_i];
                        this.importPreset(preset);
                    }
                }
                else {
                    this.importPreset(data.preset);
                }
            }
            if (data.background !== undefined) {
                this.background.load(data.background);
            }
            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
            if (detectRetina !== undefined) {
                this.detectRetina = detectRetina;
            }
            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
            if (fpsLimit !== undefined) {
                this.fpsLimit = fpsLimit;
            }
            if (data.pauseOnBlur !== undefined) {
                this.pauseOnBlur = data.pauseOnBlur;
            }
            this.particles.load(data.particles);
            this.interactivity.load(data.interactivity);
            this.polygon.load(data.polygon);
            this.backgroundMask.load(data.backgroundMask);
            if (data.emitters !== undefined) {
                if (data.emitters instanceof Array) {
                    this.emitters = data.emitters.map(function (s) {
                        var tmp = new Emitter_1.Emitter();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.emitters instanceof Array) {
                        this.emitters = new Emitter_1.Emitter();
                    }
                    this.emitters.load(data.emitters);
                }
            }
            if (data.absorbers !== undefined) {
                if (data.absorbers instanceof Array) {
                    this.absorbers = data.absorbers.map(function (s) {
                        var tmp = new Absorber_1.Absorber();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.absorbers instanceof Array) {
                        this.absorbers = new Absorber_1.Absorber();
                    }
                    this.absorbers.load(data.absorbers);
                }
            }
        }
    };
    Options.prototype.importPreset = function (preset) {
        var presetOptions = Presets_1.Presets.getPreset(preset);
        if (presetOptions !== undefined) {
            this.load(presetOptions);
        }
    };
    return Options;
}());
exports.Options = Options;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Attract.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Attract.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attract = (function () {
    function Attract() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    Object.defineProperty(Attract.prototype, "rotateX", {
        get: function () {
            return this.rotate.x;
        },
        set: function (value) {
            this.rotate.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attract.prototype, "rotateY", {
        get: function () {
            return this.rotate.y;
        },
        set: function (value) {
            this.rotate.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Attract.prototype.load = function (data) {
        var _a, _b, _c, _d;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
            if (rotateX !== undefined) {
                this.rotate.x = rotateX;
            }
            var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
            if (rotateY !== undefined) {
                this.rotate.y = rotateY;
            }
        }
    };
    return Attract;
}());
exports.Attract = Attract;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Collisions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Collisions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollisionMode_1 = __webpack_require__(/*! ../../../Enums/CollisionMode */ "./node_modules/tsparticles/dist/Enums/CollisionMode.js");
var Collisions = (function () {
    function Collisions() {
        this.enable = false;
        this.mode = CollisionMode_1.CollisionMode.bounce;
    }
    Collisions.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return Collisions;
}());
exports.Collisions = Collisions;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Density.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Density.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Density = (function () {
    function Density() {
        this.enable = false;
        this.area = 800;
    }
    Object.defineProperty(Density.prototype, "value_area", {
        get: function () {
            return this.area;
        },
        set: function (value) {
            this.area = value;
        },
        enumerable: true,
        configurable: true
    });
    Density.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
            if (area !== undefined) {
                this.area = area;
            }
        }
    };
    return Density;
}());
exports.Density = Density;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked/LineLinked.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked/LineLinked.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LineLinkedShadow_1 = __webpack_require__(/*! ./LineLinkedShadow */ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked/LineLinkedShadow.js");
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var LineLinked = (function () {
    function LineLinked() {
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LineLinkedShadow_1.LineLinkedShadow();
        this.width = 1;
    }
    LineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blink !== undefined) {
                this.blink = data.blink;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.consent !== undefined) {
                this.consent = data.consent;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            this.shadow.load(data.shadow);
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return LineLinked;
}());
exports.LineLinked = LineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked/LineLinkedShadow.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked/LineLinkedShadow.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var LineLinkedShadow = (function () {
    function LineLinkedShadow() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "lime";
    }
    LineLinkedShadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return LineLinkedShadow;
}());
exports.LineLinkedShadow = LineLinkedShadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Move.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Move.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attract_1 = __webpack_require__(/*! ./Attract */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Attract.js");
var MoveDirection_1 = __webpack_require__(/*! ../../../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var OutMode_1 = __webpack_require__(/*! ../../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Trail_1 = __webpack_require__(/*! ./Trail */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Trail.js");
var Move = (function () {
    function Move() {
        this.attract = new Attract_1.Attract();
        this.direction = MoveDirection_1.MoveDirection.none;
        this.enable = false;
        this.outMode = OutMode_1.OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail_1.Trail();
    }
    Object.defineProperty(Move.prototype, "collisions", {
        get: function () {
            return false;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "bounce", {
        get: function () {
            return this.collisions;
        },
        set: function (value) {
            this.collisions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "out_mode", {
        get: function () {
            return this.outMode;
        },
        set: function (value) {
            this.outMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Move.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.attract.load(data.attract);
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
            if (outMode !== undefined) {
                this.outMode = outMode;
            }
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.straight !== undefined) {
                this.straight = data.straight;
            }
            this.trail.load(data.trail);
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/Opacity.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/Opacity.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimation_1 = __webpack_require__(/*! ./OpacityAnimation */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/OpacityAnimation.js");
var OpacityRandom_1 = __webpack_require__(/*! ./OpacityRandom */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/OpacityRandom.js");
var Opacity = (function () {
    function Opacity() {
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random = new OpacityRandom_1.OpacityRandom();
        this.value = 1;
    }
    Object.defineProperty(Opacity.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Opacity.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Opacity;
}());
exports.Opacity = Opacity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/OpacityAnimation.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/OpacityAnimation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimation = (function () {
    function OpacityAnimation() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 2;
        this.sync = false;
    }
    Object.defineProperty(OpacityAnimation.prototype, "opacity_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: true,
        configurable: true
    });
    OpacityAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return OpacityAnimation;
}());
exports.OpacityAnimation = OpacityAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/OpacityRandom.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/OpacityRandom.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityRandom = (function () {
    function OpacityRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    OpacityRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return OpacityRandom;
}());
exports.OpacityRandom = OpacityRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor = (function () {
    function OptionsColor() {
        this.value = "#fff";
    }
    OptionsColor.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    OptionsColor.create = function (source, data) {
        var color = source !== null && source !== void 0 ? source : new OptionsColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    };
    return OptionsColor;
}());
exports.OptionsColor = OptionsColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Particles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Particles.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var LineLinked_1 = __webpack_require__(/*! ./LineLinked/LineLinked */ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked/LineLinked.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Move.js");
var ParticlesNumber_1 = __webpack_require__(/*! ./ParticlesNumber */ "./node_modules/tsparticles/dist/Classes/Options/Particles/ParticlesNumber.js");
var Opacity_1 = __webpack_require__(/*! ./Opacity/Opacity */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity/Opacity.js");
var Shape_1 = __webpack_require__(/*! ./Shape/Shape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/Shape.js");
var Size_1 = __webpack_require__(/*! ./Size/Size */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size/Size.js");
var Rotate_1 = __webpack_require__(/*! ./Rotate/Rotate */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate/Rotate.js");
var Shadow_1 = __webpack_require__(/*! ./Shadow */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shadow.js");
var Stroke_1 = __webpack_require__(/*! ./Stroke */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Stroke.js");
var Collisions_1 = __webpack_require__(/*! ./Collisions */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Collisions.js");
var Twinkle_1 = __webpack_require__(/*! ./Twinkle/Twinkle */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Twinkle/Twinkle.js");
var Particles = (function () {
    function Particles() {
        this.collisions = new Collisions_1.Collisions();
        this.color = new OptionsColor_1.OptionsColor();
        this.lineLinked = new LineLinked_1.LineLinked();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.twinkle = new Twinkle_1.Twinkle();
    }
    Object.defineProperty(Particles.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.load = function (data) {
        var _a, _b, _c, _d, _e, _f;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map(function (s) { return OptionsColor_1.OptionsColor.create(undefined, s); });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new OptionsColor_1.OptionsColor();
                    }
                    this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
                }
            }
            var lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
            if (lineLinked !== undefined) {
                this.lineLinked.load(lineLinked);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            this.twinkle.load(data.twinkle);
            var collisions = (_c = (_b = data.move) === null || _b === void 0 ? void 0 : _b.collisions) !== null && _c !== void 0 ? _c : (_d = data.move) === null || _d === void 0 ? void 0 : _d.bounce;
            if (collisions !== undefined) {
                this.collisions.enable = collisions;
            }
            this.collisions.load(data.collisions);
            var strokeToLoad = (_e = data.stroke) !== null && _e !== void 0 ? _e : (_f = data.shape) === null || _f === void 0 ? void 0 : _f.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map(function (s) {
                        var tmp = new Stroke_1.Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.stroke instanceof Array) {
                        this.stroke = new Stroke_1.Stroke();
                    }
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/ParticlesNumber.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/ParticlesNumber.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Density_1 = __webpack_require__(/*! ./Density */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Density.js");
var ParticlesNumber = (function () {
    function ParticlesNumber() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    Object.defineProperty(ParticlesNumber.prototype, "max", {
        get: function () {
            return this.limit;
        },
        set: function (value) {
            this.limit = value;
        },
        enumerable: true,
        configurable: true
    });
    ParticlesNumber.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.density.load(data.density);
            var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
            if (limit !== undefined) {
                this.limit = limit;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return ParticlesNumber;
}());
exports.ParticlesNumber = ParticlesNumber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate/Rotate.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate/Rotate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateAnimation_1 = __webpack_require__(/*! ./RotateAnimation */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate/RotateAnimation.js");
var RotateDirection_1 = __webpack_require__(/*! ../../../../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var Rotate = (function () {
    function Rotate() {
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = RotateDirection_1.RotateDirection.clockwise;
        this.random = false;
        this.value = 0;
    }
    Rotate.prototype.load = function (data) {
        if (data !== undefined) {
            this.animation.load(data.animation);
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Rotate;
}());
exports.Rotate = Rotate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate/RotateAnimation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate/RotateAnimation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateAnimation = (function () {
    function RotateAnimation() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    RotateAnimation.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return RotateAnimation;
}());
exports.RotateAnimation = RotateAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shadow.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shadow.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var Shadow = (function () {
    function Shadow() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
    }
    Shadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.offset !== undefined) {
                if (data.offset.x !== undefined) {
                    this.offset.x = data.offset.x;
                }
                if (data.offset.y !== undefined) {
                    this.offset.y = data.offset.y;
                }
            }
        }
    };
    return Shadow;
}());
exports.Shadow = Shadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/CharacterShape.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/CharacterShape.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ShapeBase.js");
var CharacterShape = (function (_super) {
    tslib_1.__extends(CharacterShape, _super);
    function CharacterShape() {
        var _this = _super.call(this) || this;
        _this.font = "Verdana";
        _this.style = "";
        _this.value = "*";
        _this.weight = "400";
        return _this;
    }
    CharacterShape.prototype.load = function (data) {
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.font !== undefined) {
                this.font = data.font;
            }
            if (data.style !== undefined) {
                this.style = data.style;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.weight !== undefined) {
                this.weight = data.weight;
            }
        }
    };
    return CharacterShape;
}(ShapeBase_1.ShapeBase));
exports.CharacterShape = CharacterShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ImageShape.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ImageShape.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ShapeBase.js");
var ImageShape = (function (_super) {
    tslib_1.__extends(ImageShape, _super);
    function ImageShape() {
        var _this = _super.call(this) || this;
        _this.height = 100;
        _this.replaceColor = true;
        _this.src = "";
        _this.width = 100;
        return _this;
    }
    Object.defineProperty(ImageShape.prototype, "replace_color", {
        get: function () {
            return this.replaceColor;
        },
        set: function (value) {
            this.replaceColor = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.height !== undefined) {
                this.height = data.height;
            }
            var replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;
            if (replaceColor !== undefined) {
                this.replaceColor = replaceColor;
            }
            if (data.src !== undefined) {
                this.src = data.src;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return ImageShape;
}(ShapeBase_1.ShapeBase));
exports.ImageShape = ImageShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/PolygonShape.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/PolygonShape.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ShapeBase.js");
var PolygonShape = (function (_super) {
    tslib_1.__extends(PolygonShape, _super);
    function PolygonShape() {
        var _this = _super.call(this) || this;
        _this.sides = 5;
        return _this;
    }
    Object.defineProperty(PolygonShape.prototype, "nb_sides", {
        get: function () {
            return this.sides;
        },
        set: function (value) {
            this.sides = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            var sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
            if (sides !== undefined) {
                this.sides = sides;
            }
        }
    };
    return PolygonShape;
}(ShapeBase_1.ShapeBase));
exports.PolygonShape = PolygonShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/Shape.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/Shape.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = __webpack_require__(/*! ../../../../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var ImageShape_1 = __webpack_require__(/*! ./ImageShape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ImageShape.js");
var PolygonShape_1 = __webpack_require__(/*! ./PolygonShape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/PolygonShape.js");
var CharacterShape_1 = __webpack_require__(/*! ./CharacterShape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/CharacterShape.js");
var Utils_1 = __webpack_require__(/*! ../../../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Shape = (function () {
    function Shape() {
        this.options = {};
        this.character = new CharacterShape_1.CharacterShape();
        this.image = new ImageShape_1.ImageShape();
        this.polygon = new PolygonShape_1.PolygonShape();
        this.type = ShapeType_1.ShapeType.circle;
    }
    Object.defineProperty(Shape.prototype, "custom", {
        get: function () {
            return this.options;
        },
        set: function (value) {
            this.options = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "images", {
        get: function () {
            return this.image instanceof Array ? this.image : [this.image];
        },
        set: function (value) {
            this.image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return [];
        },
        set: function (_value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "character", {
        get: function () {
            var _a;
            return ((_a = this.options[ShapeType_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.char]);
        },
        set: function (value) {
            this.options[ShapeType_1.ShapeType.character] = value;
            this.options[ShapeType_1.ShapeType.char] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "polygon", {
        get: function () {
            var _a;
            return ((_a = this.options[ShapeType_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.star]);
        },
        set: function (value) {
            this.options[ShapeType_1.ShapeType.polygon] = value;
            this.options[ShapeType_1.ShapeType.star] = value;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.load = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (data !== undefined) {
            var options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
            if (options !== undefined) {
                for (var shape in options) {
                    var item = options[shape];
                    if (item !== undefined) {
                        this.options[shape] = Utils_1.Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
                    }
                }
            }
            if (data.character !== undefined) {
                var item = data.character;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[ShapeType_1.ShapeType.character] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend((_c = this.options[ShapeType_1.ShapeType.character]) !== null && _c !== void 0 ? _c : [], item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend((_d = this.options[ShapeType_1.ShapeType.char]) !== null && _d !== void 0 ? _d : [], item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend([], item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend([], item);
                        }
                    }
                    else {
                        if (this.options[ShapeType_1.ShapeType.character] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend({}, item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend({}, item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend((_e = this.options[ShapeType_1.ShapeType.character]) !== null && _e !== void 0 ? _e : [], item);
                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend((_f = this.options[ShapeType_1.ShapeType.char]) !== null && _f !== void 0 ? _f : [], item);
                        }
                    }
                }
            }
            if (data.polygon !== undefined) {
                var item = data.polygon;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[ShapeType_1.ShapeType.polygon] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_g = this.options[ShapeType_1.ShapeType.polygon]) !== null && _g !== void 0 ? _g : [], item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend((_h = this.options[ShapeType_1.ShapeType.star]) !== null && _h !== void 0 ? _h : [], item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend([], item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend([], item);
                        }
                    }
                    else {
                        if (this.options[ShapeType_1.ShapeType.polygon] instanceof Array) {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend({}, item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend({}, item);
                        }
                        else {
                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_j = this.options[ShapeType_1.ShapeType.polygon]) !== null && _j !== void 0 ? _j : [], item);
                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend((_k = this.options[ShapeType_1.ShapeType.star]) !== null && _k !== void 0 ? _k : [], item);
                        }
                    }
                }
            }
            if (data.image !== undefined) {
                if (data.image instanceof Array) {
                    this.image = data.image.map(function (s) {
                        var tmp = new ImageShape_1.ImageShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.image instanceof Array) {
                        this.image = new ImageShape_1.ImageShape();
                    }
                    this.image.load(data.image);
                }
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Shape;
}());
exports.Shape = Shape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ShapeBase.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ShapeBase.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeBase = (function () {
    function ShapeBase() {
        this.fill = true;
        this.close = true;
    }
    ShapeBase.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.particles !== undefined) {
                this.particles = data.particles;
            }
        }
    };
    return ShapeBase;
}());
exports.ShapeBase = ShapeBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size/Size.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Size/Size.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeAnimation_1 = __webpack_require__(/*! ./SizeAnimation */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size/SizeAnimation.js");
var SizeRandom_1 = __webpack_require__(/*! ./SizeRandom */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size/SizeRandom.js");
var Size = (function () {
    function Size() {
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random = new SizeRandom_1.SizeRandom();
        this.value = 3;
    }
    Object.defineProperty(Size.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Size.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
            if (animation !== undefined) {
                this.animation.load(animation);
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Size;
}());
exports.Size = Size;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size/SizeAnimation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Size/SizeAnimation.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeAnimation = (function () {
    function SizeAnimation() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 5;
        this.sync = false;
    }
    Object.defineProperty(SizeAnimation.prototype, "size_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SizeAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return SizeAnimation;
}());
exports.SizeAnimation = SizeAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size/SizeRandom.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Size/SizeRandom.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeRandom = (function () {
    function SizeRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    SizeRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return SizeRandom;
}());
exports.SizeRandom = SizeRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Stroke.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Stroke.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var Stroke = (function () {
    function Stroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    Stroke.prototype.load = function (data) {
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.width !== undefined) {
                this.width = data.width;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return Stroke;
}());
exports.Stroke = Stroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Trail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Trail.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ./OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var Trail = (function () {
    function Trail() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
    }
    Trail.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
            if (data.length !== undefined) {
                this.length = data.length;
            }
        }
    };
    return Trail;
}());
exports.Trail = Trail;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Twinkle/Twinkle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Twinkle/Twinkle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TwinkleValues_1 = __webpack_require__(/*! ./TwinkleValues */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Twinkle/TwinkleValues.js");
var Twinkle = (function () {
    function Twinkle() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    Twinkle.prototype.load = function (data) {
        if (data !== undefined) {
            this.lines.load(data.lines);
            this.particles.load(data.particles);
        }
    };
    return Twinkle;
}());
exports.Twinkle = Twinkle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Twinkle/TwinkleValues.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Twinkle/TwinkleValues.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var TwinkleValues = (function () {
    function TwinkleValues() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    TwinkleValues.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.frequency !== undefined) {
                this.frequency = data.frequency;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return TwinkleValues;
}());
exports.TwinkleValues = TwinkleValues;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Draw.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Draw.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskDrawStroke_1 = __webpack_require__(/*! ./PolygonMaskDrawStroke */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMaskDrawStroke.js");
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var Draw = (function () {
    function Draw() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke_1.PolygonMaskDrawStroke();
    }
    Object.defineProperty(Draw.prototype, "lineWidth", {
        get: function () {
            return this.stroke.width;
        },
        set: function (value) {
            this.stroke.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draw.prototype, "lineColor", {
        get: function () {
            return this.stroke.color;
        },
        set: function (value) {
            this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
        },
        enumerable: true,
        configurable: true
    });
    Draw.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth,
            };
            this.stroke.load(stroke);
        }
    };
    return Draw;
}());
exports.Draw = Draw;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Move.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Move.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskMoveType_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js");
var Move = (function () {
    function Move() {
        this.radius = 10;
        this.type = PolygonMaskMoveType_1.PolygonMaskMoveType.path;
    }
    Move.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonInline.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonInline.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var PolygonInline = (function () {
    function PolygonInline() {
        this.arrangement = PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint;
    }
    PolygonInline.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    };
    return PolygonInline;
}());
exports.PolygonInline = PolygonInline;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMask.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMask.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Draw_1 = __webpack_require__(/*! ./Draw */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Draw.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Move.js");
var PolygonInline_1 = __webpack_require__(/*! ./PolygonInline */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonInline.js");
var PolygonMask = (function () {
    function PolygonMask() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new PolygonInline_1.PolygonInline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = PolygonMaskType_1.PolygonMaskType.none;
        this.url = "";
    }
    Object.defineProperty(PolygonMask.prototype, "inlineArrangement", {
        get: function () {
            return this.inline.arrangement;
        },
        set: function (value) {
            this.inline.arrangement = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonMask.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== PolygonMaskType_1.PolygonMaskType.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMaskDrawStroke.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMaskDrawStroke.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = __webpack_require__(/*! ../Particles/OptionsColor */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OptionsColor.js");
var ColorUtils_1 = __webpack_require__(/*! ../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var PolygonMaskDrawStroke = (function () {
    function PolygonMaskDrawStroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    PolygonMaskDrawStroke.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = ColorUtils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return PolygonMaskDrawStroke;
}());
exports.PolygonMaskDrawStroke = PolygonMaskDrawStroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = __webpack_require__(/*! ../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var Updater_1 = __webpack_require__(/*! ./Particle/Updater */ "./node_modules/tsparticles/dist/Classes/Particle/Updater.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var RotateDirection_1 = __webpack_require__(/*! ../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var ColorUtils_1 = __webpack_require__(/*! ./Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Particles_1 = __webpack_require__(/*! ./Options/Particles/Particles */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Particles.js");
var SizeAnimationStatus_1 = __webpack_require__(/*! ../Enums/SizeAnimationStatus */ "./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js");
var OpacityAnimationStatus_1 = __webpack_require__(/*! ../Enums/OpacityAnimationStatus */ "./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js");
var Shape_1 = __webpack_require__(/*! ./Options/Particles/Shape/Shape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/Shape.js");
var Particle = (function () {
    function Particle(container, position, emitter) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        this.container = container;
        this.emitter = emitter;
        this.fill = true;
        this.close = true;
        this.links = [];
        var options = container.options;
        var particlesOptions = new Particles_1.Particles();
        particlesOptions.load(options.particles);
        if (((_b = (_a = emitter === null || emitter === void 0 ? void 0 : emitter.emitterOptions) === null || _a === void 0 ? void 0 : _a.particles) === null || _b === void 0 ? void 0 : _b.shape) !== undefined) {
            var shapeType = emitter.emitterOptions.particles.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeOptions = new Shape_1.Shape();
            shapeOptions.load(emitter.emitterOptions.particles.shape);
            if (this.shape !== undefined) {
                var shapeData = shapeOptions.options[this.shape];
                if (shapeData !== undefined) {
                    this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
                        Utils_1.Utils.itemFromArray(shapeData) :
                        shapeData);
                    this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
                    this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
                }
            }
        }
        else {
            var shapeType = particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeData = particlesOptions.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
                    Utils_1.Utils.itemFromArray(shapeData) :
                    shapeData);
                this.fill = (_h = (_g = this.shapeData) === null || _g === void 0 ? void 0 : _g.fill) !== null && _h !== void 0 ? _h : this.fill;
                this.close = (_k = (_j = this.shapeData) === null || _j === void 0 ? void 0 : _j.close) !== null && _k !== void 0 ? _k : this.close;
            }
        }
        if (((_l = emitter === null || emitter === void 0 ? void 0 : emitter.emitterOptions) === null || _l === void 0 ? void 0 : _l.particles) !== undefined) {
            particlesOptions.load(emitter.emitterOptions.particles);
        }
        particlesOptions.load((_m = this.shapeData) === null || _m === void 0 ? void 0 : _m.particles);
        this.particlesOptions = particlesOptions;
        container.retina.initParticle(this);
        var color = this.particlesOptions.color;
        var sizeValue = ((_o = this.sizeValue) !== null && _o !== void 0 ? _o : container.retina.sizeValue);
        var randomSize = typeof this.particlesOptions.size.random === "boolean" ?
            this.particlesOptions.size.random :
            this.particlesOptions.size.random.enable;
        this.size = {
            value: randomSize && this.randomMinimumSize !== undefined ?
                Utils_1.Utils.randomInRange(this.randomMinimumSize, sizeValue) :
                sizeValue,
        };
        this.direction = emitter ? emitter.emitterOptions.direction : this.particlesOptions.move.direction;
        this.bubble = {};
        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
        if (this.particlesOptions.rotate.direction == RotateDirection_1.RotateDirection.random) {
            var index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = RotateDirection_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = RotateDirection_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = this.particlesOptions.rotate.direction;
        }
        if (this.particlesOptions.size.animation.enable) {
            this.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
            this.size.velocity = ((_p = this.sizeAnimationSpeed) !== null && _p !== void 0 ? _p : container.retina.sizeAnimationSpeed) / 100;
            if (!this.particlesOptions.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (this.particlesOptions.rotate.animation.enable) {
            if (!this.particlesOptions.rotate.animation.sync) {
                this.angle = Math.random() * 360;
            }
        }
        this.position = this.calcPosition(this.container, position);
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            this.initialPosition = {
                x: this.position.x,
                y: this.position.y,
            };
        }
        this.offset = {
            x: 0,
            y: 0,
        };
        if (this.particlesOptions.collisions.enable) {
            this.checkOverlap(position);
        }
        if (color instanceof Array) {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(Utils_1.Utils.itemFromArray(color));
        }
        else {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(color);
        }
        var randomOpacity = this.particlesOptions.opacity.random;
        var opacityValue = this.particlesOptions.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (this.particlesOptions.opacity.animation.enable) {
            this.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
            this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;
            if (!this.particlesOptions.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = this.calculateVelocity();
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical,
        };
        if (this.shape === ShapeType_1.ShapeType.image || this.shape === ShapeType_1.ShapeType.images) {
            var shape = this.particlesOptions.shape;
            var index = Utils_1.Utils.arrayRandomIndex(container.images);
            var image = container.images[index];
            var optionsImage = shape.image instanceof Array ? shape.image[index] : shape.image;
            this.image = {
                data: image,
                ratio: optionsImage.width / optionsImage.height,
                replaceColor: optionsImage.replaceColor,
                src: optionsImage.src,
            };
            if (!this.image.ratio) {
                this.image.ratio = 1;
            }
            this.fill = (_q = optionsImage.fill) !== null && _q !== void 0 ? _q : this.fill;
            this.close = (_r = optionsImage.close) !== null && _r !== void 0 ? _r : this.close;
        }
        this.stroke = this.particlesOptions.stroke instanceof Array ?
            Utils_1.Utils.itemFromArray(this.particlesOptions.stroke) :
            this.particlesOptions.stroke;
        this.strokeColor = typeof this.stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = typeof this.particlesOptions.shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.particlesOptions.shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
        this.updater = new Updater_1.Updater(this.container, this);
    }
    Particle.prototype.update = function (index, delta) {
        this.links = [];
        this.updater.update(delta);
    };
    Particle.prototype.draw = function () {
        this.container.canvas.drawParticle(this);
    };
    Particle.prototype.isOverlapping = function () {
        var container = this.container;
        var p = this;
        var collisionFound = false;
        var iterations = 0;
        for (var _i = 0, _a = container.particles.array.filter(function (t) { return t != p; }); _i < _a.length; _i++) {
            var p2 = _a[_i];
            iterations++;
            var pos1 = {
                x: p.position.x + p.offset.x,
                y: p.position.y + p.offset.y
            };
            var pos2 = {
                x: p2.position.x + p2.offset.x,
                y: p2.position.y + p2.offset.y
            };
            var dist = Utils_1.Utils.getDistanceBetweenCoordinates(pos1, pos2);
            if (dist <= p.size.value + p2.size.value) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations,
        };
    };
    Particle.prototype.checkOverlap = function (position) {
        var container = this.container;
        var p = this;
        var overlapResult = p.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            p.position.x = position ? position.x : Math.random() * container.canvas.size.width;
            p.position.y = position ? position.y : Math.random() * container.canvas.size.height;
            p.checkOverlap();
        }
    };
    Particle.prototype.destroy = function () {
    };
    Particle.prototype.calcPosition = function (container, position) {
        var _a, _b;
        var pos = { x: 0, y: 0 };
        var options = container.options;
        if (options.polygon.enable && ((_b = (_a = container.polygon.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            if (position) {
                pos.x = position.x;
                pos.y = position.y;
            }
            else {
                var randomPoint = container.polygon.randomPointInPolygon();
                pos.x = randomPoint.x;
                pos.y = randomPoint.y;
            }
        }
        else {
            pos.x = position ? position.x : Math.random() * container.canvas.size.width;
            pos.y = position ? position.y : Math.random() * container.canvas.size.height;
            if (pos.x > container.canvas.size.width - this.size.value * 2) {
                pos.x -= this.size.value;
            }
            else if (pos.x < this.size.value * 2) {
                pos.x += this.size.value;
            }
            if (pos.y > container.canvas.size.height - this.size.value * 2) {
                pos.y -= this.size.value;
            }
            else if (pos.y < this.size.value * 2) {
                pos.y += this.size.value;
            }
        }
        return pos;
    };
    Particle.prototype.calculateVelocity = function () {
        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(this);
        var res = {
            horizontal: 0,
            vertical: 0,
        };
        if (this.particlesOptions.move.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (this.particlesOptions.move.random) {
                res.horizontal *= Math.random();
                res.vertical *= Math.random();
            }
        }
        else {
            res.horizontal = baseVelocity.x + Math.random() - 0.5;
            res.vertical = baseVelocity.y + Math.random() - 0.5;
        }
        return res;
    };
    return Particle;
}());
exports.Particle = Particle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Mover.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Mover.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Mover = (function () {
    function Mover(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Mover.prototype.move = function (delta) {
        var _a;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.move.enable) {
            var slowFactor = this.getProximitySpeedFactor();
            var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
            var baseSpeed = (_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed;
            var moveSpeed = baseSpeed / 2 * slowFactor * deltaFactor;
            particle.position.x += particle.velocity.horizontal * moveSpeed;
            particle.position.y += particle.velocity.vertical * moveSpeed;
        }
        this.moveParallax();
    };
    Mover.prototype.moveParallax = function () {
        var container = this.container;
        var options = container.options;
        if (!options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        var particle = this.particle;
        var parallaxForce = options.interactivity.events.onHover.parallax.force;
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var windowDimension = {
            height: window.innerHeight / 2,
            width: window.innerWidth / 2,
        };
        var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        var tmp = {
            x: (mousePos.x - windowDimension.width) * (particle.size.value / parallaxForce),
            y: (mousePos.y - windowDimension.height) * (particle.size.value / parallaxForce),
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    };
    Mover.prototype.getProximitySpeedFactor = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var active = Utils_1.Utils.isInArray(HoverMode_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        var mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        var particlePos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y
        };
        var dist = Utils_1.Utils.getDistanceBetweenCoordinates(mousePos, particlePos);
        var radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        var proximityFactor = (dist / radius) || 0;
        var slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    };
    return Mover;
}());
exports.Mover = Mover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Updater.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Updater.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OutMode_1 = __webpack_require__(/*! ../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Mover_1 = __webpack_require__(/*! ./Mover */ "./node_modules/tsparticles/dist/Classes/Particle/Mover.js");
var RotateDirection_1 = __webpack_require__(/*! ../../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var SizeAnimationStatus_1 = __webpack_require__(/*! ../../Enums/SizeAnimationStatus */ "./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js");
var OpacityAnimationStatus_1 = __webpack_require__(/*! ../../Enums/OpacityAnimationStatus */ "./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js");
var Updater = (function () {
    function Updater(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover_1.Mover(container, particle);
    }
    Updater.checkBounds = function (coordinate, radius, size, velocity, outside) {
        if ((coordinate + radius > size && velocity > 0) ||
            (coordinate - radius < 0 && velocity < 0)) {
            outside();
        }
    };
    Updater.prototype.update = function (delta) {
        this.mover.move(delta);
        this.updateOpacity(delta);
        this.updateSize(delta);
        this.updateAngle(delta);
        this.fixOutOfCanvasPosition();
        this.updateOutMode();
    };
    Updater.prototype.updateOpacity = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.opacity.animation.enable) {
            switch (particle.opacity.status) {
                case OpacityAnimationStatus_1.OpacityAnimationStatus.increasing:
                    if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
                        particle.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.decreasing;
                    }
                    else {
                        particle.opacity.value += (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
                case OpacityAnimationStatus_1.OpacityAnimationStatus.decreasing:
                    if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
                        particle.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
                    }
                    else {
                        particle.opacity.value -= (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    };
    Updater.prototype.updateSize = function (delta) {
        var _a;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.size.animation.enable) {
            switch (particle.size.status) {
                case SizeAnimationStatus_1.SizeAnimationStatus.increasing:
                    if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
                        particle.size.status = SizeAnimationStatus_1.SizeAnimationStatus.decreasing;
                    }
                    else {
                        particle.size.value += (particle.size.velocity || 0) * deltaFactor;
                    }
                    break;
                case SizeAnimationStatus_1.SizeAnimationStatus.decreasing:
                    if (particle.size.value <= particle.particlesOptions.size.animation.minimumValue) {
                        particle.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
                    }
                    else {
                        particle.size.value -= (particle.size.velocity || 0) * deltaFactor;
                    }
            }
            if (particle.size.value < 0) {
                particle.size.value = 0;
            }
        }
    };
    Updater.prototype.updateAngle = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case RotateDirection_1.RotateDirection.clockwise:
                    particle.angle += particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case RotateDirection_1.RotateDirection.counterClockwise:
                default:
                    particle.angle -= particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    };
    Updater.prototype.fixOutOfCanvasPosition = function () {
        var container = this.container;
        var particle = this.particle;
        var outMode = particle.particlesOptions.move.outMode;
        var canvasSize = container.canvas.size;
        var newPos;
        if (outMode === OutMode_1.OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.size.value,
                right: canvasSize.width,
                top: particle.size.value,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: particle.size.value,
                right: canvasSize.width,
                top: -particle.size.value - particle.offset.y,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: particle.size.value,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: -particle.size.value - particle.offset.y,
            };
        }
        if (outMode === OutMode_1.OutMode.destroy) {
            var sizeValue = particle.size.value;
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, sizeValue)) {
                container.particles.remove(particle);
            }
        }
        else {
            var sizeValue = particle.size.value;
            var nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                particle.position.y = Math.random() * canvasSize.height;
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                particle.position.y = Math.random() * canvasSize.height;
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.position.y = newPos.top;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.position.y = newPos.bottom;
            }
        }
    };
    Updater.prototype.updateOutMode = function () {
        var particle = this.particle;
        switch (particle.particlesOptions.move.outMode) {
            case OutMode_1.OutMode.bounce:
            case OutMode_1.OutMode.bounceVertical:
            case OutMode_1.OutMode.bounceHorizontal:
                this.updateBounce();
                break;
        }
    };
    Updater.prototype.updateBounce = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (!container.polygon.checkInsidePolygon(particle.position)) {
                this.polygonBounce();
            }
        }
        else if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            if (particle.initialPosition) {
                var dist = Utils_1.Utils.getDistanceBetweenCoordinates(particle.initialPosition, particle.position);
                if (dist > container.retina.polygonMaskMoveRadius) {
                    this.polygonBounce();
                }
            }
        }
        else {
            var outMode = particle.particlesOptions.move.outMode;
            var x = particle.position.x + particle.offset.x;
            var y = particle.position.y + particle.offset.y;
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal) {
                var size = particle.size.value;
                var velocity = particle.velocity.horizontal;
                Updater.checkBounds(x, size, container.canvas.size.width, velocity, function () {
                    particle.velocity.horizontal *= -1;
                });
            }
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical) {
                var size = particle.size.value;
                var velocity = particle.velocity.vertical;
                Updater.checkBounds(y, size, container.canvas.size.height, velocity, function () {
                    particle.velocity.vertical *= -1;
                });
            }
        }
    };
    Updater.prototype.polygonBounce = function () {
        var particle = this.particle;
        particle.velocity.horizontal = -particle.velocity.horizontal + (particle.velocity.vertical / 2);
        particle.velocity.vertical = -particle.velocity.vertical + (particle.velocity.horizontal / 2);
    };
    return Updater;
}());
exports.Updater = Updater;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particles.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particles.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Classes/Particle.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var InteractionManager_1 = __webpack_require__(/*! ./Interactions/Particles/InteractionManager */ "./node_modules/tsparticles/dist/Classes/Interactions/Particles/InteractionManager.js");
var SpatialGrid_1 = __webpack_require__(/*! ./Utils/SpatialGrid */ "./node_modules/tsparticles/dist/Classes/Utils/SpatialGrid.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Grabber_1 = __webpack_require__(/*! ./Interactions/Mouse/Grabber */ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Grabber.js");
var ClickMode_1 = __webpack_require__(/*! ../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Repulser_1 = __webpack_require__(/*! ./Interactions/Mouse/Repulser */ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Repulser.js");
var DivMode_1 = __webpack_require__(/*! ../Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js");
var Bubbler_1 = __webpack_require__(/*! ./Interactions/Mouse/Bubbler */ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Bubbler.js");
var Connector_1 = __webpack_require__(/*! ./Interactions/Mouse/Connector */ "./node_modules/tsparticles/dist/Classes/Interactions/Mouse/Connector.js");
var Particles = (function () {
    function Particles(container) {
        this.container = container;
        this.array = [];
        this.interactionsEnabled = false;
        this.spatialGrid = new SpatialGrid_1.SpatialGrid(this.container.canvas.size);
    }
    Object.defineProperty(Particles.prototype, "count", {
        get: function () {
            return this.array.length;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline &&
            (options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint ||
                options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint)) {
            container.polygon.drawPointsOnPolygonPath();
        }
        else {
            for (var i = this.array.length; i < options.particles.number.value; i++) {
                this.addParticle(new Particle_1.Particle(container));
            }
        }
        this.interactionsEnabled = options.particles.lineLinked.enable ||
            options.particles.move.attract.enable ||
            options.particles.collisions.enable;
    };
    Particles.prototype.redraw = function () {
        this.clear();
        this.init();
        this.draw(0);
    };
    Particles.prototype.removeAt = function (index, quantity) {
        if (index >= 0 && index <= this.count) {
            for (var _i = 0, _a = this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1); _i < _a.length; _i++) {
                var particle = _a[_i];
                particle.destroy();
            }
        }
    };
    Particles.prototype.remove = function (particle) {
        this.removeAt(this.array.indexOf(particle));
    };
    Particles.prototype.update = function (delta) {
        var container = this.container;
        var options = container.options;
        for (var i = 0; i < this.array.length; i++) {
            var particle = this.array[i];
            Bubbler_1.Bubbler.reset(particle);
            var stillExists = true;
            for (var _i = 0, _a = container.absorbers; _i < _a.length; _i++) {
                var absorber = _a[_i];
                stillExists = absorber.attract(particle);
                if (!stillExists) {
                    break;
                }
            }
            if (!stillExists) {
                continue;
            }
            particle.update(i, delta);
        }
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickMode = options.interactivity.events.onClick.mode;
        var divMode = options.interactivity.events.onDiv.mode;
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.grab, hoverMode)) {
            Grabber_1.Grabber.grab(container);
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode) ||
            Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode) ||
            Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
            Repulser_1.Repulser.repulse(container);
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            Bubbler_1.Bubbler.bubble(container);
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.connect, hoverMode)) {
            Connector_1.Connector.connect(container);
        }
        for (var _b = 0, _c = this.array; _b < _c.length; _b++) {
            var particle = _c[_b];
            if (this.interactionsEnabled) {
                InteractionManager_1.InteractionManager.interact(particle, container);
            }
        }
    };
    Particles.prototype.draw = function (delta) {
        var container = this.container;
        var options = container.options;
        container.canvas.clear();
        this.update(delta);
        this.spatialGrid.setGrid(this.array, this.container.canvas.size);
        if (options.polygon.enable && options.polygon.draw.enable) {
            container.polygon.drawPolygon();
        }
        for (var _i = 0, _a = container.absorbers; _i < _a.length; _i++) {
            var absorber = _a[_i];
            absorber.draw();
        }
        for (var _b = 0, _c = this.array; _b < _c.length; _b++) {
            var p = _c[_b];
            p.draw();
        }
    };
    Particles.prototype.clear = function () {
        this.array = [];
    };
    Particles.prototype.push = function (nb, mousePosition) {
        var _a;
        var container = this.container;
        var options = container.options;
        this.pushing = true;
        if (options.particles.number.limit > 0) {
            if ((this.array.length + nb) > options.particles.number.limit) {
                this.removeQuantity((this.array.length + nb) - options.particles.number.limit);
            }
        }
        var pos;
        if (mousePosition) {
            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        }
        for (var i = 0; i < nb; i++) {
            this.addParticle(new Particle_1.Particle(container, pos));
        }
        if (!options.particles.move.enable) {
            this.container.play();
        }
        this.pushing = false;
    };
    Particles.prototype.addParticle = function (particle) {
        this.array.push(particle);
    };
    Particles.prototype.removeQuantity = function (quantity) {
        var container = this.container;
        var options = container.options;
        this.removeAt(0, quantity);
        if (!options.particles.move.enable) {
            this.container.play();
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/PolygonMask.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/PolygonMask.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Classes/Particle.js");
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ./Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var PolygonMask = (function () {
    function PolygonMask(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.paths = [];
        this.path2DSupported = window.hasOwnProperty("Path2D");
    }
    PolygonMask.prototype.checkInsidePolygon = function (position) {
        var container = this.container;
        var options = container.options;
        if (!options.polygon.enable ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.none ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            return true;
        }
        if (!this.raw) {
            throw new Error(Constants_1.Constants.noPolygonFound);
        }
        var x = position ? position.x : Math.random() * container.canvas.size.width;
        var y = position ? position.y : Math.random() * container.canvas.size.height;
        var inside = false;
        for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            var xi = this.raw[i].x;
            var yi = this.raw[i].y;
            var xj = this.raw[j].x;
            var yj = this.raw[j].y;
            var intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inside) {
            return inside;
        }
        else if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.outside) {
            return !inside;
        }
        return false;
    };
    PolygonMask.prototype.redraw = function () {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none) {
            if (this.redrawTimeout) {
                clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = window.setTimeout(function () {
                _this.parseSvgPathToPolygon().then(function (data) {
                    _this.raw = data;
                    _this.createPath2D();
                    container.particles.redraw();
                });
            }, 250);
        }
    };
    PolygonMask.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var container, options, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        if (!(options.polygon.enable && options.polygon.url)) return [3, 2];
                        _a = this;
                        return [4, this.parseSvgPathToPolygon(options.polygon.url)];
                    case 1:
                        _a.raw = _b.sent();
                        this.createPath2D();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PolygonMask.prototype.reset = function () {
        delete this.raw;
        this.paths = [];
        delete this.svg;
    };
    PolygonMask.prototype.randomPointInPolygon = function () {
        var container = this.container;
        var options = container.options;
        var position;
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            switch (options.polygon.inline.arrangement) {
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomPoint:
                    position = this.getRandomPointOnPolygonPath();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomLength:
                    position = this.getRandomPointOnPolygonPathByLength();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.equidistant:
                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint:
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint:
                default:
                    position = this.getPointOnPolygonPathByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.size.width,
                y: Math.random() * container.canvas.size.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPointInPolygon();
        }
    };
    PolygonMask.prototype.parseSvgPathToPolygon = function (svgUrl) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var container, options, url, req, xml, parser, doc, svgPaths, i, path, pxRatio, scale, position, polygonRaw, _i, _b, path, len, p, i, segment, absSeg, relSeg;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        url = svgUrl || options.polygon.url;
                        if (!(!this.paths.length || !this.svg)) return [3, 4];
                        return [4, fetch(url)];
                    case 1:
                        req = _c.sent();
                        if (!req.ok) return [3, 3];
                        return [4, req.text()];
                    case 2:
                        xml = _c.sent();
                        parser = new DOMParser();
                        doc = parser.parseFromString(xml, "image/svg+xml");
                        this.svg = doc.getElementsByTagName("svg")[0];
                        svgPaths = doc.getElementsByTagName("path");
                        for (i = 0; i < svgPaths.length; i++) {
                            path = svgPaths.item(i);
                            if (path) {
                                this.paths.push({
                                    element: path,
                                    length: path.getTotalLength(),
                                });
                            }
                        }
                        return [3, 4];
                    case 3: throw new Error("tsParticles Error - Error occurred during polygon mask download");
                    case 4:
                        pxRatio = container.retina.pixelRatio;
                        scale = options.polygon.scale / pxRatio;
                        this.dimension.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
                        this.dimension.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
                        position = (_a = options.polygon.position) !== null && _a !== void 0 ? _a : {
                            x: 50,
                            y: 50,
                        };
                        this.offset = {
                            x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
                            y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2,
                        };
                        polygonRaw = [];
                        for (_i = 0, _b = this.paths; _i < _b.length; _i++) {
                            path = _b[_i];
                            len = path.element.pathSegList.numberOfItems;
                            p = {
                                x: 0,
                                y: 0,
                            };
                            for (i = 0; i < len; i++) {
                                segment = path.element.pathSegList.getItem(i);
                                switch (segment.pathSegType) {
                                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                        absSeg = segment;
                                        p.x = absSeg.x;
                                        p.y = absSeg.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                                        p.x = segment.x;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                                        p.y = segment.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                        relSeg = segment;
                                        p.x += relSeg.x;
                                        p.y += relSeg.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                                        p.x += segment.x;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                                        p.y += segment.y;
                                        break;
                                    case window.SVGPathSeg.PATHSEG_UNKNOWN:
                                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                                        continue;
                                }
                                polygonRaw.push({
                                    x: p.x * scale + this.offset.x,
                                    y: p.y * scale + this.offset.y,
                                });
                            }
                        }
                        return [2, polygonRaw];
                }
            });
        });
    };
    PolygonMask.prototype.drawPolygon = function () {
        var container = this.container;
        container.canvas.drawPolygonMask();
    };
    PolygonMask.prototype.drawPointsOnPolygonPath = function () {
        var container = this.container;
        if (this.raw) {
            for (var _i = 0, _a = this.raw; _i < _a.length; _i++) {
                var item = _a[_i];
                var position = {
                    x: item.x,
                    y: item.y,
                };
                container.particles.addParticle(new Particle_1.Particle(container, position));
            }
        }
    };
    PolygonMask.prototype.getRandomPointOnPolygonPath = function () {
        if (!this.raw || !this.raw.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.getRandomPointOnPolygonPathByLength = function () {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.paths.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var path = Utils_1.Utils.itemFromArray(this.paths);
        var distance = Math.floor(Math.random() * path.length) + 1;
        var point = path.element.getPointAtLength(distance);
        return {
            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
        };
    };
    PolygonMask.prototype.getEquidistantPointOnPolygonPathByIndex = function (index) {
        var _a, _b, _c, _d, _e, _f;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.paths.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var offset = 0;
        var point;
        var totalLength = this.paths.reduce(function (tot, path) { return tot + path.length; }, 0);
        var distance = totalLength / options.particles.number.value;
        for (var _i = 0, _g = this.paths; _i < _g.length; _i++) {
            var path = _g[_i];
            var pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            }
            else {
                offset += path.length;
            }
        }
        return {
            x: ((_a = point === null || point === void 0 ? void 0 : point.x) !== null && _a !== void 0 ? _a : 0) * options.polygon.scale + ((_c = (_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : 0),
            y: ((_d = point === null || point === void 0 ? void 0 : point.y) !== null && _d !== void 0 ? _d : 0) * options.polygon.scale + ((_f = (_e = this.offset) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : 0),
        };
    };
    PolygonMask.prototype.getPointOnPolygonPathByIndex = function (index) {
        if (!this.raw || !this.raw.length)
            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
        var coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.createPath2D = function () {
        var _a;
        if (!this.path2DSupported) {
            return;
        }
        var _loop_1 = function (path) {
            var pathData = (_a = path.element) === null || _a === void 0 ? void 0 : _a.getAttribute("d");
            if (pathData) {
                var path2d = new Path2D(pathData);
                var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                var finalPath = new Path2D();
                var transform = matrix.scale(this_1.container.options.polygon.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                }
                else {
                    delete path.path2d;
                }
            }
            else {
                delete path.path2d;
            }
            if (!path.path2d && this_1.raw) {
                path.path2d = new Path2D();
                path.path2d.moveTo(this_1.raw[0].x, this_1.raw[0].y);
                this_1.raw.forEach(function (pos, i) {
                    var _a;
                    if (i > 0) {
                        (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                    }
                });
                path.path2d.closePath();
            }
        };
        var this_1 = this;
        for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
            var path = _b[_i];
            _loop_1(path);
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Retina.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Retina.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Retina = (function () {
    function Retina(container) {
        this.container = container;
        this.isRetina = false;
        this.bubbleModeDistance = 0;
        this.bubbleModeSize = 0;
        this.connectModeDistance = 0;
        this.connectModeRadius = 0;
        this.grabModeDistance = 0;
        this.repulseModeDistance = 0;
        this.slowModeRadius = 0;
        this.lineLinkedDistance = 0;
        this.lineLinkedWidth = 0;
        this.moveSpeed = 0;
        this.sizeValue = 0;
        this.sizeAnimationSpeed = 0;
        this.polygonMaskMoveRadius = 0;
        this.pixelRatio = 1;
    }
    Retina.prototype.init = function () {
        var _a;
        var container = this.container;
        var options = container.options;
        if (options.detectRetina && window.devicePixelRatio > 1) {
            this.pixelRatio = window.devicePixelRatio;
            this.isRetina = true;
        }
        else {
            this.pixelRatio = 1;
            this.isRetina = false;
        }
        var ratio = this.pixelRatio;
        if (container.canvas.element) {
            var element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        var particles = options.particles;
        this.lineLinkedDistance = particles.lineLinked.distance * ratio;
        this.lineLinkedWidth = particles.lineLinked.width * ratio;
        this.moveSpeed = particles.move.speed * ratio;
        this.sizeValue = particles.size.value * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        var interactivity = options.interactivity;
        this.connectModeDistance = interactivity.modes.connect.distance * ratio;
        this.connectModeRadius = interactivity.modes.connect.radius * ratio;
        this.grabModeDistance = interactivity.modes.grab.distance * ratio;
        this.repulseModeDistance = interactivity.modes.repulse.distance * ratio;
        this.slowModeRadius = interactivity.modes.slow.radius * ratio;
        this.bubbleModeDistance = interactivity.modes.bubble.distance * ratio;
        this.bubbleModeSize = (_a = interactivity.modes.bubble.size) !== null && _a !== void 0 ? _a : this.sizeValue * ratio;
        this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
    };
    Retina.prototype.initParticle = function (particle) {
        var particlesOptions = particle.particlesOptions;
        var ratio = this.pixelRatio;
        particle.lineLinkedDistance = particlesOptions.lineLinked.distance * ratio;
        particle.lineLinkedWidth = particlesOptions.lineLinked.width * ratio;
        particle.moveSpeed = particlesOptions.move.speed * ratio;
        particle.sizeValue = particlesOptions.size.value * ratio;
        if (typeof particlesOptions.size.random !== "boolean") {
            particle.randomMinimumSize = particlesOptions.size.random.minimumValue;
        }
        particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
    };
    Retina.prototype.reset = function () {
    };
    return Retina;
}());
exports.Retina = Retina;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/CircleDrawer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/CircleDrawer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CircleDrawer = (function () {
    function CircleDrawer() {
    }
    CircleDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    };
    return CircleDrawer;
}());
exports.CircleDrawer = CircleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/ImageDrawer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/ImageDrawer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ImageDrawer = (function () {
    function ImageDrawer() {
    }
    ImageDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        var imgObj = (_b = (_a = particle.image) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.obj;
        if (!imgObj) {
            return;
        }
        var ratio = 1;
        if (particle.image) {
            ratio = particle.image.ratio;
        }
        var pos = {
            x: -radius,
            y: -radius,
        };
        context.globalAlpha = opacity;
        context.drawImage(imgObj, pos.x, pos.y, radius * 2, radius * 2 / ratio);
        context.globalAlpha = 1;
    };
    return ImageDrawer;
}());
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/LineDrawer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/LineDrawer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LineDrawer = (function () {
    function LineDrawer() {
    }
    LineDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    };
    return LineDrawer;
}());
exports.LineDrawer = LineDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js");
var PolygonDrawer = (function (_super) {
    tslib_1.__extends(PolygonDrawer, _super);
    function PolygonDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolygonDrawer.prototype.getSidesData = function (particle, radius) {
        var _a, _b;
        var polygon = particle.shapeData;
        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: radius * 2.66 / (sides / 3),
        };
    };
    PolygonDrawer.prototype.getCenter = function (particle, radius) {
        var _a, _b;
        var polygon = particle.shapeData;
        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
    };
    return PolygonDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.PolygonDrawer = PolygonDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase = (function () {
    function PolygonDrawerBase() {
    }
    PolygonDrawerBase.prototype.draw = function (context, particle, radius, _opacity) {
        var start = this.getCenter(particle, radius);
        var side = this.getSidesData(particle, radius);
        var sideCount = side.count.numerator * side.count.denominator;
        var decimalSides = side.count.numerator / side.count.denominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    };
    return PolygonDrawerBase;
}());
exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/SquareDrawer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/SquareDrawer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SquareDrawer = (function () {
    function SquareDrawer() {
    }
    SquareDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    };
    return SquareDrawer;
}());
exports.SquareDrawer = SquareDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/StarDrawer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/StarDrawer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js");
var StarDrawer = (function (_super) {
    tslib_1.__extends(StarDrawer, _super);
    function StarDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarDrawer.prototype.getSidesData = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            count: {
                denominator: 2,
                numerator: sides,
            },
            length: radius * 2 * 2.66 / (sides / 3),
        };
    };
    StarDrawer.prototype.getCenter = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            x: -radius * 2 / (sides / 4),
            y: -radius / (2 * 2.66 / 3.5),
        };
    };
    return StarDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.StarDrawer = StarDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TextDrawer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/TextDrawer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var TextDrawer = (function () {
    function TextDrawer() {
    }
    TextDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        var character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        var textData = character.value;
        if (textData === undefined) {
            return;
        }
        var textParticle = particle;
        if (textParticle.text === undefined) {
            if (textData instanceof Array) {
                textParticle.text = Utils_1.Utils.itemFromArray(textData, particle.randomIndexData);
            }
            else {
                textParticle.text = textData;
            }
        }
        var text = textParticle.text;
        var style = character.style;
        var weight = character.weight;
        var size = Math.round(radius) * 2;
        var font = character.font;
        var fill = particle.fill;
        context.font = style + " " + weight + " " + size + "px \"" + font + "\"";
        var pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    };
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TriangleDrawer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/TriangleDrawer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js");
var TriangleDrawer = (function (_super) {
    tslib_1.__extends(TriangleDrawer, _super);
    function TriangleDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleDrawer.prototype.getSidesData = function (particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    };
    TriangleDrawer.prototype.getCenter = function (particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    };
    return TriangleDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.TriangleDrawer = TriangleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/CanvasUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/CanvasUtils.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var CanvasUtils = (function () {
    function CanvasUtils() {
    }
    CanvasUtils.paintBase = function (context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    };
    CanvasUtils.clear = function (context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    };
    CanvasUtils.drawPolygonMask = function (context, rawData, stroke) {
        var color = typeof stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.save();
            context.beginPath();
            context.moveTo(rawData[0].x, rawData[0].y);
            for (var i = 1; i < rawData.length; i++) {
                context.lineTo(rawData[i].x, rawData[i].y);
            }
            context.closePath();
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color);
            context.lineWidth = stroke.width;
            context.stroke();
            context.restore();
        }
    };
    CanvasUtils.drawPolygonMaskPath = function (context, path, stroke, position) {
        context.save();
        context.translate(position.x, position.y);
        var color = typeof stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color, stroke.opacity);
            context.lineWidth = stroke.width;
            context.stroke(path);
        }
        context.restore();
    };
    CanvasUtils.drawAbsorber = function (context, absorber) {
        context.save();
        context.translate(absorber.position.x, absorber.position.y);
        context.beginPath();
        context.arc(0, 0, absorber.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromColor(absorber.color, absorber.opacity);
        context.fill();
        context.restore();
    };
    CanvasUtils.drawLineLinked = function (context, width, begin, end, backgroundMask, colorLine, opacity, shadow) {
        context.save();
        context.lineWidth = width;
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
        if (backgroundMask) {
            context.globalCompositeOperation = 'destination-out';
        }
        if (colorLine) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
        }
        var shadowColor = typeof shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(shadowColor);
        }
        context.stroke();
        context.restore();
    };
    CanvasUtils.drawConnectLine = function (context, width, lineStyle, begin, end) {
        context.save();
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.stroke();
        context.restore();
    };
    CanvasUtils.gradient = function (context, p1, p2, opacity) {
        var gradStop = Math.floor(p2.size.value / p1.size.value);
        if (!p1.color || !p2.color) {
            return;
        }
        var sourcePos = {
            x: p1.position.x + p1.offset.x,
            y: p1.position.y + p1.offset.y
        };
        var destPos = {
            x: p2.position.x + p2.offset.x,
            y: p2.position.y + p2.offset.y
        };
        var midRgb = ColorUtils_1.ColorUtils.mix(p1.color, p2.color, p1.size.value, p2.size.value);
        var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromColor(p1.color, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromColor(midRgb, opacity));
        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromColor(p2.color, opacity));
        return grad;
    };
    CanvasUtils.drawGrabLine = function (context, width, begin, end, colorLine, opacity) {
        context.save();
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
        context.lineWidth = width;
        context.stroke();
        context.restore();
    };
    CanvasUtils.drawParticle = function (context, particle, colorValue, backgroundMask, radius, opacity, shadow) {
        var pos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        context.save();
        context.translate(pos.x, pos.y);
        context.beginPath();
        var shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        context.fillStyle = colorValue;
        if (particle.angle !== 0) {
            context.rotate(particle.angle * Math.PI / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        var stroke = particle.stroke;
        if (stroke.width > 0 && particle.strokeColor) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(particle.strokeColor, particle.stroke.opacity);
            context.lineWidth = stroke.width;
        }
        this.drawShape(context, particle, radius, opacity);
        if (particle.close) {
            context.closePath();
        }
        if (stroke.width > 0 && particle.strokeColor) {
            context.stroke();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
    };
    CanvasUtils.addShapeDrawer = function (type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    };
    CanvasUtils.drawShape = function (context, particle, radius, opacity) {
        if (!particle.shape) {
            return;
        }
        var drawer = this.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity);
    };
    CanvasUtils.drawers = {};
    return CanvasUtils;
}());
exports.CanvasUtils = CanvasUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var ColorUtils = (function () {
    function ColorUtils() {
    }
    ColorUtils.colorToRgb = function (color) {
        var _a, _b;
        var res;
        if (typeof (color.value) === "string") {
            if (color.value === Constants_1.Constants.randomColorValue) {
                res = {
                    b: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    r: Math.floor(Math.random() * 256),
                };
            }
            else {
                res = ColorUtils.stringToRgb(color.value);
            }
        }
        else {
            if (color.value instanceof Array) {
                var colorSelected = Utils_1.Utils.itemFromArray(color.value);
                res = ColorUtils.stringToRgb(colorSelected);
            }
            else {
                var colorValue = color.value;
                var rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                else {
                    var hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
                    if (hslColor.h !== undefined) {
                        res = ColorUtils.hslToRgb(hslColor);
                    }
                }
            }
        }
        return res;
    };
    ColorUtils.stringToAlpha = function (input) {
        var _a;
        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    };
    ColorUtils.stringToRgb = function (input) {
        return ColorUtils.stringToRgba(input);
    };
    ColorUtils.hslToRgb = function (hsl) {
        var result = { b: 0, g: 0, r: 0 };
        var hslPercent = {
            h: hsl.h > 1 ? hsl.h / 360 : hsl.h,
            l: hsl.l > 1 ? hsl.l / 100 : hsl.l,
            s: hsl.s > 1 ? hsl.s / 100 : hsl.s,
        };
        if (hslPercent.s === 0) {
            result.b = hslPercent.l;
            result.g = hslPercent.l;
            result.r = hslPercent.l;
        }
        else {
            var q = hslPercent.l < 0.5 ?
                hslPercent.l * (1 + hslPercent.s) :
                hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
            var p = 2 * hslPercent.l - q;
            result.r = ColorUtils.hue2rgb(p, q, hslPercent.h + 1 / 3);
            result.g = ColorUtils.hue2rgb(p, q, hslPercent.h);
            result.b = ColorUtils.hue2rgb(p, q, hslPercent.h - 1 / 3);
        }
        result.r = Math.round(result.r * 255);
        result.g = Math.round(result.g * 255);
        result.b = Math.round(result.b * 255);
        return result;
    };
    ColorUtils.hslaToRgba = function (hsla) {
        var rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    };
    ColorUtils.getRandomRgbColor = function (min) {
        var _a;
        var fixedMin = min || 0;
        var minColor = fixedMin + (fixedMin * Math.pow(16, 2)) + (fixedMin * Math.pow(16, 4));
        var factor = minColor ^ 0xFFFFFF;
        var randomColor = Math.floor(((Math.random() * factor) | minColor)).toString(16);
        return (_a = this.stringToRgb("#" + randomColor)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
    };
    ColorUtils.getStyleFromColor = function (color, opacity) {
        var opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
        return "rgba(" + Math.round(color.r) + ", " + Math.round(color.g) + ", " + Math.round(color.b) + ", " + opacityValue + ")";
    };
    ColorUtils.mix = function (color1, color2, size1, size2) {
        return {
            b: Utils_1.Utils.mix(color1.b, color2.b, size1, size2),
            g: Utils_1.Utils.mix(color1.g, color2.g, size1, size2),
            r: Utils_1.Utils.mix(color1.r, color2.r, size1, size2),
        };
    };
    ColorUtils.hue2rgb = function (p, q, t) {
        var tCalc = t;
        if (tCalc < 0) {
            tCalc += 1;
        }
        if (tCalc > 1) {
            tCalc -= 1;
        }
        if (tCalc < 1 / 6) {
            return p + (q - p) * 6 * tCalc;
        }
        if (tCalc < 1 / 2) {
            return q;
        }
        if (tCalc < 2 / 3) {
            return p + (q - p) * (2 / 3 - tCalc) * 6;
        }
        return p;
    };
    ColorUtils.stringToRgba = function (input) {
        if (input.startsWith('rgb')) {
            var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? {
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                b: parseInt(result[3]),
                g: parseInt(result[2]),
                r: parseInt(result[1]),
            } : undefined;
        }
        else if (input.startsWith('hsl')) {
            var regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? ColorUtils.hslaToRgba({
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                h: parseInt(result[1]),
                l: parseInt(result[3]),
                s: parseInt(result[2]),
            }) : undefined;
        }
        else {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
            var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
                return r + r + g + g + b + b + (a !== undefined ? a + a : "");
            });
            var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
            var result = regex.exec(hexFixed);
            return result ? {
                a: result[4] !== undefined ? parseInt(result[4], 16) / 0xFF : 1,
                b: parseInt(result[3], 16),
                g: parseInt(result[2], 16),
                r: parseInt(result[1], 16),
            } : undefined;
        }
    };
    return ColorUtils;
}());
exports.ColorUtils = ColorUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/Constants.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = (function () {
    function Constants() {
    }
    Constants.canvasClass = "tsparticles-canvas-el";
    Constants.randomColorValue = "random";
    Constants.midColorValue = "mid";
    Constants.touchEndEvent = "touchend";
    Constants.mouseUpEvent = "mouseup";
    Constants.mouseMoveEvent = "mousemove";
    Constants.touchStartEvent = "touchstart";
    Constants.touchMoveEvent = "touchmove";
    Constants.mouseLeaveEvent = "mouseleave";
    Constants.touchCancelEvent = "touchcancel";
    Constants.resizeEvent = "resize";
    Constants.visibilityChangeEvent = "visibilitychange";
    Constants.noPolygonDataLoaded = "No polygon data loaded.";
    Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
    return Constants;
}());
exports.Constants = Constants;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/EventListeners.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/EventListeners.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var InteractivityDetect_1 = __webpack_require__(/*! ../../Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Emitter_1 = __webpack_require__(/*! ../Emitter */ "./node_modules/tsparticles/dist/Classes/Emitter.js");
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Absorber_1 = __webpack_require__(/*! ../Absorber */ "./node_modules/tsparticles/dist/Classes/Absorber.js");
var EventListeners = (function () {
    function EventListeners(container) {
        var _this = this;
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
        this.resizeHandler = function () { return _this.handleWindowResize(); };
    }
    EventListeners.manageListener = function (element, event, handler, add, options) {
        if (add) {
            var addOptions = { passive: true };
            if (typeof options === "boolean") {
                addOptions.capture = options;
            }
            else if (options !== undefined) {
                addOptions = options;
            }
            EventListeners.addListener(element, event, handler, addOptions);
        }
        else {
            EventListeners.removeListener(element, event, handler, options);
        }
    };
    EventListeners.addListener = function (element, event, handler, options) {
        element.addEventListener(event, handler, options);
    };
    EventListeners.removeListener = function (element, event, handler, options) {
        element.removeEventListener(event, handler, options);
    };
    EventListeners.prototype.addListeners = function () {
        this.manageListeners(true);
    };
    EventListeners.prototype.removeListeners = function () {
        this.manageListeners(false);
    };
    EventListeners.prototype.manageListeners = function (add) {
        var container = this.container;
        var options = container.options;
        if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        var interactivityEl = container.interactivity.element;
        if (interactivityEl && (options.interactivity.events.onHover.enable ||
            options.interactivity.events.onClick.enable)) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            EventListeners.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            EventListeners.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    };
    EventListeners.prototype.handleWindowResize = function () {
        var container = this.container;
        var options = container.options;
        if (!container.canvas.element) {
            return;
        }
        container.canvas.size.width = container.canvas.element.offsetWidth;
        container.canvas.size.height = container.canvas.element.offsetHeight;
        if (container.retina.isRetina) {
            container.canvas.size.width *= container.retina.pixelRatio;
            container.canvas.size.height *= container.retina.pixelRatio;
        }
        container.canvas.element.width = container.canvas.size.width;
        container.canvas.element.height = container.canvas.size.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        for (var _i = 0, _a = container.emitters; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.resize();
        }
        for (var _b = 0, _c = container.absorbers; _b < _c.length; _b++) {
            var absorber = _c[_b];
            absorber.resize();
        }
        container.polygon.redraw();
    };
    EventListeners.prototype.handleVisibilityChange = function () {
        var container = this.container;
        var options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
        }
    };
    EventListeners.prototype.mouseTouchMove = function (e) {
        var _a, _b, _c, _d;
        var container = this.container;
        var options = container.options;
        var pos;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            var mouseEvent = e;
            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
                return;
            }
            if (container.interactivity.element === window) {
                if (container.canvas.element) {
                    var clientRect = container.canvas.element.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                if (source && target) {
                    var sourceRect = source.getBoundingClientRect();
                    var targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                if (mouseEvent.target === container.canvas.element) {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            var touchEvent = e;
            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            var canvasRect = (_b = container.canvas.element) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _c !== void 0 ? _c : 0),
                y: lastTouch.clientY - ((_d = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _d !== void 0 ? _d : 0),
            };
        }
        container.interactivity.mouse.position = pos;
        if (container.retina.isRetina && container.interactivity.mouse.position) {
            container.interactivity.mouse.position.x *= container.retina.pixelRatio;
            container.interactivity.mouse.position.y *= container.retina.pixelRatio;
        }
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    };
    EventListeners.prototype.mouseTouchFinish = function () {
        var container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    };
    EventListeners.prototype.mouseTouchClick = function (e) {
        var container = this.container;
        var options = container.options;
        if (options.polygon === undefined) {
            return;
        }
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (container.polygon.checkInsidePolygon(container.interactivity.mouse.position)) {
                this.doMouseTouchClick(e);
            }
        }
        else {
            this.doMouseTouchClick(e);
        }
    };
    EventListeners.prototype.doMouseTouchClick = function (e) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (this.canPush) {
            if (container.interactivity.mouse.position) {
                container.interactivity.mouse.clickPosition = {
                    x: container.interactivity.mouse.position.x,
                    y: container.interactivity.mouse.position.y,
                };
            }
            else {
                return;
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            var pushNb = options.interactivity.modes.push.quantity;
            var removeNb = options.interactivity.modes.remove.quantity;
            switch (options.interactivity.events.onClick.mode) {
                case ClickMode_1.ClickMode.push:
                    if (options.particles.move.enable) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else {
                        if (options.interactivity.modes.push.quantity === 1) {
                            container.particles.push(pushNb, container.interactivity.mouse);
                        }
                        else if (options.interactivity.modes.push.quantity > 1) {
                            container.particles.push(pushNb);
                        }
                    }
                    break;
                case ClickMode_1.ClickMode.remove:
                    container.particles.removeQuantity(removeNb);
                    break;
                case ClickMode_1.ClickMode.bubble:
                    container.bubble.clicking = true;
                    break;
                case ClickMode_1.ClickMode.repulse:
                    container.repulse.clicking = true;
                    container.repulse.count = 0;
                    for (var _i = 0, _a = container.repulse.particles; _i < _a.length; _i++) {
                        var particle = _a[_i];
                        particle.velocity.horizontal = particle.initialVelocity.horizontal;
                        particle.velocity.vertical = particle.initialVelocity.vertical;
                    }
                    container.repulse.particles = [];
                    container.repulse.finish = false;
                    setTimeout(function () {
                        if (!container.destroyed) {
                            container.repulse.clicking = false;
                        }
                    }, options.interactivity.modes.repulse.duration * 1000);
                    break;
                case ClickMode_1.ClickMode.absorber:
                    var absorbersModeOptions = void 0;
                    var modeAbsorbers = options.interactivity.modes.absorbers;
                    if (modeAbsorbers instanceof Array) {
                        if (modeAbsorbers.length > 0) {
                            absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
                        }
                    }
                    else {
                        absorbersModeOptions = modeAbsorbers;
                    }
                    var absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : (options.absorbers instanceof Array ?
                        Utils_1.Utils.itemFromArray(options.absorbers) :
                        options.absorbers);
                    var bhPosition = container.interactivity.mouse.clickPosition;
                    var absorber = new Absorber_1.Absorber(container, absorbersOptions, bhPosition);
                    container.absorbers.push(absorber);
                    break;
                case ClickMode_1.ClickMode.emitter:
                    var emitterModeOptions = void 0;
                    var modeEmitters = options.interactivity.modes.emitters;
                    if (modeEmitters instanceof Array) {
                        if (modeEmitters.length > 0) {
                            emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
                        }
                    }
                    else {
                        emitterModeOptions = modeEmitters;
                    }
                    var emitterOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (options.emitters instanceof Array ?
                        Utils_1.Utils.itemFromArray(options.emitters) :
                        options.emitters);
                    var ePosition = container.interactivity.mouse.clickPosition;
                    var emitter = new Emitter_1.Emitter(container, Utils_1.Utils.deepExtend({}, emitterOptions), ePosition);
                    container.emitters.push(emitter);
                    break;
            }
        }
        if (e.type === "touchend") {
            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
        }
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/Presets.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Presets = (function () {
    function Presets() {
    }
    Presets.getPreset = function (preset) {
        return this.presets[preset];
    };
    Presets.addPreset = function (presetKey, options) {
        if (!this.presets[presetKey]) {
            this.presets[presetKey] = options;
        }
    };
    Presets.presets = {};
    return Presets;
}());
exports.Presets = Presets;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/SpatialGrid.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/SpatialGrid.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var SpatialGrid = (function () {
    function SpatialGrid(canvas) {
        this.grid = [];
        this.cellSize = 20;
        this.widthSegment = Math.round(canvas.width / this.cellSize);
        this.heightSegment = Math.round(canvas.height / this.cellSize);
    }
    SpatialGrid.prototype.setGrid = function (particles, dimension) {
        var grid = [];
        var widthSegment = (dimension === null || dimension === void 0 ? void 0 : dimension.width) ? (dimension === null || dimension === void 0 ? void 0 : dimension.width) / this.cellSize : this.widthSegment;
        var heightSegment = (dimension === null || dimension === void 0 ? void 0 : dimension.height) ? (dimension === null || dimension === void 0 ? void 0 : dimension.height) / this.cellSize : this.heightSegment;
        for (var _i = 0, particles_1 = particles; _i < particles_1.length; _i++) {
            var particle = particles_1[_i];
            var pos = {
                x: particle.position.x + particle.offset.x,
                y: particle.position.y + particle.offset.y,
            };
            var posIndex = this.index(pos);
            if (!Array.isArray(grid[posIndex.x]))
                grid[posIndex.x] = [];
            if (!Array.isArray(grid[posIndex.x][posIndex.y]))
                grid[posIndex.x][posIndex.y] = [];
            grid[posIndex.x][posIndex.y].push(particle);
        }
        this.widthSegment = widthSegment;
        this.heightSegment = heightSegment;
        this.grid = grid;
    };
    SpatialGrid.prototype.queryInCell = function (position) {
        var pos = this.index(position);
        return Array.isArray(this.grid[pos.x]) && Array.isArray(this.grid[pos.x][pos.y]) ?
            this.grid[pos.x][pos.y] || [] : [];
    };
    SpatialGrid.prototype.queryRadius = function (position, radius) {
        var pos = this.index(position);
        var rad = this.radius({ x: radius, y: radius });
        var items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        var out = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var itemPos = {
                x: item.position.x + item.offset.x,
                y: item.position.y + item.offset.y,
            };
            if (Utils_1.Utils.getDistanceBetweenCoordinates(itemPos, position) <= radius) {
                out.push(item);
            }
        }
        return out;
    };
    SpatialGrid.prototype.queryRadiusWithDistance = function (position, radius) {
        var pos = this.index(position);
        var rad = this.radius({ x: radius, y: radius });
        var items = this.select(this.indexOp(pos, '-', rad), this.indexOp(pos, '+', rad));
        var out = [];
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            var itemPos = {
                x: item.position.x + item.offset.x,
                y: item.position.y + item.offset.y,
            };
            var distance = Utils_1.Utils.getDistanceBetweenCoordinates(itemPos, position);
            if (distance <= radius) {
                out.push({
                    distance: distance,
                    particle: item,
                });
            }
        }
        return out;
    };
    SpatialGrid.prototype.select = function (start, end) {
        var out = [];
        for (var x = start.x; x <= end.x; x++) {
            if (!Array.isArray(this.grid[x])) {
                continue;
            }
            for (var y = start.y; y <= end.y; y++) {
                if (!Array.isArray(this.grid[x][y])) {
                    continue;
                }
                for (var _i = 0, _a = this.grid[x][y]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    out.push(item);
                }
            }
        }
        return out;
    };
    SpatialGrid.prototype.index = function (position) {
        return {
            x: Math.round(position.x / this.widthSegment),
            y: Math.round(position.y / this.heightSegment),
        };
    };
    SpatialGrid.prototype.radius = function (radius) {
        return {
            x: Math.ceil(radius.x / this.widthSegment),
            y: Math.ceil(radius.y / this.heightSegment),
        };
    };
    SpatialGrid.prototype.indexOp = function (left, op, right) {
        if (op == '+') {
            return {
                x: this.clamp(left.x + right.x),
                y: this.clamp(left.y + right.y),
            };
        }
        else {
            return {
                x: this.clamp(left.x - right.x),
                y: this.clamp(left.y - right.y),
            };
        }
    };
    SpatialGrid.prototype.clamp = function (num) {
        return Utils_1.Utils.clamp(num, 0, this.cellSize);
    };
    return SpatialGrid;
}());
exports.SpatialGrid = SpatialGrid;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/Utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var MoveDirection_1 = __webpack_require__(/*! ../../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var Utils = (function () {
    function Utils() {
    }
    Utils.clamp = function (num, min, max) {
        return Math.min(Math.max(num, min), max);
    };
    Utils.isInArray = function (value, array) {
        return value === array || (array instanceof Array && array.indexOf(value) > -1);
    };
    Utils.mix = function (comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    };
    Utils.getParticleBaseVelocity = function (particle) {
        var velocityBase;
        switch (particle.direction) {
            case MoveDirection_1.MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case MoveDirection_1.MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case MoveDirection_1.MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case MoveDirection_1.MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case MoveDirection_1.MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case MoveDirection_1.MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    };
    Utils.getDistanceBetweenCoordinates = function (pointA, pointB) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Utils.loadFont = function (character) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, document.fonts.load(character.weight + " 36px '" + character.font + "'")];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Utils.arrayRandomIndex = function (array) {
        return Math.floor(Math.random() * array.length);
    };
    Utils.itemFromArray = function (array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    };
    Utils.randomInRange = function (min, max) {
        return (Math.random() * (max - min)) + min;
    };
    Utils.isPointInside = function (point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    };
    Utils.areBoundsInside = function (bounds, size) {
        return bounds.left < size.width && bounds.right > 0
            && bounds.top < size.height && bounds.bottom > 0;
    };
    Utils.calculateBounds = function (point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius,
        };
    };
    Utils.loadImage = function (optionsImage) {
        return new Promise(function (resolve, reject) {
            var src = optionsImage.src;
            var image = {
                type: src.substr(src.length - 3),
            };
            if (optionsImage.src) {
                var img_1 = new Image();
                img_1.addEventListener("load", function () {
                    image.obj = img_1;
                    resolve(image);
                });
                img_1.addEventListener("error", function () {
                    reject("Error tsParticles - loading image: " + optionsImage.src);
                });
                img_1.src = optionsImage.src;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    };
    Utils.deepExtend = function (destination, source) {
        var _a;
        destination = destination !== null && destination !== void 0 ? destination : {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = (_a = destination[property]) !== null && _a !== void 0 ? _a : {};
                Utils.deepExtend(destination[property], source[property]);
            }
            else {
                destination[property] = source[property];
            }
        }
        return destination;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/CollisionMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/CollisionMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollisionMode;
(function (CollisionMode) {
    CollisionMode["bounce"] = "bounce";
})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/InteractivityDetect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InteractivityDetect;
(function (InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode;
(function (ClickMode) {
    ClickMode["bubble"] = "bubble";
    ClickMode["push"] = "push";
    ClickMode["remove"] = "remove";
    ClickMode["repulse"] = "repulse";
    ClickMode["emitter"] = "emitter";
    ClickMode["absorber"] = "absorber";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DivMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DivMode;
(function (DivMode) {
    DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HoverMode;
(function (HoverMode) {
    HoverMode["bubble"] = "bubble";
    HoverMode["connect"] = "connect";
    HoverMode["grab"] = "grab";
    HoverMode["repulse"] = "repulse";
    HoverMode["slow"] = "slow";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/MoveDirection.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/MoveDirection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection;
(function (MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OpacityAnimationStatus.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimationStatus;
(function (OpacityAnimationStatus) {
    OpacityAnimationStatus[OpacityAnimationStatus["increasing"] = 0] = "increasing";
    OpacityAnimationStatus[OpacityAnimationStatus["decreasing"] = 1] = "decreasing";
})(OpacityAnimationStatus = exports.OpacityAnimationStatus || (exports.OpacityAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/OutMode.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OutMode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OutMode;
(function (OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["bounceHorizontal"] = "bounce-horizontal";
    OutMode["bounceVertical"] = "bounce-vertical";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
})(OutMode = exports.OutMode || (exports.OutMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskInlineArrangement;
(function (PolygonMaskInlineArrangement) {
    PolygonMaskInlineArrangement["equidistant"] = "equidistant";
    PolygonMaskInlineArrangement["onePerPoint"] = "one-per-point";
    PolygonMaskInlineArrangement["perPoint"] = "per-point";
    PolygonMaskInlineArrangement["randomLength"] = "random-length";
    PolygonMaskInlineArrangement["randomPoint"] = "random-point";
})(PolygonMaskInlineArrangement = exports.PolygonMaskInlineArrangement || (exports.PolygonMaskInlineArrangement = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskMoveType;
(function (PolygonMaskMoveType) {
    PolygonMaskMoveType["path"] = "path";
    PolygonMaskMoveType["radius"] = "radius";
})(PolygonMaskMoveType = exports.PolygonMaskMoveType || (exports.PolygonMaskMoveType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType;
(function (PolygonMaskType) {
    PolygonMaskType["inline"] = "inline";
    PolygonMaskType["inside"] = "inside";
    PolygonMaskType["outside"] = "outside";
    PolygonMaskType["none"] = "none";
})(PolygonMaskType = exports.PolygonMaskType || (exports.PolygonMaskType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType;
(function (ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/RotateDirection.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/RotateDirection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateDirection;
(function (RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ShapeType.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ShapeType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType;
(function (ShapeType) {
    ShapeType["char"] = "char";
    ShapeType["character"] = "character";
    ShapeType["circle"] = "circle";
    ShapeType["edge"] = "edge";
    ShapeType["image"] = "image";
    ShapeType["images"] = "images";
    ShapeType["line"] = "line";
    ShapeType["polygon"] = "polygon";
    ShapeType["square"] = "square";
    ShapeType["star"] = "star";
    ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/SizeAnimationStatus.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeAnimationStatus;
(function (SizeAnimationStatus) {
    SizeAnimationStatus[SizeAnimationStatus["increasing"] = 0] = "increasing";
    SizeAnimationStatus[SizeAnimationStatus["decreasing"] = 1] = "decreasing";
})(SizeAnimationStatus = exports.SizeAnimationStatus || (exports.SizeAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Loader_1 = __webpack_require__(/*! ./Classes/Loader */ "./node_modules/tsparticles/dist/Classes/Loader.js");
var ShapeType_1 = __webpack_require__(/*! ./Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var LineDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/LineDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/LineDrawer.js");
var CircleDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/CircleDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/CircleDrawer.js");
var SquareDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/SquareDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/SquareDrawer.js");
var TriangleDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/TriangleDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TriangleDrawer.js");
var StarDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/StarDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/StarDrawer.js");
var PolygonDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/PolygonDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawer.js");
var TextDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/TextDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TextDrawer.js");
var ImageDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/ImageDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/ImageDrawer.js");
var Presets_1 = __webpack_require__(/*! ./Classes/Utils/Presets */ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js");
var CanvasUtils_1 = __webpack_require__(/*! ./Classes/Utils/CanvasUtils */ "./node_modules/tsparticles/dist/Classes/Utils/CanvasUtils.js");
var Main = (function () {
    function Main() {
        this.initialized = false;
        if (typeof window !== "undefined" && window) {
            window.customRequestAnimationFrame = (function () {
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    (function (callback) { return window.setTimeout(callback, 1000 / 60); });
            })();
            window.customCancelRequestAnimationFrame = (function () {
                return window.cancelAnimationFrame ||
                    window.webkitCancelRequestAnimationFrame ||
                    window.mozCancelRequestAnimationFrame ||
                    window.oCancelRequestAnimationFrame ||
                    window.msCancelRequestAnimationFrame ||
                    clearTimeout;
            })();
        }
        var squareDrawer = new SquareDrawer_1.SquareDrawer();
        var textDrawer = new TextDrawer_1.TextDrawer();
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.line, new LineDrawer_1.LineDrawer());
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.edge, squareDrawer);
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.square, squareDrawer);
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.star, new StarDrawer_1.StarDrawer());
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.char, textDrawer);
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.character, textDrawer);
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.image, new ImageDrawer_1.ImageDrawer());
        CanvasUtils_1.CanvasUtils.addShapeDrawer(ShapeType_1.ShapeType.images, new ImageDrawer_1.ImageDrawer());
    }
    Main.prototype.init = function () {
        if (!this.initialized) {
            this.initialized = true;
            if (typeof window !== "undefined" && window) {
                var tsParticles_1 = this;
                window.particlesJS = function (tagId, params) {
                    return tsParticles_1.load(tagId, params);
                };
                window.particlesJS.load = function (tagId, pathConfigJson, callback) {
                    tsParticles_1.loadJSON(tagId, pathConfigJson).then(function (container) {
                        if (container) {
                            callback(container);
                        }
                    });
                };
                window.particlesJS.setOnClickHandler = function (callback) {
                    tsParticles_1.setOnClickHandler(callback);
                };
                window.pJSDom = function () {
                    return window.tsParticles.dom();
                };
            }
        }
    };
    Main.prototype.loadFromArray = function (tagId, params, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader_1.Loader.loadFromArray(tagId, params, index)];
            });
        });
    };
    Main.prototype.load = function (tagId, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, Loader_1.Loader.load(tagId, params)];
            });
        });
    };
    Main.prototype.loadJSON = function (tagId, pathConfigJson) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson);
    };
    Main.prototype.setOnClickHandler = function (callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    };
    Main.prototype.dom = function () {
        return Loader_1.Loader.dom();
    };
    Main.prototype.domItem = function (index) {
        return Loader_1.Loader.domItem(index);
    };
    Main.prototype.addShape = function (shape, drawer) {
        var customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                draw: drawer,
            };
        }
        else {
            customDrawer = drawer;
        }
        CanvasUtils_1.CanvasUtils.addShapeDrawer(shape, customDrawer);
    };
    Main.prototype.addPreset = function (preset, options) {
        Presets_1.Presets.addPreset(preset, options);
    };
    return Main;
}());
var tsParticles = new Main();
exports.tsParticles = tsParticles;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GoogleLog2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GoogleLog2 */ "./components/GoogleLog2.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../glug.png */ "./glug.png");
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_glug_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_FbLog2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FbLog2 */ "./components/FbLog2.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/rishav/Screencast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function trial2() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_8___default.a, {
    params: {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 900
          }
        },
        color: {
          value: ["#cc0000"]
        },
        line_linked: {
          color: "#aa0044",
          opacity: 1
        }
      }
    },
    style: {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      position: "fixed",
      index: "-10"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Screencast"), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "question.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      marginRight: "auto",
      marginLeft: "auto",
      textAlign: "center",
      marginTop: "100px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _glug_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "logo",
    style: {
      position: "relative",
      "float": "bottom",
      height: "120px",
      width: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sign",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "2020 ")), __jsx("div", {
    className: "login-head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Login to play"))), __jsx(_components_GoogleLog2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2819470",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2819470",
    __self: this
  }, "div.jsx-2819470{text-align:center;content-align:center;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdi9TY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGb0IsQUFHK0Isa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL3Jpc2hhdi9TY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvb2dsZUxvZzIgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZ2xlTG9nMlwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9nbHVnLnBuZ1wiO1xuaW1wb3J0IEZiTG9nMiBmcm9tIFwiLi4vY29tcG9uZW50cy9GYkxvZzJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXMtanNcIjtcbmZ1bmN0aW9uIHRyaWFsMigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFBhcnRpY2xlc1xuICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogMjAwLFxuICAgICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDkwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogW1wiI2NjMDAwMFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjYWEwMDQ0XCIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBpbmRleDogXCItMTBcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0Om5vXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+U2NyZWVuY2FzdDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cInF1ZXN0aW9uLmNzc1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtMb2dvfVxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICBmbG9hdDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyMHB4XCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhc3QtZmxpY2tlclwiPnNjcmVlbjwvc3Bhbj5jYXN0e1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxpY2tlclwiPjIwMjAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taGVhZFwiPlxuICAgICAgICAgICAgPGgxPkxvZ2luIHRvIHBsYXk8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdvb2dsZUxvZzIgLz5cbiAgICAgICAgPEZiTG9nMiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb250ZW50LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyaWFsMjtcbi8vXCJwcm94eVwiIDogXCJodHRwOi8vc2NyZWVuY2FzdDIwMjAuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL2dvb2dsZWxvZ2luXCJcbiJdfQ== */\n/*@ sourceURL=/home/rishav/Screencast/pages/index.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (trial2); //"proxy" : "http://screencast2020.azurewebsites.net/api/googlelogin"

/***/ })

})
//# sourceMappingURL=index.js.1046bacde5e98a7d8bdf.hot-update.js.map