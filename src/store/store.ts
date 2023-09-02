import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from './basket/basket'
import { api } from '@/http/api'
import { reducer as userReducer } from './user/user'

const mainReducer = combineReducers({
    basket: basketReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer
})

export const SetupStore = () => {
    return configureStore({
        reducer: {
            reducer: mainReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    })
}

export type MainState = ReturnType<typeof mainReducer>
export type StoreType = ReturnType<typeof SetupStore>
export type AppDispatch = StoreType['dispatch']