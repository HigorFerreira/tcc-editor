import { PropsWithChildren } from "react";

export default function Layout(
    { children }: PropsWithChildren
){
    return <section>
        <h1>Eu sou o Layout</h1>
        { children }
    </section>
}