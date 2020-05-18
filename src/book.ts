/**
 * Created by anth on 21.05.2017.
 */

import { Blueprint } from './blueprint';
import * as util from './util';

export function book(str: string, opt = {}) {
  const version = str.slice(0, 1);
  if (version !== '0') {
    throw new Error(
      'Cannot find decoder for blueprint book version ' + version,
    );
  }
  let obj = util.decode[version](str);

  const blueprints = obj.blueprint_book.blueprints;
  const blueprintList: Blueprint[] = [];

  blueprints.forEach((blueprint: any) => {
    blueprint = blueprint.blueprint;
    blueprintList.push(new Blueprint(blueprint, opt));
  });

  return blueprintList;
};
