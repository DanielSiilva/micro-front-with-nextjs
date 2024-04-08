import dynamic from "next/dynamic";

const LoadingComponent = () => <div>Carregando...</div>;

const RemoteLuigi = dynamic(() => import("app1/luigi"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

const App2 = () => <RemoteLuigi />;

export default App2;
