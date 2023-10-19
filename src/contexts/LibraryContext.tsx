import { createContext, useContext, useReducer } from 'react';
import { ILibraryContext, ILibraryState, LibraryActionType, ILibraryContextProvider } from '../interfaces';
import { LibraryActions } from '../constants';

const LibraryContext = createContext<ILibraryContext | null>(null);

export const useLibraryContext = () => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error('LibraryContext not found. Make sure to wrap your application with LibraryContextProvider.');
  }

  return context;
}

const initialLibraryState: ILibraryState = {
  selectedCategory: null,
  selectedBook: null,
  borrowError: null,
  returnError: null,
}

const libraryReducer = (state: ILibraryState, action: LibraryActionType) => {
  switch (action.type) {
    case LibraryActions.SELECT_CATEGORY:
      return { ...state, selectedCategory: action.payload, borrowError: null };
    case LibraryActions.SELECT_BOOK:
      return { ...state, selectedBook: action.payload, borrowError: null };
    case LibraryActions.BORROW_SUCCESS:
      return { ...state, selectedCategory: null, borrowError: null };
    case LibraryActions.BORROW_FAILURE:
      return { ...state, borrowError: action.payload };
    case LibraryActions.RETURN_SUCCESS:
      return { ...state, selectedBook: null, returnError: null };
    case LibraryActions.RETURN_FAILURE:
      return { ...state, returnError: action.payload };
    case LibraryActions.RESET_ERRORS:
      return { ...state, borrowError: null, returnError: null };
    default:
      return state;
  }
}

export const LibraryContextProvider = ({ children }: ILibraryContextProvider) => {
  const [libraryState, dispatchLibrary] = useReducer(libraryReducer, initialLibraryState);
  const value = { libraryState, dispatchLibrary };

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  )
}
