// import createStore from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store

import { legacy_createStore as creatstore} from "redux";
import reducer from "./reducer" 



const store = creatstore(reducer);

export default store