export const onRequest = async (context, next) => {
    try {
      return await next();
    } catch (error) {
      console.error('Server Error:', error);
      return new Response(JSON.stringify({
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  };