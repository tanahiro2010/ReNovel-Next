import Header from "@/components/header";
import createSession from "@/controllers/session/createSession";

export default async function Page({ params }) {
    const work_id = params.slug;

    return (
        <>
            <Header username={work_id} />

            <div className={`container mx-auto px-4 py-6`}>
                <h1 className={`text-2xl font-bold`}>
                    id: {work_id}
                </h1>
            </div>
        </>
    );
}

