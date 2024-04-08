import dynamic from "next/dynamic";
const LoadingComponent = () => <div>Carregando...</div>;

const RemoteMario = dynamic(() => import("app2/mario"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

const App1 = () => <RemoteMario />;

export default App1;
