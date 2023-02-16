import NewPost from "./NewPost";
import { ViewPost } from "./ViewPost";
import LandingPage from "./LandingPage";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
export const App = () =>{
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            {/* <Route path="/post" element={<NewPost/>}></Route> */}
            <Route path="/postview" element={<ViewPost/>}></Route>
            <Route path="/newpost" element={<NewPost/>}></Route>
          </Routes>
        </BrowserRouter>
    )
}