const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/delivery.css","css/deliveryData.css","css/layout.css","css/panel.css","css/preview.css","css/register.css","favicon.ico","images/backdropGif.gif","images/loading.gif","images/loginIcon.png","images/slogan.png","images/slogan2.png","js/checkLoged.js","js/nav.js"]),
	mimeTypes: {".css":"text/css",".ico":"image/vnd.microsoft.icon",".gif":"image/gif",".png":"image/png",".js":"application/javascript"},
	_: {
		entry: {"file":"_app/immutable/start-d48d6998.js","imports":["_app/immutable/start-d48d6998.js","_app/immutable/chunks/index-dfaff377.js","_app/immutable/chunks/singletons-8a471a1b.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-041090d0.js'),
			() => import('./chunks/1-d4c5dba6.js'),
			() => import('./chunks/2-30131bc9.js'),
			() => import('./chunks/3-ffefc281.js'),
			() => import('./chunks/4-1aa9266d.js'),
			() => import('./chunks/5-496cb158.js'),
			() => import('./chunks/6-5ed1e315.js'),
			() => import('./chunks/7-863c610c.js'),
			() => import('./chunks/8-293f1eb2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/delivery",
				pattern: /^\/delivery\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/delivery/[id]",
				pattern: /^\/delivery\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/history",
				pattern: /^\/history\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
