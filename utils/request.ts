import { extend } from 'umi-request';

const errorHandler = (error) => {};

const request = extend({
  errorHandler,
  credentials: 'include',
});

export default request;
