import { rest } from 'msw';

// https://run.mocky.io/v3/5e24e297-6f6a-4e95-b80b-773a2dbdfa55

export const handlers = [
  rest.get('https://run.mocky.io/v3/:id', async (req, res, ctx) => {
    // Perform an original request to the intercepted request URL
    const originalResponse = await ctx.fetch(req);
    const originalResponseData = await originalResponse.json();
    return res(
      ctx.json({
        ...originalResponseData,
        location: originalResponseData.location,
        firstName: 'Not the real first name',
      }),
    );
  }),
];
