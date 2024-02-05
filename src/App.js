import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Header from './Header/Header';
import ToolBar from './ToolBar/ToolBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollTop from './ScrollTop/ScrollTop';
import Footer from './Footer/Footer';
import ShopContextProvider from './Context/ShopContextProvider';
import BooksPage from './Pages/BooksPage';
import LimitPageBooksProvider from './Pages/MainComponents/LimitBookPages';
import FilterContextProvider from './Context/FilterContextProvider';
import Book from './Pages/Book';
import ErrorPage from './Pages/ErrorPage';


function App() {

  const client = new QueryClient(
    { defaultOptions: { queries: { refetchOnWindowFocus: false } } }
  );

  return (
    <>
      <div className='body'>
        <QueryClientProvider client={client}>
          <ShopContextProvider>
            <FilterContextProvider>
              <LimitPageBooksProvider>
                <Router>
                  <Header />
                  <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/books' element={<BooksPage />} />
                    <Route path='/books/book' element={<Book/>} />
                    <Route path='*' element={<ErrorPage/>} />
                  </Routes>
                  <Footer />
                  <ScrollTop />
                  <ToolBar />
                </Router>
              </LimitPageBooksProvider>
            </FilterContextProvider>
          </ShopContextProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;