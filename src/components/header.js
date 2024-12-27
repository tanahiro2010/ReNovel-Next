import { authSession } from "@/controllers/session/authSession";
import { redirect }    from "next/dist/server/api-utils";
import { cookies }     from "next/headers";
import Link            from "next/link";

export default async function Header({ loginRedirect }) {
    const cookieStore  = await cookies();
    const sessionToken = cookieStore.get('token');
    const userId       = await authSession(sessionToken);

    if (loginRedirect) {
        if (userId) {
            redirect('/');
        }
    }

    return (
        <>
            <header className="bg-white shadow-md">
                <div className={`container mx-auto px-4 py-6 flex justify-between items-center`}>
                    <Link href="/" className={`text-3xl font-bold text-blue-600 hover:text-blue-500`}>
                        ReNovel
                    </Link>
                    <div className={`text-gray-600`}>
                        さぁ、貴方も内なる中二病を解放しましょう
                    </div>

                    <div className={`flex space-x-4`}>
                        <Link href="/search" className={`text-blue-600 hover:text-blue-500`}>
                            検索
                        </Link>

                        <Link href={ userId ? "/dashboard" : "/login" } className={`text-blue-600 hover:text-blue-500`}>
                            { userId ?? "ログイン" }
                        </Link>
                    </div>
                </div>
            </header>

            <br />
            <br />
        </>
    );
}