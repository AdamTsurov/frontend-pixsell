import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../Slice/basketSlice";
import gameSlice from "../Slice/GamesList";
import vacancySlice from "../Slice/vacancySlice";
import registration from "../Slice/registrationSlice";
import promoSclice from "../Slice/PromoSlice";
import responseSlice from "../Slice/responseSlice";
import reviewSlice from "../Slice/reviewSlice";
import favoriteSlice from "../Slice/favoriteSlice";
 
export const store = configureStore({
  reducer: {
    gameReducer: gameSlice,
    promoReducer: promoSclice,
    registrationReducer: registration,
    basketReducer: basketSlice,
    vacancySlice,
    reviewSlice,
    favoriteReducer: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
