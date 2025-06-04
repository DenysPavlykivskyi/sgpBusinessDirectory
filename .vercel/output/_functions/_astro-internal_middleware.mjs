import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cj-LMy9-.mjs';
import 'kleur/colors';
import './chunks/astro/server_DiIDCIrw.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_CD67slMA.mjs';

const onRequest$1 = async (context, next) => {
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
