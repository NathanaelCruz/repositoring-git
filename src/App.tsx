import Header from "./components/Header"
import MainWrapper from "./components/MainWrapper"
import Owner from "./components/Owner"
import RepositoriesList from "./components/RepositoriesList"

const App = () => {

  // const owner = useSelector<StoreType, InitialStateProps>(state => state.RepositoryReducer)


  return (
    <>
      <Header />
      <MainWrapper>
        <Owner />
        <RepositoriesList />
      </MainWrapper>
    </>
  );
}

export default App;
