import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b060fc11.js","app":"_app/immutable/entry/app.ea58ac71.js","imports":["_app/immutable/entry/start.b060fc11.js","_app/immutable/chunks/index.2d281d04.js","_app/immutable/chunks/singletons.58b904f2.js","_app/immutable/chunks/index.cec3a3fb.js","_app/immutable/entry/app.ea58ac71.js","_app/immutable/chunks/index.2d281d04.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/caida-libre",
				pattern: /^\/caida-libre\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/movimiento-circular-uniformemente-acelerado",
				pattern: /^\/movimiento-circular-uniformemente-acelerado\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/movimiento-circular-uniforme",
				pattern: /^\/movimiento-circular-uniforme\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/movimiento-parabolico-de-caida-libre",
				pattern: /^\/movimiento-parabolico-de-caida-libre\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/movimiento-rectilineo-uniformemente-variado",
				pattern: /^\/movimiento-rectilineo-uniformemente-variado\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/movimiento-rectilineo-uniforme",
				pattern: /^\/movimiento-rectilineo-uniforme\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/tiro-vertical",
				pattern: /^\/tiro-vertical\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
