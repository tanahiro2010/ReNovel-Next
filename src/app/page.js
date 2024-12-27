import { LoadDatabase } from "@/controllers/database/load";

import Header from "@/components/header";

export default function Home() {

  const database = LoadDatabase();
  const novels   = database.novels;
  let displayNovels     = novels.filter((novel) => novel.status == "public");
  const hasDisplayNovel = displayNovels.length > 0;

  return (
    <>
      <Header />

      { (() => {
        if (hasDisplayNovel) {
          return (
            <div className={`text-center text-2xl`}>
              小説の表示機能は現在作成中です
            </div>
          );
        } else {
          return (
            <div className={`text-center text-2xl`}>現在小説が投稿されていません</div>
          );
        }
      })() } 
    </>
  );
}

