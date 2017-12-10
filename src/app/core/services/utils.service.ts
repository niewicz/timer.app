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
  public getDuration(later: string, earlier: string): string {
    const d1 = new Date(later);
    const d2 = new Date(earlier);

    const days = d1.getDate() - d2.getDate();

    const h = d1.getHours() - d2.getHours();
    const hours = h < 10 ? '0' + h.toString() : h.toString();

    const m = d1.getMinutes() - d2.getMinutes();
    const minutes = m < 10 ? '0' + m.toString() : m.toString();

    const s = d1.getSeconds() - d2.getSeconds();
    const seconds = s < 10 ? '0' + s.toString() : s.toString();

    if (days > 0) {
      return `${days}:${hours}:${minutes}:${seconds}`;
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
  }

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
