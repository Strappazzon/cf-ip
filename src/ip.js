addEventListener('fetch', e => {
	const M = e.request.method;

	(M !== 'GET') ? e.respondWith(jsonError(`Method not allowed: ${M}`, 405)) : e.respondWith(handleRequest(e.request));
});

async function handleRequest(r) {
	const HEADERS = {
		'Content-Type'           : 'text/plain; charset=utf-8',
		'Cache-Control'          : 'no-cache, no-store, must-revalidate',
		'X-Content-Type-Options' : 'nosniff',
		'X-Source-Code'          : 'https://github.com/Strappazzon/cf-ip'
	};

	return new Response(r.headers.get('CF-Connecting-IP') + '\n', {
		status: 200,
		headers: HEADERS
	});
}

function jsonError(message, status = 400) {
	return new Response(
		JSON.stringify({
			error: message
		}),
		{
			status: status,
			headers: {
				'Content-Type' : 'application/json; charset=utf-8'
			}
		}
	);
}
