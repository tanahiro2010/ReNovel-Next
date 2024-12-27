import { createSession }  from "@/controllers/session/createSession";
import { LoadDatabase }   from "@/controllers/database/load";
import { SaveDatabase }   from "@/controllers/database/save";
import { Response }       from "@/controllers/api/response";
import { encode }         from "@/controllers/hash";


export async function POST(req) {

    let database = LoadDatabase();

    const { userid, username, email, password } = await req.json();

    console.log(`Try register\nID: ${userid}\nName: ${username}\nMail: ${email}\nPassword: ${password}`);

    const include_user = database.users.find((user) => user.id == userid);

    if (include_user) {
        return Response(false, "User already exists");
    }

    const user_data = {
        "user_id":  userid,
        "username": username,
        "email":    email,
        "password": encode(password)
    }

    database.users.push(user_data);

    SaveDatabase(database);
    

    return Response(true, "User created successfully", 200, {
        "sessionToken": createSession(userid)
    });
}