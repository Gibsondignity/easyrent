import { API_URL } from "../../../config";

export default async (req, res) => {
    if (req.method === "POST") {
        const {
            first_name,
            last_name,
            username,
            email,
            password,
            re_password,

        } = req.body;


        const body = JSON.stringify({
            first_name,
            last_name,
            username,
            email,
            password,
            re_password,
        })

        try {
            const apiRes = await fetch(`${API_URL}/api/account/register`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            });

            const data = await apiRes.json();

            if (apiRes.status === 201) {
                return res.status(201).json({ success: data.success });
            }else{
                return res.status(apiRes.status).json({
                    error: data.error
                })
            }

        } catch (error) {
            return res.status(500).json({
                error: 'Something went wrong when registering'
            });
        }



    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({'error': `Method ${req.method} not allowed`})
    }
};






// export default async (req, res) => {
//     if (req.method === "POST") {
//         const { email, password } = req.body;
//         const response = await fetch(`${API_URL}/account/register`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ email, password })
//         });
//         const data = await response.json();
//         res.statusCode = data.status;
//         res.end(JSON.stringify(data));
//     }
// };
















