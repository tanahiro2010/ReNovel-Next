"use client";

import { loginForm } from "@/controllers/formAction/loginForm";
import { FormLabel } from "@mui/material";
import SubmitButton  from "@/components/accounts/submitButton";
import { useRef }    from "react";
import Header        from "@/components/header";
import Input         from "@/components/accounts/input";


export default function Page() {
    const idRef = useRef();
    const passwordRef = useRef();

    return (
        <>
            <Header loginRedirect={true} />

            <section className="login-box p-6 max-w-md mx-auto bg-white shadow-md rounded">
                <form className="login-form" onSubmit={(e) => {
                    e.preventDefault();

                    const userData = {
                        "id":       idRef.current.value,
                        "password": passwordRef.current.value
                    };

                    loginForm(userData);
                }}>
                    <h2 className="section-title text-2xl font-bold mb-4">ログイン</h2>

                        <div className={"label-login block mb-2"}>
                            ID:
                            <Input 
                                placeholder={`ID`} 
                                ref={idRef} />
                        </div>

                        <div className={"label-login block mb-4"}>
                            Password:
                            <Input 
                                placeholder="Password" 
                                type="password" 
                                ref={passwordRef} />

                        </div>

                        <SubmitButton color="blue">
                            ログイン
                        </SubmitButton>

                        <div className="mt-4">
                            <a href="/register" className="text-blue-600 hover:underline">登録しますか？</a><br />
                                <a href="./forget_password" className="text-sm text-blue-600 hover:underline">パスワードを忘れた場合</a>
                        </div>
                </form>
            </section>
        </>
    )
}