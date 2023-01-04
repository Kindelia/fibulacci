import { persistentAtom } from "@nanostores/persistent";

type LoadingStore = {
	isEnterGameLoading?: boolean;
	isResetGameLoading?: boolean;
	isStartGameLoading?: boolean;
	isMoveGameLoading?: boolean;
	isSkillGameLoading?: boolean;
};

const initialState: LoadingStore = {
	isEnterGameLoading: false,
	isResetGameLoading: false,
	isStartGameLoading: false,
	isMoveGameLoading: false,
	isSkillGameLoading: false,
};

export const loadingStore = persistentAtom<LoadingStore>(
	"loading",
	{ ...initialState },
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	},
);

export const setLoadingStore = (newLoadingStore: LoadingStore) => {
	loadingStore.set({
		...loadingStore.get(),
		...newLoadingStore,
	});
};

export const resetLoadingStore = () => {
    loadingStore.set({ ...initialState });
}
