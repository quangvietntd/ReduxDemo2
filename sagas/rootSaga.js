import { all, fork } from 'redux-saga/effects';
import {
    watchFetchMovies,
    watchAddNewMovie,
    watchUpdateMovie,
    watchDeleteMovie
} from './movieSagas.js';

import {allSagas} from './movieSagas.js';


export default function* rootSaga() {

    // yield all({
    //     fetchMovies: fork(watchFetchMovies),
    //     addNewMovie: fork(watchAddNewMovie),
    //     updateMovie: fork(watchUpdateMovie),
    //     deleteMovie: fork(watchDeleteMovie),
    // });

   // yield all(allSagas.map(e => fork(e)));

      yield all([
         fork(watchFetchMovies),
         fork(watchAddNewMovie),
         fork(watchUpdateMovie),
         fork(watchDeleteMovie),
      ]);

}
