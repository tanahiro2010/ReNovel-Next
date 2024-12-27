import { createSession } from "@/controllers/session/createSession";
import { LoadDatabase }  from "@/controllers/database/load";
import { Response }      from "@/controllers/api/response";
import { encode }        from "@/controllers/hash";

export async function POST(req) {
    const { userid, password } = await req.json();
    console.log(`Try Login\nID: ${userid}\nPassword: ${password}`);

    const database = LoadDatabase();
    const users    = database.users;

    const userData = users.find((user) => user.id === userid);

    if (userData == undefined) {
        return Response(false, 'The id always used.');
    }

    if (encode(password) == userData.password) {
        const sessionToken = createSession(userid);
        return Response(true, "Success to Login.", {
            "sessionToken": sessionToken
        });
    }
}