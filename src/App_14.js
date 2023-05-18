import { BrowserRouter, Routes, Route} from 'react-router-dom';

import WomensProductStaticPage_14 from './pages/WomensProductStaticPage_14'
import Shop2Page_14 from './pages/supabase/Shop2Page_14';

const App_14 = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/static_14" element={<WomensProductStaticPage_14/>}/>
        <Route path="/supa_shop2_14" element={<shop2Page_14/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App_14;
