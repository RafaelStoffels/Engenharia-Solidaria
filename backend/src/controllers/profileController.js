const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        if (!ong_id) {
            return response.status(400).json({ error: 'ong_id is required' });
        }

        try {
            const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

            return response.json(incidents);
        } catch (error) {
            return response.status(500).json({ error: 'Internal server error' });
        }
    }
};