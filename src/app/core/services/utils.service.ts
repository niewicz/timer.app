import { Injectable } from '@angular/core';

import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import isArray from 'lodash/isArray';
import isDate from 'lodash/isDate';
import isObject from 'lodash/isObject';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import keys from 'lodash/keys';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

@Injectable()
export class UtilsService {
  public camelize(data: any) {
    if (isString(data)) {
      return camelCase(data);
    } else {
      return this.try(data, camelCase);
    }
  }

  public decamelize(data: any) {
    if (isString(data)) {
      return snakeCase(data);
    } else {
      return this.try(data, snakeCase);
    }
  }

  private try(data, useFunction) {
    if (!data || !isObject(data)) {
      return data;
    } else if (isDate(data) || isRegExp(data)) {
      return data;
    } else if (isArray(data)) {
      return map(data, item => this.try(item, useFunction));
    } else {
      return reduce(
        keys(data),
        (acc, key) => {
          const camel = useFunction(key);

          acc[camel] = this.try(data[key], useFunction);
          return acc;
        },
        {},
      );
    }
  }
}
