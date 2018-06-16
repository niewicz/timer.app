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
    const t1 = new Date(later).getTime();
    const t2 = new Date(earlier).getTime();

    const diff = t1 - t2;

    const s = Math.floor(diff / 1000);
    let tmp = s % 60;
    const seconds = tmp < 10 ? '0' + tmp.toString() : tmp.toString();

    const m = Math.floor(s / 60);
    tmp = m % 60;
    const minutes = tmp < 10 ? '0' + tmp.toString() : tmp.toString();

    const h = Math.floor(m / 60);
    tmp = h % 60;
    const hours = tmp < 10 ? '0' + tmp.toString() : tmp.toString();

    const days = Math.floor(h / 24);

    if (days > 0) {
      return `${days}:${hours}:${minutes}:${seconds}`;
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
  }

  fromSecToFormattedDuration(sec: number = 0, addLabels: boolean = false) {
    const min = Math.floor(sec / 60) % 60;
    const hour = Math.floor(sec / 3600);

    const partMin = min < 10 ? `0${min}` : `${min}`;

    return addLabels ? `${hour}h ${partMin}min` : `${hour}:${partMin}`;
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
