import configureStore from './configureStore';
import {loading, loaded} from '../actions/loading';
const store = configureStore();

console.log('=========== Example store ===========');
console.log(loading());
console.log(loaded());
console.log(loading());
console.log(loaded());
console.log('=========== end example store ===========');