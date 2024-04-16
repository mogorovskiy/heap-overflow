import PageWithHeader from "./PageWithHeader";

export default function HomePage() {
    const contentElement = <div>
        <h1>Home page</h1>
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}
