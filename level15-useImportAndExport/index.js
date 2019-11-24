// import and export

// we have imported the default so we can name it whatever we want
// the package name in the '' needs to match the name of the node modules
// if it doesn't start with a ./ it is probably coming from node modules
import moment from "moment";
console.log(moment().format("YYYY-MM-DD"));

// lodash has a lot of utility methods
// this is a named import
// we are pulling out a specific method and must match the name
// we can rename them though
// import { get as newName } from "lodash";
import { get } from "lodash";

// if you are using a module that has a lot of named exports and you want to import all of them then

import * as _ from "lodash";
console.log(_.get(object, "a.b.c"));
// the _ contains all of the methods as keys
// must be * as somethingElse you can't import * into the current name space
const object = {
  a: {
    b: {
      c: 7
    }
  }
};

console.log(get(object, "a.b.c"));

// default export so we can name it what we want
import sayHi from "./export";
import { printName } from "./export";
// must be in the order of default first
import sayHi, { printName } from "./export";
sayHi();
