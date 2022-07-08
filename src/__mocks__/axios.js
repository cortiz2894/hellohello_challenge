export default {
  get: jest.fn().mockResolvedValue({
    data: [],
  }),
};

export const sendMailMock = {
  post: jest.fn().mockResolvedValue({
    data: {},
  }),
};
