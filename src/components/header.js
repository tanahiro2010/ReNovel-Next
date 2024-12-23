import Link from "next/link";

export default function Header() {
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
                        <Link url="/search" className={`text-blue-600 hover:text-blue-500`}>
                            検索
                        </Link>
                        <Link href="/login" className={`text-blue-600 hover:text-blue-500`}>
                            ログイン
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}