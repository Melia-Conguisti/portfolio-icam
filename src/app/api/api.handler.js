export function createHandlers({ GET, POST, PUT, DELETE, PATCH, roles }) {
    return {
        GET: async (req) => {
            try {
                const data = await GET(req);
                return Response.json(data);
            } catch (error) {
                return Response.json(error);
            }
        },
        POST: async (req, res) => {
            try {
                const data = await POST(req);
                return Response.json(data);
            } catch (error) {
                return Response.json(error);
            }
        },
        PUT: async (req, res) => {
            try {
                const data = await PUT(req);
                return Response.json(data);
            } catch (error) {
                return Response.json(error);
            }
        },
        DELETE: async (req, res) => {
            try {
                const data = await DELETE(req);
                return Response.json(data);
            } catch (error) {
                return Response.json(error);
            }
        },
        PATCH: async (req, res) => {
            try {
                const data = await PATCH(req);
                return Response.json(data);
            } catch (error) {
                return Response.json(error);
            }
        },
    };
}
