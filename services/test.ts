import request from './../utils/request';

export const testHandler = () => {
  request.post('/api/v1/user', {
    data: {
      name: 'Mike',
    },
  });
};
