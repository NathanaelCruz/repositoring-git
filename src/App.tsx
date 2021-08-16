import Header from "./components/Header"
import MainWrapper from "./components/MainWrapper"
import Owner from "./components/Owner"

const App = () => {

  // const owner = useSelector<StoreType, InitialStateProps>(state => state.RepositoryReducer)


  return (
    <>
      <Header />
      <MainWrapper>
        <Owner />
      </MainWrapper>
    </>
  );
}

export default App;
