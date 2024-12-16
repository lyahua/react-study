
import {ImageChange } from './views/day01定时图片切换/index'

import { MyDay02, MyDay02Fn} from './views/day02组件和组件属性/index'

function App() {
  return (
    <div className="App">
     <ImageChange/>
     <hr/>
     <MyDay02 {...{a:1}}/>
     <hr/>
     <MyDay02Fn b={2}/>
    </div>
  );
}

export default App;
