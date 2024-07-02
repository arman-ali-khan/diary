import Head from "next/head";

function ReadLayout({children,title}) {

    return (
        <div>
       <Head>
        <title>{title}</title>
       </Head>
            {children}
        </div>
    );
}

export default ReadLayout;